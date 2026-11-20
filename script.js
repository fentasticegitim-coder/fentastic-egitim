(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // Mobil menü
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Sekmeler (Konu Anlatımı / Soru Çözümü)
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function showTab(panelId, updateHash) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("aria-controls") === panelId;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    });
    if (updateHash && window.history && history.replaceState) {
      history.replaceState(null, "", "#" + panelId);
    }
  }
  if (tabs.length) {
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () {
        showTab(t.getAttribute("aria-controls"), true);
      });
      t.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (next) {
          e.preventDefault();
          next.focus();
          showTab(next.getAttribute("aria-controls"), true);
        }
      });
    });
    var wanted = (location.hash || "").slice(1);
    var ids = tabs.map(function (t) { return t.getAttribute("aria-controls"); });
    showTab(ids.indexOf(wanted) > -1 ? wanted : ids[0], false);
  }

  // Soru çözümü: şıkka tıklayınca doğru/yanlış ve çözüm gösterilir
  var sorular = document.querySelectorAll(".soru");
  var skorEl = document.getElementById("skor");
  var dogruSayisi = 0;
  var cevaplanan = 0;
  function skoruYaz() {
    if (skorEl) {
      skorEl.textContent = "Doğru: " + dogruSayisi + " / " + sorular.length +
        "  (cevaplanan: " + cevaplanan + ")";
    }
  }
  sorular.forEach(function (soru) {
    var dogru = soru.getAttribute("data-dogru");
    var siklar = soru.querySelectorAll(".sik");
    var cozum = soru.querySelector(".cozum");
    siklar.forEach(function (sik) {
      sik.addEventListener("click", function () {
        if (soru.getAttribute("data-bitti")) return;
        soru.setAttribute("data-bitti", "1");
        var secilen = sik.getAttribute("data-key");
        cevaplanan += 1;
        if (secilen === dogru) {
          dogruSayisi += 1;
          sik.classList.add("dogru");
        } else {
          sik.classList.add("yanlis");
        }
        siklar.forEach(function (s) {
          if (s.getAttribute("data-key") === dogru) s.classList.add("dogru");
          s.disabled = true;
        });
        if (cozum) cozum.hidden = false;
        skoruYaz();
      });
    });
  });
  skoruYaz();
})();
