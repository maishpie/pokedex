let pokemonList= [{
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


pokemonList.forEach(function (pokemon) => {
  document.write('<p>That\'s a ' + pokemon.name + ' (height: ' + pokemon.height + ')</p>')


});
