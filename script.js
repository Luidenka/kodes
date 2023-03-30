document.body.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key == " ") {
        document.getElementById('key').innerHTML = "Space";
        document.getElementById('key-table').innerHTML = "Space";
    } else {
        document.getElementById('key').innerText = e.key;
        document.getElementById('key-table').innerText = e.key;
    }
    document.getElementById('keyCode').innerText = e.keyCode;
    document.getElementById('code').innerText = e.code;
    document.getElementById('location').innerText = e.location;
})
