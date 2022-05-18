async function fetchUsers() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json'; 
    const url = proxy + api;
    
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        }
    });

    const images = await response.json();
    console.log(images);
}
fetchUsers();