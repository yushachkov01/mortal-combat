const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

const LOGS = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
    'Результат удара [playerWins]: [playerLose] - труп',
    '[playerLose] погиб от удара бойца [playerWins]',
    'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
    '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
    '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
    '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
    '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
    '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
    '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
    '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
    '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
    '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
    '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
    '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
    '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
    '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
    '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
    '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
    '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
    '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
    '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
    '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
    '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
    '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
    '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
    '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
    '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
  ],
  draw: 'Ничья - это тоже победа!'
};
const firstPlayer = {
  player: 1,
  name: 'KITANA',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  elHP,
  changeHP,
  renderHP,
};

const secondPlayer = {
  player: 2,
  name: 'LIU-KANG',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif ',
  elHP,
  changeHP,
  renderHP,
};
/**
 * 
 * @param {*} tag 
 * @param {*} className 
 * @returns $tag
 */
function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function attack() {
  console.log(this.name + ' Fight...');
}
/**
 * 
 * @returns player
 */
function elHP() {
  return document.querySelector('.player' + this.player + ' .life');
}

function changeHP(randomHP) {
  this.hp -= randomHP;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

function renderHP() {
  this.elHP().style.width = this.hp + '%';
}

/**
 * 
 * @param {*} playerData 
 * @returns $player
 */
function createPlayer(playerData) {
  const $player = createElement('div', 'player' + playerData.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $life.style.width = playerData.hp + '%';
  $name.innerText = playerData.name;
  $img.src = playerData.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player;
}
/**
 * 
 * @param {} number 
 * @returns рандомное число
 */
function getRandom(number) {
  return Math.ceil(Math.random() * number);
}
/**
 * 
 * @param {*} name 
 * @returns $resultTitle результат
 */
function playerWin(name) {
  const $loseTitle = createElement('div', 'loseTitle')
  if (name) {
    $loseTitle.innerText = name + ' Wins'
  } else {
    $loseTitle.innerText = ' Draw'
  }
  return $loseTitle
}

function createReloadButton() {
  const $reloadWrap = createElement('div', 'reloadWrap');
  const $reloadButton = createElement('button', 'button');

  $reloadButton.innerText = 'Restart';

  $reloadButton.addEventListener('click', function () {
    window.location.reload();
  });

  $reloadWrap.appendChild($reloadButton);
  $arenas.appendChild($reloadWrap);
}

$arenas.appendChild(createPlayer(firstPlayer));
$arenas.appendChild(createPlayer(secondPlayer));

/**
 * 
 * @returns   hit, defence (силу адара и защиту)
 */
function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}
/**
 * 
 * @returns attack
 */
function playerAttack() {
  const attack = {};

  for (let i of $formFight) {
    if (i.checked && i.name === 'hit') {
      attack.value = getRandom(HIT[i.value]);
      attack.hit = i.value;
    }

    if (i.checked && i.name === 'defence') {
      attack.defence = i.value;
    }

    i.checked = false;
  }

  return attack;
}
/**
 * 
 * @returns time (возвращает время)
 */
function getTime() {
  const time = new Date;

  return time.toLocaleTimeString();
}
/**
 * 
 * @param {*} type 
 * @param {*} firstPlayer 
 * @param {*} secondPlayer 
 * @param {*} damageCounter 
 */
function generateLogs(type, firstPlayer, secondPlayer, damageCounter) {
  let text;

  switch (type) {
    case 'start':
      text = LOGS[type].replace('[time]', getTime()).
        replace('[player1]', firstPlayer.name).
        replace('[player2]', secondPlayer.name);
      break;

    case 'end':
      text = LOGS[type][getRandom(LOGS[type].length) - 1]
        .replace('[playerWins]', firstPlayer.name)
        .replace('[playerLose]', secondPlayer.name);
      break;

    case 'hit':
      text = `${getTime()} - ${LOGS[type][getRandom(LOGS[type].length) - 1]
        .replace('[playerKick]', firstPlayer.name)
        .replace('[playerDefence]', secondPlayer.name)} -${damageCounter} [${secondPlayer.hp}/100]`;
      break;

    case 'defence':
      text = `${getTime()} - ${LOGS[type][getRandom(LOGS[type].length) - 1]
        .replace('[playerKick]', secondPlayer.name)
        .replace('[playerDefence]', firstPlayer.name)}`;
      break;

    case 'draw':
      text = LOGS[type];
      break;

    default:
      break;
  }

  const el = `<p>${text}</p>`;

  $chat.insertAdjacentHTML('afterbegin', el);
}

function fightResult() {
  if (firstPlayer.hp === 0 || secondPlayer.hp === 0) {
    createReloadButton();
    for (let i of $formFight) {
      i.disabled = true;
    }
  }

  if (firstPlayer.hp === 0 && firstPlayer.hp < secondPlayer.hp) {
    $arenas.appendChild(playerWin(secondPlayer.name));
    generateLogs('end', secondPlayer, firstPlayer);
  } else if (secondPlayer.hp === 0 && secondPlayer.hp < firstPlayer.hp) {
    $arenas.appendChild(playerWin(firstPlayer.name));
    generateLogs('end', firstPlayer, secondPlayer);
  } else if (firstPlayer.hp === 0 && secondPlayer.hp === 0) {
    $arenas.appendChild(playerWin());
    generateLogs('draw');
  }
}

$formFight.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const enemy = enemyAttack();
  const player = playerAttack();

  if (enemy.hit !== player.defence) {
    firstPlayer.changeHP(enemy.value);
    firstPlayer.renderHP();
    generateLogs('hit', secondPlayer, firstPlayer, enemy.value);
  } else {
    generateLogs('defence', firstPlayer, secondPlayer)
  }

  if (player.hit !== enemy.defence) {
    secondPlayer.changeHP(player.value);
    secondPlayer.renderHP();
    generateLogs('hit', firstPlayer, secondPlayer, player.value);
  } else {
    generateLogs('defence', secondPlayer, firstPlayer)
  }

  fightResult();
});

generateLogs('start', firstPlayer, secondPlayer);