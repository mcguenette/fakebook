'use strict';

import { User, Subscriber, Post } from './Account.js';
// import { Post } from './post.js';
import { onEvent, select } from './utils.js';

// Modal functions + events
const modal = select('.modal');
const overlay = select('.overlay');
const openModalTrigger = select('.modal-open');
const closeModalBtn = select('.modal-close');
const modalContent = select('.modal-content');

const subscriber = new Subscriber(
    '0123',
    'MC Guénette',
    'mcguenette',
    'mc.c.guenette@gmail.com',
    [1],
    [2],
    true
);

let infoDisplay = false;

const updateModal = (content) => {
    if (!infoDisplay) {
        const accountInfo = document.createElement('ul');
        const accountArray = content.split(', ');

        accountArray.forEach(line => {
            const listItem = document.createElement('li');
            const [property, value] = line.split(': ');
            const strongElement = document.createElement('strong');
            strongElement.textContent = `${property}: `;
            listItem.appendChild(strongElement);
            listItem.innerHTML += value;
            accountInfo.appendChild(listItem);
        });

        modalContent.innerHTML = '';
        modalContent.appendChild(accountInfo);
        infoDisplay = true;
    }
};

const openModal = function () {
    modal.style.display = 'flex';
    overlay.classList.remove('hidden');
    updateModal(subscriber.getInfo());
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

onEvent('click', openModalTrigger, openModal);
onEvent('click', overlay, closeModal);
onEvent('click', closeModalBtn, closeModal);


// Post functions and events
const form = select('form');
const textarea = select('textarea');

onEvent('submit', form, function (event) {
    event.preventDefault();
    const postContent = textarea.value;
    const imageInput = form.querySelector('input[type="file"]');
    const imageFile = imageInput.files[0];

    if (postContent.trim() !== '' || imageFile) {
        const newPost = new Post(postContent, subscriber, imageFile);
        newPost.render();
        textarea.value = '';
        imageInput.value = '';
    } else {
        textarea.focus();
    }
});
