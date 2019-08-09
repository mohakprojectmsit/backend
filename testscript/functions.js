const email = (message, sendto, subject) => {
    var data = JSON.stringify({
        "message": `${message}`,
        "sendto": `${sendto}`,
        "subject": `${subject}`
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/api/notification/email");
    xhr.setRequestHeader("Content-Type", "application/json"); //optonal
    xhr.send(data);
};
const login = (email, password) => {
    var data = JSON.stringify({
        "email": `${email}`,
        "password": `${password}`
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/api/auth/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
};
const querytype1 = (data) => {
    var data = JSON.stringify({
        "data": `${data}`
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/api/data/query/1");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
};
const querytype2 = (data) => {
    var data = JSON.stringify({
        "data": `${data}`
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/api/data/query/2");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
};
const querytype3 = (data) => {
    var data = JSON.stringify({
        "data": `${data}`
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/api/data/query/3");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
};
const sms = (message, ph_number) => {
    var data = JSON.stringify({
        "message": `${message}`,
        "ph_number": `${ph_number}`
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/api/notification/sms");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
};
const email = (message, sendto, subject) => {
    var data = JSON.stringify({
        "message": `${message}`,
        "sendto": `${sendto}`,
        "subject": `${subject}`
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/api/notification/email");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "e7f06246-09ef-4706-982a-f0f2ec16dfc1");

    xhr.send(data);
}