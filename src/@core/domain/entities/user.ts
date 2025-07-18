export type CompanyProps = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type GeoProps = {
  lat: string;
  lng: string;
};

export type AddressProps = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
};

export type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
};

export class User {
  public props: UserProps;

  constructor(props: UserProps) {
    this.props = props;
  }

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get username(): string {
    return this.props.username;
  }

  get email(): string {
    return this.props.email;
  }

  get address(): AddressProps {
    return this.props.address;
  }

  get phone(): string {
    return this.props.phone;
  }

  get website(): string {
    return this.props.website;
  }

  get company(): CompanyProps {
    return this.props.company;
  }

  toJSON() {
    return {
      ...this.props,
    };
  }
}
