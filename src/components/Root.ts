import { Ball } from './Ball';

export class Root {
  //root properties
  protected canvas: HTMLCanvasElement;
  protected backgroundColor: string = '#faf4b4';
  protected static readonly speedDecrease: number = 0.1; //ten percent less speed
  protected ball = new Ball();

  constructor(private id: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(id);
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
    requestAnimationFrame(() => this.start());
  }

  //draw canvas screen
  drawRoot(): void {
    let ctx = this.context();
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @summary There are two lines of code comment
   * Because I wasn't sure about the ball direction
   * If you want the ball to run as it is, its correct
   * If you want the ball in a single line
   * Uncomment the code inside the if statement
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
      //ball.dy = -ball.dy + (speed * ball.dy); //if you want the ball to bounce in a single position
    }

    if (
      (ball.py - ball.size < 0 && ball.dy < 0) ||
      (ball.py + ball.size > this.canvas.height && ball.dy > 0)
    ) {
      ball.dy = -ball.dy + speed * ball.dy;
      //ball.dx = -ball.dx + (speed * ball.dx); //if you want the ball to bounce in a single position
    }

    this.drawRoot();
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.px, ball.py, ball.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}
