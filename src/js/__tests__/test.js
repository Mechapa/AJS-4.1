import checkHealthStatus from '../app';

test('should show "healthy" status', () => {
  const character = {
    name: 'Маг',
    health: '100',
  };

  const lifeLeft = checkHealthStatus(character);

  expect(lifeLeft).toBe('healthy');
});

test('should show "healthy" status', () => {
  const character = {
    name: 'Маг',
    health: '51',
  };

  const lifeLeft = checkHealthStatus(character);

  expect(lifeLeft).toBe('healthy');
});

test('should show "wounded" status', () => {
  const character = {
    name: 'Маг',
    health: '50',
  };

  const lifeLeft = checkHealthStatus(character);

  expect(lifeLeft).toBe('wounded');
});

test('should show "wounded" status', () => {
  const character = {
    name: 'Маг',
    health: '49',
  };

  const lifeLeft = checkHealthStatus(character);

  expect(lifeLeft).toBe('wounded');
});

test('should show "wounded" status', () => {
  const character = {
    name: 'Маг',
    health: '16',
  };

  const lifeLeft = checkHealthStatus(character);

  expect(lifeLeft).toBe('wounded');
});

test('should show "wounded" status', () => {
  const character = {
    name: 'Маг',
    health: '15',
  };

  const lifeLeft = checkHealthStatus(character);

  expect(lifeLeft).toBe('wounded');
});

test('should show "critical" status', () => {
  const character = {
    name: 'Маг',
    health: '14',
  };

  const lifeLeft = checkHealthStatus(character);

  expect(lifeLeft).toBe('critical');
});

test('should show "critical" status', () => {
  const character = {
    name: 'Маг',
    health: '1',
  };

  const lifeLeft = checkHealthStatus(character);

  expect(lifeLeft).toBe('critical');
});
