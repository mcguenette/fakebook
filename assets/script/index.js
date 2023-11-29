'use strict';

// import { Contact } from './contact.js';
import { onEvent, select, selectAll } from './utils.js';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.modal-open');
const closeModalBtn = document.querySelector('.modal-close');


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modalClose();
    }
  });


  openModalBtn.addEventListener('click', openModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown');
  closeModalBtn.addEventListener('click', closeModal);
