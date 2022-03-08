import { LOGS, $chat } from '../constants.js';
import { getRandom, getTime } from './utils.js';
/**
 * 
 * @param {*} type 
 * @param {*} player1 
 * @param {*} player2 
 * @param {*} damageCounter 
 */
export const generateLogs = (type, player1, player2, damageCounter) => {
  let text;

  switch (type) {
    case 'start':
      text = LOGS[type].replace('[time]', getTime()).replace('[player1]', player1.name).replace('[player2]', player2.name);
      break;

    case 'end':
      text = LOGS[type][getRandom(LOGS[type].length) - 1].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
      break;

    case 'hit':
      text = `${getTime()} - ${LOGS[type][getRandom(LOGS[type].length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)} -${damageCounter} [${player2.hp}/100]`;
      break;

    case 'defence':
      text = `${getTime()} - ${LOGS[type][getRandom(LOGS[type].length) - 1].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name)}`;
      break;

    case 'draw':
      text = LOGS[type];
      break;

    default:
      break;
  }

  const el = `<p>${text}</p>`;

  $chat.insertAdjacentHTML('afterbegin', el);
};
