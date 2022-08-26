const facebook = document.querySelector('.facebook')
const instagram = document.querySelector('.instagram')
const linkedin = document.querySelector('.linkedin')
const twitter = document.querySelector('.twitter')
  
const pageUrl = location.href
const message = "ZENOUAL Wissal"

const facebookApi = 'https://www.facebook.com/profile.php?id=100010373173757';
const instagramApi = 'https://instagram.com/ZENOUAL-Wissal/';
const linkedinApi = 'https://www.linkedin.com/in/wissal-zenoual-336517240';
const twitterApi = 'https://twitter.com/WissalZENOUAL?t=5tI13rKgC-nIBXnZ2mkxFQ&s=09';

facebook.addEventListener("click", () => {
    window.open(url = facebookApi, target='blank')
})
instagram.addEventListener('click', () => {
    window.open(url = instagramApi, target='blank')
})
linkedin.addEventListener('click', () => {
    window.open(url = linkedinApi, target='blank')
})
twitter.addEventListener('click', () => {
    window.open(url = twitterApi, target='blank')
})