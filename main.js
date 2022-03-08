import { $arenas, $formFight } from './constants.js';
import { player1, player2 } from './players.js';
import { generateLogs } from './utils/logs.js';
import { createPlayer } from './utils/creations.js';
import { enemyAttack, playerAttack, fightResult } from './utils/actions.js';

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

generateLogs('start', player1, player2);

$formFight.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const enemy = enemyAttack();
  const player = playerAttack();

  if (enemy.hit !== player.defence) {
    player1.changeHP(enemy.value);
    player1.renderHP();
    generateLogs('hit', player2, player1, enemy.value);
  } else {
    generateLogs('defence', player1, player2)
  }

  if (player.hit !== enemy.defence) {
    player2.changeHP(player.value);
    player2.renderHP();
    generateLogs('hit', player1, player2, player.value);
  } else {
    generateLogs('defence', player2, player1)
  }

  fightResult();
});
