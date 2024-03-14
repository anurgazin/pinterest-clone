export class UserType {
  user_id: string;
  username: string;
  email: string;
  token: string;

  constructor(user_id: string, username: string, email: string, token: string) {
    this.user_id = user_id;
    this.username = username;
    this.email = email;
    this.token = token;
  }
}
