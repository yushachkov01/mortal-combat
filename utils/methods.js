/**
 * 
 * @returns player
 */
 export function elHP() {
  return document.querySelector('.player' + this.player + ' .life');
}
/**
 * 
 * @param {*} randomHP 
 */
export function changeHP(randomHP) {
  this.hp -= randomHP;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}
/**
 * здоровье рисует
 */
export function renderHP() {
  this.elHP().style.width = this.hp + '%';
}