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

for (let i= 0; i< pokemonList.length; i++) { //iterating through each object in the array
  if (pokemonList[i].height > 1) { //highlighting special pokemon
    document.write('<p>That\'s a ' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow! That\'s big!</p>')

  } else {
    document.write('<p>That\'s a ' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>')
  }

}
