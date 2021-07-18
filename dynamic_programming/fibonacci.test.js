// const { expect } = require('@jest/globals');
// const { test } = require('jest-circus');
const fibonacci_memoize = require('./fibonacci_memoize');

test('Fib function is defined', () => {
  expect(typeof fibonacci_memoize).toEqual('function');
});

test('calculates correct fibonacci_memoize value for 1', () => {
  expect(fibonacci_memoize(1)).toEqual(1);
});

test('calculates correct fibonacci_memoize value for 2', () => {
  expect(fibonacci_memoize(2)).toEqual(1);
});

test('calculates correct fibonacci_memoize value for 3', () => {
  expect(fibonacci_memoize(3)).toEqual(2);
});

test('calculates correct fibonacci_memoize value for 4', () => {
  expect(fibonacci_memoize(4)).toEqual(3);
});

test('calculates correct fibonacci_memoize value for 15', () => {
  expect(fibonacci_memoize(39)).toEqual(63245986);
});

