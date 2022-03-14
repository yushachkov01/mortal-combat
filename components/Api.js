/**
 * Читаем данные с Api
 */
export default class Api {
  baseUrl = 'https://reactmarathon-api.herokuapp.com/api/mk';
  allPlayers = `${this.baseUrl}/players`;
  randomPlayer = `${this.baseUrl}/player/choose`;
  fightPlayer = `${this.baseUrl}/player/fight`;
/**
 * 
 * @returns загружаем инфу пользователя
 */
  getPlayers = async () => {
    return await fetch(this.allPlayers).then(res => res.json());
  }
/**
 * 
 * @returns загружаем инфу компьютера
 */
  getRandomPlayer = async () => {
    return await fetch(this.randomPlayer).then(res => res.json());
  }
/**
 * 
 * @param {*} hit 
 * @param {*} defence 
 * @returns собираем инфу из <form> и через пост отправляем на сервак
 */
  getFight = async (hit, defence) => {
    return await fetch(this.fightPlayer, {
      method: 'POST',
      body: JSON.stringify({ hit, defence})
    }).then(res => res.json());
  }
}
