import { IUserRepository } from '../../../../src/core/domain/interfaces/iuser.repository';
import { UserService } from '../../../../src/core/domain/services/user.service';

describe('UserService', () => {
  let userRepositoryMock: IUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    userRepositoryMock = {
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
  });

  describe('create', () => {
    test('It should create a new user', async () => {
      const userService = new UserService(userRepositoryMock);
      await userService.create('username', 'user@gmail.com', '123456');

      expect(userRepositoryMock.create).toBeCalledTimes(1);
    });
  });
});
