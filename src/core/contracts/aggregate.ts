import { v4 as uuid } from 'uuid';

export abstract class Aggregate {
  protected readonly id: string | undefined;

  protected constructor(id: string | undefined) {
    if (!id) {
      this.id = this.generateId();
    } else {
      this.validateId(id);
      this.id = id;
    }
  }

  get Id() {
    return this.id;
  }

  private generateId() {
    return uuid();
  }

  private validateId(uuid: string) {
    const uuidPattern = /\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}/;
    if (!uuidPattern.test(uuid)) throw new Error('invalid uuid');
  }

  equals(aggregate: Aggregate) {
    return this.id === aggregate.id;
  }
}
