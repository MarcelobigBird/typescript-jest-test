describe('Testando alguma coisa', () => {
  it('test description (IT)', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Testando outra coisa', () => {
  test('test description (TEST)', () => {
    const name = 'Luiz';
    expect(name).toBe('Luiz');
  });
});
