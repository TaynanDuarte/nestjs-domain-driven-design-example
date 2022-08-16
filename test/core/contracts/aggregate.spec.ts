import { Aggregate } from '../../../src/core/contracts/aggregate';

describe('Aggregate', () => {
  describe('Instantiation', () => {
    test('It should create an new id if it is passed as undefined by parameter', () => {
      class User extends Aggregate {
        constructor(id: string | undefined) {
          super(id);
        }
      }

      const userInstance = new User(undefined);

      expect(userInstance.Id).toBeDefined();
    });

    test('If an id is passed by param a new id should not be created', () => {
      class User extends Aggregate {
        constructor(id: string | undefined) {
          super(id);
        }
      }

      const id = '8ee8778c-6529-436f-ad10-b9706bed62e4';
      const userInstance = new User(id);

      expect(userInstance.Id).toBe(id);
    });

    test('If the id passed by parameter does not match the uuid pattern an error must be throwed', () => {
      class User extends Aggregate {
        constructor(id: string | undefined) {
          super(id);
        }
      }

      expect(() => new User('WRONG_ID')).toThrowError('invalid uuid');
    });
  });

  describe('equals', () => {
    test('It should return true if the id is the same', () => {
      class User extends Aggregate {
        constructor(id: string | undefined) {
          super(id);
        }
      }

      const id = '8ee8778c-6529-436f-ad10-b9706bed62e4';
      const userInstance1 = new User(id);
      const userInstance2 = new User(id);

      expect(userInstance1.equals(userInstance2)).toBe(true);
    });

    test('It should return false if the id is not the same', () => {
      class User extends Aggregate {
        constructor(id: string | undefined) {
          super(id);
        }
      }

      const id = '8ee8778c-6529-436f-ad10-b9706bed62e4';
      const id2 = '8ee8778c-6529-436f-ad10-b9706bed62e5';
      const userInstance1 = new User(id);
      const userInstance2 = new User(id2);

      expect(userInstance1.equals(userInstance2)).toBe(false);
    });
  });
});
