const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let users = xhr.response;
        for (let user of users) {
            document.body.innerHTML += 
            `
            ${user.name}<br>
            <a href="mailto:${user.email}">${user.email}</a><br>
            ${user.phone}<br>
            ${user.website}<br><br>
            `;
        }
    }
});
xhr.onerror = (e) => {console.error(e.message)};