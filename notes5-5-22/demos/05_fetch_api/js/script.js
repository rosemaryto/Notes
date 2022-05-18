fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => {
        for (let user of users) {
            document.body.innerHTML += `
            ${user.name}<br>
            ${user.email}<br>
            ${user.phone}<br>
            ${user.website}<br><br>`;
        }
        
    })
    .catch( e => console.log(e.message) );