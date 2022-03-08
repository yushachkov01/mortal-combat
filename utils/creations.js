import { $arenas } from '../constants.js';
/**
 * 
 * @param {*} tag 
 * @param {*} className 
 * @returns $tag
 */
export const createElement = (tag, className) => {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
};
/**
 * 
 * @param {*} param0 
 * @returns $player
 */
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
/**
 * кнопка restart
 */
export const createReloadButton = () => {
  const $reloadWrap = createElement('div', 'reloadWrap');
  const $reloadButton = createElement('button', 'button');

  $reloadButton.innerText = 'Restart';
/**
 * кнопка, которую мы кликаем
 */
  $reloadButton.addEventListener('click', function() {
    window.location.reload();
  });

  $reloadWrap.appendChild($reloadButton);
  $arenas.appendChild($reloadWrap);
};
