const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

console.log(URL_API);

fetch(URL_API)
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results;

    for (let character of characters) {
      console.log(character);
      $container.innerHTML += `
        <div class="option-name"><img class="character-img" src="${character.image}" alt="imagen de ${character.name}">
        <h2> ${character.name}</h2>
        <h3> ${character.status} </h3> 
        <h3>${character.species} </h3>
         <h3>${character.location.name}</h3>
        </div>
      `;
    }
  });