import { Aggregate } from '../../contracts/aggregate';
import { USER_STATUS } from '../enums/userStatus';
import { Email } from '../valueObjects/email';

export class User extends Aggregate {
  private name: string;
  private email: Email;
  private password: string;
  private status: USER_STATUS;

  constructor(
    id: string | undefined,
    name: string,
    email: Email,
    password: string,
    status: USER_STATUS,
  ) {
    super(id);

    this.name = name;
    this.email = email;
    this.password = password;
    this.status = status;
  }

  get Name() {
    return this.name;
  }

  set Name(newName: string) {
    this.name = newName;
  }

  get Email() {
    return this.email;
  }

  set Email(newEmail: Email) {
    this.email = newEmail;
  }

  get Password() {
    return this.password;
  }

  set Password(newPassword: string) {
    this.password = newPassword;
  }

  get Status() {
    return this.status;
  }

  changeStatus(newStatus: USER_STATUS) {
    if (this.status === USER_STATUS.DELETED) throw new Error('user deleted');

    this.status = newStatus;
  }
}
