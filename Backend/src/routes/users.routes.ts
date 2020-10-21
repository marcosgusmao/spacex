import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/', (request, response) => {
  const users = usersRepository.all();

  return response.json(users);
});

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
