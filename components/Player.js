import { createElement } from '../utils/utils.js';

class Player {
  constructor(props) {
    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
  }

  attack = () => {
    console.log(this.name + ' Fight...');
  }

  elHP = () => {
    return document.querySelector(`.player${this.player} .life`);
  }

  changeHP = (randomHP) => {
    this.hp -= randomHP;

    if (this.hp <= 0) {
      this.hp = 0;
    }
  }

  renderHP = () => {
    this.elHP().style.width = `${this.hp}%`;
  }
}

export const firstPlayer = new Player({
  player: 1,
  name: 'KITANA',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
});

export const secondPlayer = new Player({
  player: 2,
  name: 'LIU-KANG',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif ',
});

export const createPlayer = ({ player, name, hp, img }) => {
  const $player = createElement('div', 'player' + player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $life.style.width = hp + '%';
  $name.innerText = name;
  $img.src = img;
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  
  return $player;
};
