import { ATTACK, HIT, $arenas, $formFight } from '../constants.js';
import { player1, player2 } from '../players.js';
import { getRandom } from './utils.js';
import { generateLogs } from './generateLogs.js';
import { createReloadButton, createElement } from './creations.js';

/**
 * 
 */
export const fightResult = () => {
  if (player1.hp === 0 || player2.hp === 0) {
    createReloadButton();
    for (let item of $formFight) {
      item.disabled = true;
    }
  }

  if (player1.hp === 0 && player2.hp < player2.hp) {
    $arenas.appendChild(showResult(player2.name));
    generateLogs('end', player2, player1);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(showResult(player1.name));
    generateLogs('end', player1, player2);
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(showResult());
    generateLogs('draw');
  }
};

export const enemyAttack = () => {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
};

export const playerAttack = () => {
  const attack = {};

  for (let item of $formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  return attack;
};
