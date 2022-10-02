document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const search = this.search.value;
  searchGif(search);
});

document.querySelector("#remove").addEventListener("click", function () {
  document.querySelector(".gifs").innerHTML = "";
});

async function searchGif(search) {
  const response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  const gif = response.data.data[0].images.original.url;
  console.log(gif);
  appendGif(gif);
}

function appendGif(gif) {
  const html = `<img class="gif" src="${gif}"></img>`;
  document.querySelector(".gifs").insertAdjacentHTML("beforeend", html);
}
