window.onload = function () {
    alert("JavaScript is connected!");
};
function updateContent() {
    const contentParagraph =
        document.getElementByld("content");
    contentParagraph.textContent =
        "Content updated!";
}
document.getElementByld("updateButton").addEventListener("click", updateContent);

