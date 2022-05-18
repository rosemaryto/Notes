const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', '../data/team.json');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let employees = xhr.response;
        for (let employee of employees) {
            document.body.innerHTML += `${employee.name}<br>${employee.title}<br><br>`;
        }
    }
});
xhr.onerror = (e) => {console.error(e.message)};