let pokemonRepository = (function () { //wrapping in iife
  let privPokemonList= [{
    name: 'Charizard',
    height: 1.7,
    type: ['fire','flying'],
    abilities: ['blaze','solar power']
  },
  {
    name: 'Jigglypuff',
    height: 0.5,
    type: ['fairy','normal'],
    abilities: ['cute-charm','friend-guard']
  },
  {
    name: 'Psyduck',
    height: 0.8,
    type: 'water',
    abilities: ['damp','cloud-nine','Swift-swim']
  }
  ];

  function showDetails(pokemon) {
    return console.log(pokemon)
  };

  function addListItem (pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function(event){
      showDetails(pokemon)
    });
  };

  return {
    add: function(pokemon) {
      privPokemonList.push(pokemon);
    },
    getAll: function() {
      return privPokemonList;
    },
    showDetails: showDetails,
    addListItem: addListItem
    }

})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
