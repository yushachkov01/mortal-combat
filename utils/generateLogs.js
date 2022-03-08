import { LOGS, $chat } from '../constants.js';
import { getRandom, getTime } from './utils.js';

/**
 * 
 * @param {*} type 
 * @param {*} firstPlayer 
 * @param {*} secondPlayer 
 * @param {*} damageCounter 
 */
 export function generateLogs(type, firstPlayer, secondPlayer, damageCounter) {
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