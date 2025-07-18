import type { User } from '@/@core/domain/entities/user';
import type { UserGateway } from '@/@core/domain/gateways/user.gateway';

export class ListUsersUseCase {
  private userGateway: UserGateway;

  constructor(userGateway: UserGateway) {
    this.userGateway = userGateway;
  }

  async execute(): Promise<User[]> {
    return this.userGateway.findAll();
  }
}
