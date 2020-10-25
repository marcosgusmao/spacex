import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('users')
class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  avatar: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;

  @Column()
  aboutMe: string;
}

export default User;
