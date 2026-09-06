/**
 * Cost Base Valuations — draft mockup JS (client-side only)
 */
(function () {
  "use strict";

  // Highlight current nav link
  function setActiveNav() {
    var path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!path || path === "") path = "index.html";
    document.querySelectorAll(".nav a[href]").forEach(function (a) {
      var href = (a.getAttribute("href") || "").toLowerCase();
      if (href === path) a.setAttribute("aria-current", "page");
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
      docs.push({ uploadedFilenames: names, note: "filenames only — no upload in mockup" });
    }
    return docs;
  }

  function buildPayload(form) {
    var sku = form.sku.value;
    var purposeMap = {
      cgt_retrospective: "CGT cost-base reconstruction (retrospective desktop)",
      mv_2027_06_30: "Market value as at 30 June 2027"
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
          purposeField.value = "Market value as at 30 June 2027";
          purposeField.dataset.auto = "1";
        }
      } else if (sku === "cgt_retrospective") {
        if (dateField.value === "2027-06-30") dateField.value = "";
        if (!purposeField.value || purposeField.dataset.auto === "1") {
          purposeField.value = "CGT cost-base reconstruction (retrospective desktop)";
          purposeField.dataset.auto = "1";
        }
      }
    }

    purposeField.addEventListener("input", function () {
      purposeField.dataset.auto = "0";
    });
    skuSelect.addEventListener("change", syncSkuDefaults);
    syncSkuDefaults();

    // Prefill from query string (e.g. ?sku=cgt_retrospective&recordsTried=failed)
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get("sku")) {
        skuSelect.value = params.get("sku");
        syncSkuDefaults();
      }
      if (params.get("recordsTried")) {
        form.recordsTried.value = params.get("recordsTried");
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
        syncSkuDefaults();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveNav();
    initIntake();
  });
})();
