import type { UserProps } from '@/@core/domain/entities/user';

export interface UsersState {
  userDetails: UserProps | null;
  data: UserProps[];
  loading: boolean;
  error: string | null;
}
