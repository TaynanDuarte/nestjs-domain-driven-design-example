import { USER_STATUS } from '../../../../../src/core/domain/enums/userStatus';
import { User } from '../../../../../src/core/domain/entities/user';
import { UserMapper } from '../../../../../src/core/infrastructure/mappers/mongoose/user.mapper';
import { Email } from '../../../../../src/core/domain/valueObjects/email';

describe('UserMapper', () => {
  describe('jsonToEntity', () => {
    test('It should convert an user document into user entity', () => {
      const userJson = {
        userID: '8ee8778c-6529-436f-ad10-b9706bed62e4',
        name: 'username',
        email: 'user@gmail.com',
        password: '123456',
        status: USER_STATUS.ACTIVE,
      };

      const mapperResult = UserMapper.jsonToEntity(userJson);

      expect(mapperResult).toMatchObject(
        new User(
          '8ee8778c-6529-436f-ad10-b9706bed62e4',
          'username',
          new Email({ prefix: 'user', domain: 'gmail.com' }),
          '123456',
          USER_STATUS.ACTIVE,
        ),
      );
    });
  });

  test('entityToJson', () => {
    const userEntity = new User(
      '8ee8778c-6529-436f-ad10-b9706bed62e4',
      'username',
      new Email({ prefix: 'user', domain: 'gmail.com' }),
      '1234560',
      USER_STATUS.ACTIVE,
    );

    const userJson = UserMapper.entityToJson(userEntity);

    expect(userJson).toMatchObject({
      userID: '8ee8778c-6529-436f-ad10-b9706bed62e4',
      name: 'username',
      email: 'user@gmail.com',
      password: '1234560',
      status: USER_STATUS.ACTIVE,
    });
  });
});
