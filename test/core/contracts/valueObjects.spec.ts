import { ValueObject } from '../../../src/core/contracts/valueObject';

describe('ValueObject', () => {
  describe('Instantiation', () => {
    test('All the attributes should be readonly', () => {
      type AddressAttr = {
        city: string;
        street: string;
        number: number;
      };

      class Address extends ValueObject<AddressAttr> {
        constructor(attr: AddressAttr) {
          super(attr);
        }
      }

      const addresInstance = new Address({
        city: 'cityTest',
        street: 'streetTest',
        number: 15,
      });

      expect(() => (addresInstance.Attributes.city = 'cityTest2')).toThrowError(
        `Cannot assign to read only property 'city' of object '#<Object>'`,
      );

      expect(() => (addresInstance.Attributes.street = 'street2')).toThrowError(
        "Cannot assign to read only property 'street' of object '#<Object>'",
      );

      expect(() => (addresInstance.Attributes.number = 88)).toThrowError(
        "Cannot assign to read only property 'number' of object '#<Object>'",
      );
    });
  });

  describe('equals', () => {
    test('It should return true if all attributes are equals', () => {
      type AddressAttr = {
        city: string;
        street: string;
        number: number;
      };

      class Address extends ValueObject<AddressAttr> {
        constructor(attr: AddressAttr) {
          super(attr);
        }
      }

      const addresInstance1 = new Address({
        city: 'cityTest',
        street: 'streetTest',
        number: 15,
      });

      const addresInstance2 = new Address({
        city: 'cityTest',
        street: 'streetTest',
        number: 15,
      });

      expect(addresInstance1.equals(addresInstance2)).toBe(true);
    });

    test('It should return false is some attribute is not equals', () => {
      type AddressAttr = {
        city: string;
        street: string;
        number: number;
      };

      class Address extends ValueObject<AddressAttr> {
        constructor(attr: AddressAttr) {
          super(attr);
        }
      }

      const addresInstance1 = new Address({
        city: 'cityTest',
        street: 'streetTest',
        number: 15,
      });

      const addresInstance2 = new Address({
        city: 'cityTest',
        street: 'streetTest',
        number: 18,
      });

      expect(addresInstance1.equals(addresInstance2)).toBe(false);
    });
  });
});
