import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import multer from 'multer';
import uploadConfig from '../config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../service/CreateUserService';
import UpdateUserAvatarService from '../service/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.get('/', ensureAuthenticated, async (request, response) => {
  try {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();

    return response.json(users);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.post('/', async (request, response) => {
  try {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      city,
      country,
      postalCode,
      aboutMe,
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      username,
      email,
      password,
      firstName,
      lastName,
      city,
      country,
      postalCode,
      aboutMe,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    try {
      const updateUserAvatar = new UpdateUserAvatarService();

      const user = await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      delete user.password;

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  },
);

export default usersRouter;
