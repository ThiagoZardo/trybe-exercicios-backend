import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from '../services/users.service';

class UsersController {
  constructor(private userService = new UserService()) {}

  public getAll = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(id);
    res.status(StatusCodes.OK).json(user);
  };

  public create = async (req: Request, res: Response) => {
    const newUser = req.body;
    const userCreated = await this.userService.create(newUser);
    res.status(StatusCodes.CREATED).json(userCreated);
  };

  public update = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = req.body;
    await this.userService.update(id, user);
    res.status(StatusCodes.NO_CONTENT).end();
  };

  public remove = async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.userService.remove(id);
    res.status(StatusCodes.OK).json({ message: 'User deleted successfully' })
  };
};

export default UsersController