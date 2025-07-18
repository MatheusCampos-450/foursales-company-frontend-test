import type { UserGateway } from '@/@core/domain/gateways/user.gateway';
import type { HttpClient } from '../http-client';
import { User } from '@/@core/domain/entities/user';

export class UserHttpGateway implements UserGateway {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Promise<User[]> {
    return this.http
      .get<User[]>('/users')
      .then((data) => data.map((user) => new User(user)));
  }

  findById(id: number): Promise<User> {
    return this.http.get<User>(`/users/${id}`).then((data) => new User(data));
  }
}
