const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');


const player1 = {
  player: 1,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  elHP,
  changeHP,
  renderHP,
  attack,
}
const player2 = {
  player: 2,
  name: 'Liu Kang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  elHP,
  changeHP,
  renderHP,
  attack,
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

function changeHP(randomHP) {
  this.hp -= randomHP;
  
  if (this.hp <= 0) {
    this.hp = 0;
  }
}


function attack() {
  console.log(this.name + ' Fight...');
}
function elHP(){
  return document.querySelector('.player' + this.player + ' .life')
}

function renderHP(){
  this.elHP().style.width = this.hp + '%';
}

function getRandom(number){
  return Math.ceil(Math.random() * number)

}
function playerWin(name) {
  const $loseTitle = createElement('div', 'loseTitle')
  if (name) {
    $loseTitle.innerText = name + ' Wins'
  } else {
    $loseTitle.innerText = ' Draw'
  }
  return $loseTitle
}
function createReloadButton(){
  const $reloadWrap = document.createElement('div', 'reloadWrap')  
  const $startOver = createElement('button', 'button');
  $startOver.innerText = 'Restart'

  $startOver.addEventListener('click',function(){
    window.location.reload()
  })
  $reloadWrap.appendChild($startOver);
  $arenas.appendChild($reloadWrap);
}



$randomButton.addEventListener('click', function () {
  console.log('randomButton');

  player1.changeHP(getRandom(20));
  player1.renderHP();
  player2.changeHP(getRandom(30));
  player2.renderHP();
  
  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
    createReloadButton();
  }
  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name))
  } 
  else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name))
  }
   else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
  }
}) 

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
