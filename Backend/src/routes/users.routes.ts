import { Router } from 'express';

import User from '../model/User';
import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.post('/', (request, response) => {
  const {
    username,
    email,
    firstName,
    lastName,
    city,
    country,
    postalCode,
    aboutMe,
  } = request.body;

  const user = usersRepository.create(
    username,
    email,
    firstName,
    lastName,
    city,
    country,
    postalCode,
    aboutMe,
  );

  return response.json(user);
});

export default usersRouter;
