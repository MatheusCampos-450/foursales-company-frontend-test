import type { User } from '@/@core/domain/entities/user';
import type { UserGateway } from '@/@core/domain/gateways/user.gateway';

export class GetUserUseCase {
  private userGateway: UserGateway;

  constructor(userGateway: UserGateway) {
    this.userGateway = userGateway;
  }

  async execute(id: number): Promise<User> {
    return this.userGateway.findById(id);
  }
}
