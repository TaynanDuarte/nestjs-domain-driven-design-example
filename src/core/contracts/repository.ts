import { Aggregate } from './aggregate';

export interface Repository<T extends Aggregate> {
  getById(id: string): Promise<T | undefined>;
  create(obj: T): Promise<void>;
  update(obj: T): Promise<void>;
  delete(id: string): Promise<void>;
}
