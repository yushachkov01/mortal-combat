//Task #0
const firstPlayer1 = {
  name: 'Kitana',
  hp: '50',
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Стальные веера'],
  attack: function () {
    console.log(firstPlayer1.name + ' ' + 'flight');
  }
}
const secondPlayer2 = {
  name: 'Liu Kang',
  hp: '30',
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['Нунчаки'],
  attack: function () {
    console.log(secondPlayer2.name + ' Fight...');
  }
};



//Task #1,2

// function createPlayer(numberPlayer, name, health, playerImg){
//   const $player = document.createElement('div');
//   $player.classList.add(numberPlayer)

//   const $progressbar = document.createElement('div');
//   $progressbar.classList.add('progressbar')

//   const $character = document.createElement('div');
//   $character.classList.add('character')

//     $player.appendChild($progressbar)
//     $player.appendChild($character)

//   const $life = document.createElement('div');
//   $life.classList.add('life')
//   $life.style.width = health + '%'

//   const $name = document.createElement('div');
//   $name.classList.add('name')
//   document.innerText = name 

//   $progressbar.appendChild($life)
//   $progressbar.appendChild($name)


//   const $img = document.createElement('img')
//   $img.src = playerImg
//   $character.appendChild($img)

//   const $arenas = document.querySelector('.arenas');
//   $arenas.appendChild($player)
// }

// createPlayer('player1', 'SCORPION', 50, firstPlayer1.img);
// createPlayer('player2', 'SUB-ZERO', 80, secondPlayer2.img);



//task #3

function createPlayer(numberPlayer, playerObj) {
  const $player = document.createElement('div');
  $player.classList.add(numberPlayer);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  $player.appendChild($progressbar);
  $player.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = playerObj.hp + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = playerObj.name;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);


  const $img = document.createElement('img');
  $img.src = playerObj.img;
  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player);
}

createPlayer('player1', firstPlayer1);
createPlayer('player2', secondPlayer2);