'use strict';

const width = 310;
const count = 1;
let position = 0;
let active = 0;

const list = document.querySelector('ul');
const listElems = document.querySelectorAll('li');
const btn_prev = document.querySelector('.carousel__btn_prev');
const btn_next = document.querySelector('.carousel__btn_next');
const dots = document.querySelectorAll('.carousel__dot');

btn_prev.addEventListener('click', prevAct);

function prevAct() {
  position += width * count;
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
}

btn_next.addEventListener('click', nextAct);

function nextAct() {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
}

btn_next.addEventListener('click', nextDot);

function nextDot () {
  dots[active].classList.remove('carousel__dot_active');
  if (active + 1 === dots.length) {
  dots[active].classList.add('carousel__dot_active')
  return;
  } else {
    active++;
  }
  dots[active].classList.add('carousel__dot_active');
}

btn_prev.addEventListener('click', prevDot);

function prevDot () {
  dots[active].classList.remove('carousel__dot_active');
  if (active === 0) {
    active = 0;
  } else {
    active--;
  }
  dots[active].classList.add('carousel__dot_active');
}

