import * as t from 'typeorm';
import { User } from './user.entity';

@t.Entity('addresses')
export class Address {
  @t.PrimaryGeneratedColumn('increment')
  readonly id: number;

  @t.Column({ length: 8 })
  zip_code: string;

  @t.Column({ length: 120 })
  street: string;

  @t.Column()
  number: number;

  @t.Column({ length: 20, nullable: true })
  complement: string;

  @t.Column({ length: 120 })
  district: string;

  @t.Column({ length: 120 })
  city: string;

  @t.Column({ length: 120 })
  state: string;

  @t.Column({ length: 120 })
  country: string;

  @t.OneToMany(() => User, (user) => user.address)
  users: User[];
}
