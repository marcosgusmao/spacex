import User from '../model/User';

interface CreateUserDTO {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  postalCode: string;
  aboutMe: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public create({
    username,
    email,
    firstName,
    lastName,
    city,
    country,
    postalCode,
    aboutMe,
  }: CreateUserDTO): User {
    const user = new User({
      username,
      email,
      firstName,
      lastName,
      city,
      country,
      postalCode,
      aboutMe,
    });

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
