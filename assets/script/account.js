'use-strict';
import { select } from './utils.js';

class User {
    #id;
    #fullName;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#fullName = name;
        this.#userName = userName;
        this.#email = email;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#fullName;
    }

    getUserName() {
        return this.#userName;
    }

    getEmail() {
        return this.#email;
    }

    getInfo() {
        return `ID: ${this.#id}, Name: ${this.#fullName}, Username: ${this.#userName}, Email: ${this.#email}`;
    }
}

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    getPages() {
        return this.#pages;
    }

    getGroups() {
        return this.#groups;
    }

    getCanMonetize() {
        return this.#canMonetize;
    }

    getInfo() {
        const accountInfo = super.getInfo(); // googled this part to understand another way to use super
        const pagesInfo = this.#pages ? `Pages: ${this.#pages.join(', ')}` : '';
        const groupsInfo = this.#groups ? `Groups: ${this.#groups.join(', ')}` : '';
        const monetizeInfo = `Can Monetize: ${this.#canMonetize}`;
        return `${accountInfo}, ${pagesInfo}, ${groupsInfo}, ${monetizeInfo}`;
    }
}


class Post extends Subscriber {
    constructor(content, subscriber, imageFile) {
        super(
            subscriber.getName()
        );
        this.content = content;
        this.imageFile = imageFile;
        this.timestamp = new Date().toLocaleString();
        this.subscriber = subscriber;
    }

    render() {
        const postContent = document.createElement('div');
        postContent.classList.add('new-post');

        const profileImage = document.createElement('img');
        profileImage.src = './assets/img/1694563354659.jpg';

        const profileName = document.createElement('h3');
        profileName.textContent = this.subscriber.getName();

        const profile = document.createElement('span');
        profile.appendChild(profileImage);
        profile.appendChild(profileName);

        const internalContent = document.createElement('p');
        internalContent.textContent = this.content;

        const postImage = document.createElement('img');
        postImage.classList.add('post-img');
        if (this.imageFile) {
            postImage.src = URL.createObjectURL(this.imageFile);
        } else {
            postImage.src = '';
        }

        const timestampElement = document.createElement('small');
        timestampElement.textContent = this.timestamp;

        postContent.appendChild(profile);
        postContent.appendChild(internalContent);
        postContent.appendChild(postImage);
        postContent.appendChild(timestampElement);
   

        const postsSection = select('#posts-section');
        postsSection.appendChild(postContent);
    }
}

export { User, Subscriber, Post };
