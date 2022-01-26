
(document.getElementById("go")).addEventListener("click", function(){
  fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
      displayData(data);
  });

});

function displayData(data) {
    const area = document.getElementById("display");
    area.innerHTML = ``;
    
data.forEach((character) => {
  let newCard = document.createElement('div');
  let search = document.getElementById('search');
  search = search.value;
  newCard.class = "max-w-sm rounded overflow-hidden shadow-lg";
  newCard.classList.add("max-w-sm", "rounded", "overflow-hidden", "shadow-lg");
  newCard.id = "card";
  if(character.image == ""){
      character.image = "https://logos-world.net/wp-content/uploads/2020/04/Harry-Potter-Logo-700x394.png";
  }
  newCard.innerHTML=`
  <img class="w-full" src="${character.image}" alt="https://logos-world.net/wp-content/uploads/2020/04/Harry-Potter-Logo-700x394.png">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">${character.name}</div>
    <p class="text-gray-700 text-base">
      species: ${character.species}<br>
      gender: ${character.gender}<br>
      house: ${character.house}<br>
      year of birth: ${character.yearOfBirth}<br>
      patronus: ${character.patronus}<br> 
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${character.actor}</span>
  </div>
`;
    
  if (search != "" && character.name.toLowerCase().includes(search.toLowerCase())) {
    const cardArea=document.getElementById("display");
    cardArea.appendChild(newCard);
  }
  
  return;
});
let searchbar = document.getElementById('search');
    searchbar.value = "";
}