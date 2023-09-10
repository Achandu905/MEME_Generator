const generateBtn = document.querySelector("button");

const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector("img");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
  memeTitle.innerHTML = title;
  memeImage.setAttribute("src", url);
  memeAuthor.innerHTML = `Made by: ${author}`;
};

const getMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => updateDetails(data.url, data.title, data.author));
};

generateBtn.addEventListener("click", getMeme);
