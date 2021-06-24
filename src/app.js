/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = document.querySelector(".card");
  let item = document.querySelector(".card h1");

  let suit = ["hearts", "diamonds", "spades", "clubs"];
  let rank = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let selectedSuit = suit[getRndInteger(0, suit.length - 1)];

  card.classList.add(selectedSuit);
  item.innerHTML = rank[getRndInteger(0, rank.length - 1)];
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
