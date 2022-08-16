import { User } from '../../../../src/core/domain/entities/user';
import { USER_STATUS } from '../../../../src/core/domain/enums/userStatus';
import { Email } from '../../../../src/core/domain/valueObjects/email';

describe('User', () => {
  describe('changeStatus', () => {
    test('It should change the user status', () => {
      const userInstance = new User(
        undefined,
        'username',
        new Email({ prefix: 'user', domain: 'gmail.com' }),
        '1234560',
        USER_STATUS.ACTIVE,
      );

      userInstance.changeStatus(USER_STATUS.BLOCKED);

      expect(userInstance.Status).toBe(USER_STATUS.BLOCKED);
    });

    test('It should throw an error if user status is deleted', () => {
      const userInstance = new User(
        undefined,
        'username',
        new Email({ prefix: 'user', domain: 'gmail.com' }),
        '1234560',
        USER_STATUS.DELETED,
      );

      expect(() => userInstance.changeStatus(USER_STATUS.ACTIVE)).toThrowError(
        'user deleted',
      );
    });
  });
});
