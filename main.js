const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');


const player1 = {
  player: 1,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  attack: function (name) {
    console.log(name + ' ' + 'flight');
  }
}
const player2 = {
  player: 2,
  name: 'Liu Kang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  attack: function (name) {
    console.log(name + '' + 'Fight...');
  }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag)
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
};


function createPlayer(playerObj) {
  const $player = createElement('div', 'player' + playerObj.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $life.style.width = playerObj.hp + '%';
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $progressbar.appendChild($name);
  $progressbar.appendChild($life);
  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  return $player;
};
function changeHp(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life')
  player.hp -= Math.floor(Math.random() * 20);
  $playerLife.style.width = player.hp + '%';

  if(player.hp < 0){
    $arenas.appendChild(playerLose(player.name))
  }
}

function playerLose(name){
  const $loseTitle = createElement('div', 'loseTitle')
  $loseTitle.innerText = name + ' Lose'

  return $loseTitle
}


$randomButton.addEventListener('click', function () {
  console.log('randomButton');
  changeHp(player1);
  changeHp(player2);
})  


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


