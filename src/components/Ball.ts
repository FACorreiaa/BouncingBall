import { minusOne, two, dotFive } from '../utils/constants';

/**
 *
 * Properties of the Ball object
 * @param x - random starting x
 * @param y - random starting y
 * @param a - accelaration
 * @param t - time
 * @param px - formula of x position over time
 * @param py - formula of y position over time
 * @param dx - formula of speed x over time
 * @param dy - formula of speed y over time
 * @param size - random circle size
 * @param color - random circle color
 * @param speed - ball speed
 */
export class Ball {
  public static readonly acel: number = 2; //aceleration
  public static readonly t: number = 120; //time
  public static readonly randomMaxNumber = 1500;
  public static readonly randomMinNumber = 1;
  constructor(
    public x = 0,
    public y = 0,
    public dx = 0,
    public dy = 0,
    public px = 0,
    public py = 0,
    public size = 0,
    public color = '',
    public speed = 0
  ) {
    this.x = this.startingX();
    this.y = this.startingY();
    this.dx = this.directionX();
    this.dy = this.directionY();
    this.px = this.positionX();
    this.py = this.positionY();
    this.speed = this.getSpeed(Ball.t);
    this.size = this.ballSize();
    this.color = this.ballColor();
  }

  startingX(): number {
    return (
      Math.floor(Math.random() * Ball.randomMaxNumber) + Ball.randomMinNumber
    );
  }

  startingY(): number {
    return (
      Math.floor(Math.random() * Ball.randomMaxNumber) + Ball.randomMinNumber
    );
  }
  /**
   *
   * @param t
   * @returns speed between 75 and t
   */
  getSpeed(t: number): number {
    return Math.floor(Math.random() * 76 + 25) / Ball.t;
  }

  directionX(): number {
    return Math.floor(Math.random() * 2) == 0
      ? this.getStartingX() * minusOne
      : this.getStartingX();
  }

  directionY(): number {
    return Math.floor(Math.random() * 2) == 0
      ? -this.getStartingY() * minusOne
      : this.getStartingY();
  }

  ballSize(): number {
    return Math.random() * (101 - 50) + 50;
  }

  //https://stackoverflow.com/questions/1484506/random-color-generator
  ballColor(): string {
    return (
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  }

  positionX(): number {
    return this.x + this.dx * Ball.t;
  }

  positionY(): number {
    return this.y + this.dy + Ball.t - dotFive * Ball.acel * Ball.t * 2;
  }

  getStartingX(): number {
    return two;
  }

  getStartingY(): number {
    return two * minusOne * Ball.t;
  }
}
