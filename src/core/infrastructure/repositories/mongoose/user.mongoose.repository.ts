import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../../../../src/core/domain/entities/user';
import { IUserRepository } from '../../../../../src/core/domain/interfaces/iuser.repository';
import { UserMapper } from '../../mappers/mongoose/user.mapper';
import { UserDocument, Users } from './schemas/user.schema';

export class UserMongooseRepository implements IUserRepository {
  constructor(
    @InjectModel(Users.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async getById(id: string): Promise<User> {
    const userDocumentFound = (await this.userModel
      .find({ userID: id })
      .exec()[0]) as UserDocument;

    const { userID, name, email, password, status } = userDocumentFound;
    return UserMapper.jsonToEntity({ userID, name, email, password, status });
  }

  async create(obj: User): Promise<void> {
    const userDocument = UserMapper.entityToJson(obj);
    (await this.userModel.create(userDocument)).save();
  }

  async update(obj: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
