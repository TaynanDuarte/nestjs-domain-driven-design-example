import { Email } from '../../../../src/core/domain/valueObjects/email';

describe('Email', () => {
  describe('toString', () => {
    test('It shold return the e-mail formated', () => {
      const email = new Email({ prefix: 'userTest', domain: 'gmail.com' });

      const toStringResult = email.toString();

      expect(toStringResult).toBe('userTest@gmail.com');
    });
  });
});
