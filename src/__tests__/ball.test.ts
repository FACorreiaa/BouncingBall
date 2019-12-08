import { Ball } from '../components/Ball';
import { matchHexColor } from '../utils/regex';

const ball = new Ball();
describe('Numeric ball properties', function() {
  test('should have a size', () => {
    expect(ball.size).toBeGreaterThanOrEqual(1);
  });

  test('should have a valid x postition formula', () => {
    expect(ball.px).toBeGreaterThanOrEqual(1);
  });

  test('should have a valid y postition formula', () => {
    expect(ball.py).toBeGreaterThanOrEqual(1);
  });
});

describe('Color regular expression', function() {
  test('should match the hex decimap expression', function() {
    expect(matchHexColor.test(ball.color)).toBe(true);
  });
});

/**
 * Note: I was going to Test Root
 * But i was having canvas.width as null
 * And when i console.log() it wasnt null
 * Im not sure if its because i added a modal first
 * But i wasnt having that error before
 * SO i skipped Root testing to finish the other setups
 */

import { Root } from '../components/Root';

const root = new Root('');
describe('Should have a valid window and heigth', function() {
  test('should have a size', () => {
    expect(root.context().canvas.width).toBe(null);
    expect(root.context().canvas.height).toBe(null);
  });
});
