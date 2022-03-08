/**
 * 
 * @returns time
 */
export function getTime() {
  const time = new Date;

  return time.toLocaleTimeString();
}
/**
 * 
 * @param {} number 
 * @returns рандомное число
 */
export function getRandom(number) {
  return Math.ceil(Math.random() * number);
}
