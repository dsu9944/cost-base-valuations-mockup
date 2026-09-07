/**
 * Lock the Date Valuations — mockup JS
 * Nav + client-side demo indicative estimate (hardcoded; no API / no engine).
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

  /** Hardcoded demo figures — UX mock only. Never calculated. */
  var DEMO_ESTIMATE = {
    figure: "$1,050,000",
    rangeLow: "$980,000",
    rangeHigh: "$1,120,000"
  };

  function resolveAsAtDate(purpose, customDate) {
    var custom = (customDate || "").trim();
    if (purpose === "30 June 2027") return "30 June 2027";
    if (custom) return custom;
    if (purpose === "First rented / change of use") return "first rented / change of use";
    if (purpose === "Date of death") return "date of death";
    if (purpose) return purpose;
    return "the nominated date";
  }

  function initEstimateDemo() {
    var form = document.getElementById("estimate-form");
    if (!form) return;

    var purpose = document.getElementById("purpose");
    var customWrap = document.getElementById("custom-date-wrap");
    var formPanel = document.getElementById("estimate-form-panel");
    var result = document.getElementById("estimate-result");
    var resetBtn = document.getElementById("estimate-reset");

    function syncCustomDateVisibility() {
      if (!purpose || !customWrap) return;
      var val = purpose.value;
      var needsCustom =
        val === "First rented / change of use" ||
        val === "Date of death" ||
        val === "Other tax date";
      customWrap.hidden = !needsCustom;
    }

    if (purpose) {
      purpose.addEventListener("change", syncCustomDateVisibility);
      syncCustomDateVisibility();
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var addressEl = document.getElementById("property-address");
      var customEl = document.getElementById("custom-date");
      var address = addressEl ? addressEl.value.trim() : "";
      var purposeVal = purpose ? purpose.value : "";

      if (!address) {
        if (addressEl) addressEl.focus();
        return;
      }
      if (!purposeVal) {
        if (purpose) purpose.focus();
        return;
      }

      var asAt = resolveAsAtDate(purposeVal, customEl ? customEl.value : "");

      var resultAddress = document.getElementById("result-address");
      var resultAsAt = document.getElementById("result-as-at");
      var resultFigure = document.getElementById("result-figure");
      var resultRange = document.getElementById("result-range");
      var resultDateInline = document.getElementById("result-date-inline");

      if (resultAddress) resultAddress.textContent = address;
      if (resultAsAt) {
        resultAsAt.textContent = "Indicative estimate as at " + asAt;
      }
      if (resultFigure) resultFigure.textContent = DEMO_ESTIMATE.figure;
      if (resultRange) {
        resultRange.textContent =
          "Illustrative range: " +
          DEMO_ESTIMATE.rangeLow +
          " – " +
          DEMO_ESTIMATE.rangeHigh;
      }
      if (resultDateInline) resultDateInline.textContent = asAt;

      if (formPanel) formPanel.hidden = true;
      if (result) {
        result.hidden = false;
        result.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (result) result.hidden = true;
        if (formPanel) formPanel.hidden = false;
        form.reset();
        syncCustomDateVisibility();
        if (formPanel) formPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    var enquireForm = document.getElementById("enquire-form");
    var enquireConfirm = document.getElementById("enquire-confirm");
    if (enquireForm) {
      enquireForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (enquireConfirm) {
          enquireConfirm.hidden = false;
          enquireConfirm.classList.add("visible");
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveNav();
    initMobileNav();
    initEstimateDemo();
  });
})();
