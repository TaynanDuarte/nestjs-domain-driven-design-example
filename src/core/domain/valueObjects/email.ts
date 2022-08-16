import { ValueObject } from '../../contracts/valueObject';

type EmailAttr = {
  prefix: string;
  domain: string;
};

export class Email extends ValueObject<EmailAttr> {
  constructor(attr: EmailAttr) {
    super(attr);
  }

  toString() {
    return `${this.Attributes.prefix}@${this.Attributes.domain}`;
  }
}
