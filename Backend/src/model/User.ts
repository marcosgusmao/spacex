import { uuid } from 'uuidv4';

class User {
  id: string;

  username: string;

  email: string;

  firstName: string;

  lastName: string;

  city: string;

  country: string;

  postalCode: string;

  aboutMe: string;

  constructor(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    city: string,
    country: string,
    postalCode: string,
    aboutMe: string,
  ) {
    this.id = uuid();
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
    this.postalCode = postalCode;
    this.aboutMe = aboutMe;
  }
}

export default User;
