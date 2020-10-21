import User from '../model/User';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public create(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    city: string,
    country: string,
    postalCode: string,
    aboutMe: string,
  ): User {
    const user = new User(
      username,
      email,
      firstName,
      lastName,
      city,
      country,
      postalCode,
      aboutMe,
    );

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
