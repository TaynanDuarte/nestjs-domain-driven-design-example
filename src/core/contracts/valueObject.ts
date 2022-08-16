type Attr = {
  [key: string]: any;
};

export abstract class ValueObject<T extends Attr> {
  private readonly attributes: T;

  constructor(attr: T) {
    this.attributes = Object.freeze(attr);
  }

  get Attributes() {
    return this.attributes;
  }

  equals(vo: ValueObject<T>) {
    for (const attrName of Object.keys(this.attributes)) {
      if (this.attributes[attrName] !== vo.Attributes[attrName]) {
        return false;
      }
    }

    return true;
  }
}
