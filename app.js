/**
 * Ashford Valuations — static landing JS
 * Nav + homepage indicative estimate reveal (hardcoded demo) + start.html on-page fixed-price quote + video facades.
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

  /** Illustrative figures until the model is live — not calculated. */
  var DEMO_ESTIMATE = {
    figure: "$1,050,000",
    rangeLow: "$980,000",
    rangeHigh: "$1,120,000"
  };

  function resolveAsAtDate(purpose, customDate) {
    var custom = (customDate || "").trim();
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
    var isHomepageAvm = !!(formPanel && formPanel.classList.contains("avm-box"));
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
      if (purpose && !purposeVal) {
        purpose.focus();
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
      if (resultDateInline) {
        resultDateInline.textContent = isHomepageAvm
          ? "Indicative only · not a valuation, not for tax"
          : asAt;
      }

      /* AVM homepage: keep the address box visible; start.html still swaps panels */
      var keepForm = !!(formPanel && formPanel.classList.contains("avm-box"));
      if (formPanel && !keepForm) formPanel.hidden = true;
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
        var scrollTarget = formPanel || form;
        if (scrollTarget) scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  /* Fixed-price quote on start.html — worked out in the browser only.
     No network call, no storage, no URL/query-string writes; the form never submits. */
  var QUOTE_PRICE_STANDARD = 229;
  var QUOTE_PRICE_OLDER = 279;
  var QUOTE_OLDER_CUTOFF_YEAR = 2012; /* bought 15+ years before 2027 */
  var QUOTE_MIN_YEAR = 1900;
  var QUOTE_MAX_YEAR = 2027;

  function initQuote() {
    var form = document.getElementById("quote-form");
    if (!form) return;
    var addr = document.getElementById("q-address");
    var state = document.getElementById("q-state");
    var type = document.getElementById("q-type");
    var year = document.getElementById("q-year");
    var own = document.getElementById("q-own");
    var prompt = document.getElementById("quote-prompt");
    var message = document.getElementById("quote-message");
    var block = document.getElementById("quote-price-block");
    var price = document.getElementById("quote-price");
    var older = document.getElementById("quote-older");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });

    function show(mode, text) {
      prompt.hidden = mode !== "prompt";
      message.hidden = mode !== "message";
      block.hidden = mode !== "price";
      if (mode === "message") message.textContent = text;
      if (mode === "prompt" && text) prompt.textContent = text;
    }

    function update() {
      var st = state.value;
      var ty = type.value;
      var yrRaw = (year.value || "").trim();
      var yr = /^\d{4}$/.test(yrRaw) ? parseInt(yrRaw, 10) : NaN;

      if (st && st !== "NSW" && st !== "VIC") {
        show("message", "We currently cover NSW and VIC only");
        return;
      }
      if (ty === "Other") {
        show("message", "We'll need to quote this one");
        return;
      }
      if (yrRaw && (isNaN(yr) || yr < QUOTE_MIN_YEAR || yr > QUOTE_MAX_YEAR)) {
        show("prompt", "Enter a year between " + QUOTE_MIN_YEAR + " and " + QUOTE_MAX_YEAR + ".");
        return;
      }
      if (!addr.value.trim() || !st || !ty || isNaN(yr) || !own.value) {
        show("prompt", "Fill in all fields to see your fixed price.");
        return;
      }
      var isOlder = yr <= QUOTE_OLDER_CUTOFF_YEAR;
      var amount = isOlder ? QUOTE_PRICE_OLDER : QUOTE_PRICE_STANDARD;
      price.textContent = "Your fixed price: $" + amount + " ";
      var gst = document.createElement("span");
      gst.textContent = "incl GST";
      price.appendChild(gst);
      older.hidden = !isOlder;
      var payPrice = document.getElementById("order-pay-price");
      if (payPrice) payPrice.textContent = String(amount);
      show("price");
    }

    [addr, state, type, year, own].forEach(function (el) {
      el.addEventListener("input", update);
      el.addEventListener("change", update);
    });
    update();
  }

  /* Order step preview on start.html: valuation-date choice shows/hides detail.
     Browser-only: no network call, no storage, no URL writes; nothing is submitted. */
  function initOrderDate() {
    var group = document.getElementById("valuation-date");
    if (!group) return;
    var pastWrap = document.getElementById("o-past-wrap");
    var preorder = document.getElementById("o-preorder");
    var pastDate = document.getElementById("o-past-date");
    if (pastDate) {
      var d = new Date();
      var pad = function (n) { return (n < 10 ? "0" : "") + n; };
      pastDate.max = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
    }
    function sync() {
      var picked = group.querySelector('input[type="radio"]:checked');
      var val = picked ? picked.value : "";
      pastWrap.hidden = val !== "past";
      preorder.hidden = val !== "tax";
    }
    group.addEventListener("change", sync);
    sync();
  }

  /* Click-to-play YouTube facade: no YouTube player requests until the user clicks.
     Without JS the facade is a plain link to the YouTube watch page. */
  function initVideoFacades() {
    document.querySelectorAll(".yt-facade[data-yt-id]").forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("data-yt-id");
        if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
        e.preventDefault();
        var iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube-nocookie.com/embed/" + id;
        iframe.title = link.getAttribute("data-yt-title") || "YouTube video";
        iframe.setAttribute("allow", "encrypted-media; picture-in-picture; fullscreen");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        link.parentNode.replaceChild(iframe, link);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveNav();
    initMobileNav();
    initEstimateDemo();
    initQuote();
    initOrderDate();
    initVideoFacades();
  });
})();
