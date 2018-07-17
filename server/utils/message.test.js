const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {

  it('should return a correct message object', () => {
    const from = 'Mhamidi';
    const text = 'Great Job Man';
    const msg = generateMessage(from, text);
    expect(typeof msg.createdAt).toBe('number');
    expect(msg).toMatchObject({from, text});
  });

});
