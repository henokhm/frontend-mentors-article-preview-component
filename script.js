const authorSocialWrapper = document.getElementById("author-social-wrapper");
const shareIcon = document.getElementById("share-icon");

shareIcon.addEventListener("click", () => {
  authorSocialWrapper.classList.toggle("show-share-links");
});
