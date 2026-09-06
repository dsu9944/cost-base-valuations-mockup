/**
 * Lock the Date Valuations — mockup JS (client-side only)
 */
(function () {
  "use strict";

  function setActiveNav() {
    var path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!path || path === "") path = "index.html";
    document.querySelectorAll(".nav a[href]").forEach(function (a) {
      var href = (a.getAttribute("href") || "").toLowerCase();
      var hrefFile = href.split("?")[0].split("#")[0];
      if (hrefFile === path) a.setAttribute("aria-current", "page");
    });
  }

  function uid() {
    var t = Date.now().toString(36);
    var r = Math.random().toString(36).slice(2, 8);
    return "job_" + t + "_" + r;
  }

  function isoNow() {
    return new Date().toISOString();
  }

  function gatherDocs(form) {
    var boxes = form.querySelectorAll('input[name="docs"]:checked');
    var docs = [];
    boxes.forEach(function (el) {
      docs.push(el.value);
    });
    var fileInput = form.querySelector("#docFiles");
    if (fileInput && fileInput.files && fileInput.files.length) {
      var names = [];
      for (var i = 0; i < fileInput.files.length; i++) {
        names.push(fileInput.files[i].name);
      }
      docs.push({ uploadedFilenames: names, note: "filenames only — no upload yet" });
    }
    return docs;
  }

  function buildPayload(form) {
    var sku = form.sku.value;
    var purposeMap = {
      cgt_retrospective: "Signed market valuation as at nominated tax date (desktop)",
      mv_2027_06_30: "Signed market valuation as at 30 June 2027 (inspected)"
    };
    var defaultDate = sku === "mv_2027_06_30" ? "2027-06-30" : form.valuationDate.value;

    return {
      jobId: uid(),
      sku: sku,
      purpose: form.purpose.value || purposeMap[sku] || "",
      valuationDate: form.valuationDate.value || defaultDate,
      property: {
        address: form.address.value.trim(),
        state: form.state.value,
        postcode: form.postcode.value.trim(),
        propertyType: form.propertyType.value
      },
      client: {
        name: form.clientName.value.trim(),
        email: form.clientEmail.value.trim(),
        phone: form.clientPhone.value.trim()
      },
      docs: gatherDocs(form),
      recordsTried: form.recordsTried.value,
      notes: form.notes.value.trim() || null,
      createdAt: isoNow()
    };
  }

  function goToStep(n) {
    document.querySelectorAll(".wizard-panel").forEach(function (p) {
      p.classList.toggle("active", Number(p.getAttribute("data-panel")) === n);
    });
    document.querySelectorAll(".wizard-pill").forEach(function (pill) {
      var s = Number(pill.getAttribute("data-step"));
      pill.classList.remove("active", "done");
      if (s === n) pill.classList.add("active");
      else if (s < n) pill.classList.add("done");
    });
    var target = document.getElementById("step" + n);
    if (target) {
      try {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (e) { /* ignore */ }
    }
  }

  function syncRecordsChoice() {
    var form = document.getElementById("intakeForm");
    var selected = document.querySelector('input[name="recordsChoice"]:checked');
    var note = document.getElementById("recordsRecoveredNote");
    if (!selected) return;
    if (form && form.recordsTried) form.recordsTried.value = selected.value;
    if (note) note.hidden = selected.value !== "recovered";
  }

  function syncSkuChoice() {
    var form = document.getElementById("intakeForm");
    var selected = document.querySelector('input[name="skuChoice"]:checked');
    if (!selected || !form || !form.sku) return;
    form.sku.value = selected.value;
    form.sku.dispatchEvent(new Event("change"));
  }

  function initWizard() {
    if (!document.getElementById("step1")) return;

    document.querySelectorAll('input[name="recordsChoice"]').forEach(function (r) {
      r.addEventListener("change", syncRecordsChoice);
    });
    document.querySelectorAll('input[name="skuChoice"]').forEach(function (r) {
      r.addEventListener("change", syncSkuChoice);
    });
    syncRecordsChoice();

    var to2 = document.getElementById("toStep2");
    var to3 = document.getElementById("toStep3");
    var back1 = document.getElementById("backTo1");
    var back2 = document.getElementById("backTo2");

    if (to2) {
      to2.addEventListener("click", function () {
        syncRecordsChoice();
        goToStep(2);
      });
    }
    if (to3) {
      to3.addEventListener("click", function () {
        syncSkuChoice();
        goToStep(3);
      });
    }
    if (back1) back1.addEventListener("click", function () { goToStep(1); });
    if (back2) back2.addEventListener("click", function () { goToStep(2); });

    // Query prefill may jump past records if sku + recordsTried=failed/skipped
    try {
      var params = new URLSearchParams(window.location.search);
      var sku = params.get("sku");
      var records = params.get("recordsTried");
      if (sku) {
        var skuRadio = document.querySelector('input[name="skuChoice"][value="' + sku + '"]');
        if (skuRadio) skuRadio.checked = true;
      }
      if (records) {
        var recRadio = document.querySelector('input[name="recordsChoice"][value="' + records + '"]');
        if (recRadio) recRadio.checked = true;
        syncRecordsChoice();
      }
      if (sku && (records === "failed" || records === "skipped")) {
        syncSkuChoice();
        goToStep(3);
      } else if (sku) {
        syncSkuChoice();
        goToStep(2);
      }
    } catch (e) { /* ignore */ }
  }

  function initIntake() {
    var form = document.getElementById("intakeForm");
    if (!form) return;

    var confirmBox = document.getElementById("confirmBox");
    var jsonOut = document.getElementById("jsonOutput");
    var skuSelect = form.sku;
    var dateField = form.valuationDate;
    var purposeField = form.purpose;

    function syncSkuDefaults() {
      var sku = skuSelect.value;
      if (sku === "mv_2027_06_30") {
        dateField.value = "2027-06-30";
        if (!purposeField.value || purposeField.dataset.auto === "1") {
          purposeField.value = "Signed market valuation as at 30 June 2027 (inspected)";
          purposeField.dataset.auto = "1";
        }
      } else if (sku === "cgt_retrospective") {
        if (dateField.value === "2027-06-30") dateField.value = "";
        if (!purposeField.value || purposeField.dataset.auto === "1") {
          purposeField.value = "Signed market valuation as at nominated tax date (desktop)";
          purposeField.dataset.auto = "1";
        }
      }
      // Keep wizard radio in sync if present
      var radio = document.querySelector('input[name="skuChoice"][value="' + sku + '"]');
      if (radio) radio.checked = true;
    }

    purposeField.addEventListener("input", function () {
      purposeField.dataset.auto = "0";
    });
    skuSelect.addEventListener("change", syncSkuDefaults);
    syncSkuDefaults();

    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get("sku")) {
        skuSelect.value = params.get("sku");
        syncSkuDefaults();
      }
      if (params.get("recordsTried")) {
        form.recordsTried.value = params.get("recordsTried");
        var recRadio = document.querySelector('input[name="recordsChoice"][value="' + params.get("recordsTried") + '"]');
        if (recRadio) recRadio.checked = true;
      }
    } catch (e) { /* ignore */ }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var payload = buildPayload(form);
      jsonOut.textContent = JSON.stringify(payload, null, 2);
      confirmBox.classList.add("visible");
      confirmBox.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    var resetBtn = document.getElementById("resetForm");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        confirmBox.classList.remove("visible");
        jsonOut.textContent = "";
        purposeField.dataset.auto = "1";
        syncRecordsChoice();
        syncSkuChoice();
        syncSkuDefaults();
      });
    }
  }


  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function closeNav() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }

    function openNav() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }

    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) closeNav();
      else openNav();
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveNav();
    initMobileNav();
    initWizard();
    initIntake();
  });
})();
