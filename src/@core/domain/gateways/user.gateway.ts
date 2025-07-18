import { User } from '../entities/user';

export interface UserGateway {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User>;
}
