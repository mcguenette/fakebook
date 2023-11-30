'use strict';

import { User, Subscriber } from './account.js';
import { onEvent, select } from './utils.js';

const modal = select('.modal');
const overlay = select('.overlay');
const openModalBtn = select('.modal-open');
const closeModalBtn = select('.modal-close');

const openModal = function () {
    modal.style.display = 'flex';
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.style.display = 'none';
    overlay.classList.add('hidden');
};

onEvent('keydown', document, function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

onEvent('click', openModalBtn, openModal);
onEvent('click', overlay, closeModal);
onEvent('click', closeModalBtn, closeModal);
