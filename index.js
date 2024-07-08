const memeApi = `https://apimeme.com`;

fetch(memeApi)
.then((res) => {
    if (res.ok) {
        return res.json();
    } else {
        throw 'Error'
    }
})