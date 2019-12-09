import { Ball } from './Ball';
import { minusOne } from '../utils/constants';
export class Root {
  /**
   * Root class properties
   * To draw the canvas and overload
   * the canvas while the ball is moving
   */
  protected canvas: HTMLCanvasElement;
  protected backgroundColor: string = '#faf4b4';
  protected static readonly speedDecrease: number = 0.1; //ten percent less speed
  protected ball = new Ball();

  constructor(private id: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(this.id);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener('resize', () => this.resizeCanvas(), false);
  }

  //2d context
  context(): CanvasRenderingContext2D {
    return <CanvasRenderingContext2D>this.canvas.getContext('2d');
  }

  //we need to call this when creating the ball
  //otherwise the screen width and height wont be resized to screen size
  resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start(): void {
    this.updateBall();
    //https://developer.mozilla.org/pt-BR/docs/Web/API/Window/requestAnimationFrame
    requestAnimationFrame(() => this.start());
  }

  //draw canvas screen
  drawRoot(): void {
    let ctx = this.context();
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @summary
   * Because I wasn't sure about the ball direction
   * Uncomment comment the code on the if for free ball direction
   */
  updateBall(): void {
    const speed = Root.speedDecrease;
    const ball: Ball = this.ball;
    let ctx = this.context();

    //move ball
    //hits the wall
    //turns around
    ball.px += ball.dx;
    ball.py += ball.dy;

    /**
     * @formulas to hit the wall and turn around
     */
    if (
      (ball.px - ball.size < 0 && ball.dx < 0) ||
      (ball.px + ball.size > this.canvas.width && ball.dx > 0)
    ) {
      ball.dx = -ball.dx + speed * ball.dx;
      //uncomment for linear bounce
      //ball.dy = ball.dy + speed * ball.dy * minusOne;
    }

    if (
      (ball.py - ball.size < 0 && ball.dy < 0) ||
      (ball.py + ball.size > this.canvas.height && ball.dy > 0)
    ) {
      ball.dy = -ball.dy + speed * ball.dy;
      //uncomment for linear bounce
      /* ball.dx = ball.dx + speed * ball.dx * minusOne; */
    }

    this.drawRoot();
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.px, ball.py, ball.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}
