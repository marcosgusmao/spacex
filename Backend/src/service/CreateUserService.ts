import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  postalCode: string;
  aboutMe: string;
}

class CreateUserService {
  public async execute({
    username,
    email,
    password,
    firstName,
    lastName,
    city,
    country,
    postalCode,
    aboutMe,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used.', 400);
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      city,
      country,
      postalCode,
      aboutMe,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
