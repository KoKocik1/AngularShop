import { UserDto } from "./UserDto";

export class PostUserDtoPasswd {
  name: string;
  surrname: string;
  login: string;
  passwordOld: string;
  passwordNew: string;

  constructor(u: UserDto) {
    this.login = u.login;
    this.name = u.name;
    this.surrname = u.surrname;
  }
}
