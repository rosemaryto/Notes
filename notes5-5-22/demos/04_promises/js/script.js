const myFetch = (url) => { 
    return new Promise((resolve, reject) => { 
        const xhr = new XMLHttpRequest(); 
        xhr.responseType = 'json'; 
        xhr.onreadystatechange = () => { 
            if (xhr.readyState == 4) {
                (xhr.status == 200) ? 
                resolve(xhr.response) : 
                reject(new Error(`Error code: ${xhr.status}`));
            }
        };
        xhr.open('GET', url);
        xhr.send();
    }); 
};

myFetch('https://jsonplaceholder.typicode.com/users')
    .then((users) => console.log(users)) 
    .catch((e) => console.log(e));