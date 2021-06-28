
function buildURL(videoURL) {
    return "https://loader.to/api/button/?url=" + videoURL + "&f=1080&color=64c896";
}

const urlSet = document.getElementById('set');
urlSet.addEventListener('click', () => {
    const url = document.forms.user.url.value;
    const dl = document.getElementById('download');
    dl.src = buildURL(url);
});