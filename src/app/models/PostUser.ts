import { UserDto } from "./UserDto";

export class PostUserDto {
  name: string;
  surrname: string;
  login: string;
  password: string;
  oldPasswd: string;

  constructor(u: UserDto, passwd: string, passwdOld: string) {
    this.login = u.login;
    this.name = u.name;
    this.surrname = u.surrname;
    this.password = passwd;
    this.oldPasswd = passwdOld;
  }
}
