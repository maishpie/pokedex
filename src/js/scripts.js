let pokemonRepository = (function () { //main IIFE
  let pokemonList= [];
  let apiURL= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add (pokemon) {
    if (
      typeof pokemon === 'object' && 'name' in pokemon) {
        pokemonList.push(pokemon);
      } else {
        console.log('pokemon format is not correct');
      }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem (pokemon) {
    let pokemonList = document.querySelector('.list-group');
    let listItem = document.createElement('li');
    listItem.classList.add('group-list-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn');
    button.classList.add('btn-block');
    button.classList.add('btn-outline-dark');
    button.classList.add('shadow');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonDetailsModal');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    /* eslint-disable */
    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
    /* eslint-enable */
  }

  function loadList() {
    return fetch(apiURL).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url=item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.id = details.id;
      item.weight = details.weight;
      item.types = details.types.map((name) => name.type.name).join(', ') ;

    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  //Modal setup and implementation here
  /* eslint-disable */
  function showModal (pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    modalTitle.empty();
    modalBody.empty();

    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    let imageElement = $('<img class="modal-img" style="width:50%">');
    imageElement.attr('src', pokemon.imageUrl);
    let idElement = $('<p>' + 'ID# ' + pokemon.id + '</p>');
    let heightElement = $('<p>' + 'height : ' + pokemon.height/10 + ' m' + '</p>');
    let weightElement = $('<p>' + 'weight : ' + pokemon.weight/10 + ' kg' + '</p>');
    let typesElement = $('<p>' + 'type(s) : ' + pokemon.types + '</p>');

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(idElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
  /* eslint-enable */
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };

})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
})
