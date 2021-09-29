'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--1');
const player0 = document.querySelector('.player--0');
const player_active = document.querySelector('.player--active');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const current_score0 = document.querySelector('#current--0');
const current_score1 = document.querySelector('#current--1');
let score = 0;

// init
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let scores = [0, 0];
let active_player = 0;
let current_player = 0;

//process

const change_player = function () {
  document.querySelector(`#current--${active_player}`).textContent = score = 0;
  active_player = active_player === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btn_roll.addEventListener('click', function () {
  const Rnum = Math.trunc(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${Rnum}.png`;
  if (Rnum !== 1) {
    score += Rnum;
    document.querySelector(`#current--${active_player}`).textContent = score;
  } else {
    change_player();
  }
});

btn_hold.addEventListener('click', function () {
  scores[active_player] += score;
  document.querySelector(`#score--${active_player}`).textContent =
    scores[active_player];
  change_player();
});

btn_new.addEventListener('click', function () {
  let isBool = false;
  if (!dice.classList.contains('hidden')) dice.classList.add('hidden');
  if (!player0.classList.contains('player--active'))
    player0.classList.add('player--active');
  player1.classList.remove('player--active');
  current_score1.textContent =
    current_score0.textContent =
    score1.textContent =
    score0.textContent =
    score =
      0;
});
