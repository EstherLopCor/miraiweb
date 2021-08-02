"use strict";

if (document.getElementById("btnModal")) {
  const modal = document.getElementById("tvesModal");
  const btn = document.getElementById("btnModal");
  const span = document.getElementsByClassName("close")[0];
  const body = document.getElementsByTagName("body")[0];

  btn.onclick = function () {
    modal.style.display = "block";
    body.style.position = "static";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };
}
