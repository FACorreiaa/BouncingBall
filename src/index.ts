import { Root } from './components/Root'
import { Ball } from './components/Ball';
let root = new Root('canvas')

let click = <HTMLLIElement>document.getElementById('bounce')
click.addEventListener("click", () => {
  root.start();
}) 
