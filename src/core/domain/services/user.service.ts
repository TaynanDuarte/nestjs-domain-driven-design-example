import { DomainService } from '../../contracts/domainService';
import { User } from '../entities/user';
import { USER_STATUS } from '../enums/userStatus';
import { IUserRepository } from '../interfaces/iuser.repository';
import { Email } from '../valueObjects/email';

export class UserService extends DomainService {
  constructor(private readonly userRepository: IUserRepository) {
    super();
  }

  async create(name: string, email: string, password: string) {
    const [prefix, domain] = email.split('@');
    const newUser = new User(
      undefined,
      name,
      new Email({ prefix, domain }),
      password,
      USER_STATUS.ACTIVE,
    );

    await this.userRepository.create(newUser);
  }
}
