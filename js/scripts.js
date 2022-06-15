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

  return {
    add: function(pokemon) {
      privPokemonList.push(pokemon);
    },
    getAll: function() {
      return privPokemonList;
    }
  }

})();

let pokemonList= pokemonRepository.getAll();

pokemonList.forEach(function (pokemon) {
  document.write('<p>That\'s a ' + pokemon.name + ' (height: ' + pokemon.height + ')</p>')


});
