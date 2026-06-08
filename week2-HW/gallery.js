let originalText = "";

function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = originalText;
}

document.addEventListener('DOMContentLoaded', function () {
    const imageDiv = document.getElementById('image');
    if (imageDiv) {
        originalText = imageDiv.innerHTML;
    }

    const previews = document.querySelectorAll('.preview');
    previews.forEach(function (img) {
        img.tabIndex = 0;
        img.addEventListener('mouseover', function () { upDate(img); });
        img.addEventListener('focus', function () { upDate(img); });
        img.addEventListener('mouseout', unDo);
        img.addEventListener('blur', unDo);
    });
});
