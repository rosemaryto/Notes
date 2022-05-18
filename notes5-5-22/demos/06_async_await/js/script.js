async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        const users = await response.json();
        for (let user of users) {
            document.body.innerHTML += 
            `${user.name}<br>${user.email}<br>
            ${user.phone}<br>${user.website}<br><br>`;
        } 
    } catch (error) {
        console.error(error);
    }

}
fetchUsers();