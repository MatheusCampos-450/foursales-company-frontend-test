import type { UserProps } from '@/@core/domain/entities/user';
import type { HTMLAttributes } from 'react';

export type ListUserCardProps = {
  userProps: UserProps;
} & HTMLAttributes<HTMLDivElement>;
