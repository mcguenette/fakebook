'use-strict';

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
        const userInfo = super.getInfo();
        return `${userInfo}, Pages: ${this.#pages.join(', ')}, Groups: ${this.#groups.join(', ')}, Can Monetize: ${this.#canMonetize}`;
    }
}

export { User, Subscriber };
