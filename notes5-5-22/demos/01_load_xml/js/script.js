const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/team.xml', true);
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let xmlDoc = xhr.responseXML;
        let team = xmlDoc.getElementsByTagName('teammember');
        for (let i = 0; i < team.length; i++) {
            document.body.innerHTML += 
            xmlDoc.getElementsByTagName('name')[i].childNodes[0].nodeValue + '<br>' + 
            xmlDoc.getElementsByTagName('title')[i].childNodes[0].nodeValue + '<br>' + 
            xmlDoc.getElementsByTagName('bio')[i].childNodes[0].nodeValue + '<br><br>'; 
        }
    }
});
xhr.onerror = (e) => {console.error(e.message)};