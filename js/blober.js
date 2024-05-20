let xhr = new XMLHttpRequest();
xhr.open("GET", "src");
xhr.responseType = "arraybuffer";
xhr.onload = (e) => {
    let blob = new Blob(xhr.response);
    let url = URL.createObjectURL(blob);
    // mainVideo.src = url;          Replace URL
}