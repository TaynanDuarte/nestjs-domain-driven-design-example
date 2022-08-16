import { Repository } from '../../contracts/repository';
import { User } from '../entities/user';

export interface IUserRepository extends Repository<User> {}
