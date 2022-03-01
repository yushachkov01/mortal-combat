const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control')

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

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
  }
  const ATTACK = ['head', 'body', 'foot'];

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

function enemyAttack(){
  const hit = ATTACK[getRandom(3) - 1] //ATTACK - массив
  const defence = ATTACK[getRandom(3) - 1] 
  console.log('hit:', hit);
  console.log('hidefencet:', defence);

  //Чтобы узнать на сколько соперник ударил соперник
  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,

  }
}

$formFight.addEventListener('submit',function(event){
  event.preventDefault();
  console.dir($formFight)
  const enemy = enemyAttack()
  console.log("enemy:", enemy);
  //Создаем объект для того чтобы определиться куда мы будем бить
  const attack = {}
  for(let i of $formFight){
    console.dir(i);
    if(i.checked && i.name == 'hit'){
      attack.value = getRandom(HIT[i.value])
      attack.hit = i.value;
    }
    if(i.checked && i.name == 'defence'){
      attack.defence = i.value;
    }
    i.checked = false; //Чтобы сбросить все удары
  }
  console.log("a::",attack);
  console.log("b::",enemy);
  
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
