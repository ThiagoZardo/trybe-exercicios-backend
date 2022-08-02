import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/user.interface';
import { NotFoundError } from 'restify-errors';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  };

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  };

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  };

  public async create(newUser: User): Promise<User> {
    return this.model.create(newUser);
  };

  public async update(id: number, user: User): Promise<void> {
    const userFound = await this.model.update(id, user);
    return this.model.update(id, user);
  }

  public async remove(id: number): Promise<void> {
    await this.model.remove(id);
  }
};