import { USER_STATUS } from '../../../domain/enums/userStatus';
import { Email } from '../../../domain/valueObjects/email';
import { User } from '../../../domain/entities/user';

type userJsonType = {
  userID: string;
  name: string;
  email: string;
  password: string;
  status: string;
};

export class UserMapper {
  static jsonToEntity(userJson: userJsonType) {
    const [prefix, domain] = userJson.email.split('@');

    return new User(
      userJson.userID,
      userJson.name,
      new Email({ prefix, domain }),
      userJson.password,
      USER_STATUS[userJson.status],
    );
  }

  static entityToJson(userEntity: User) {
    return {
      userID: userEntity.Id,
      name: userEntity.Name,
      email: userEntity.Email.toString(),
      password: userEntity.Password,
      status: userEntity.Status,
    };
  }
}
