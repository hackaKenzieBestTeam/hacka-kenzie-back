import * as t from 'typeorm';
import { Exclude } from 'class-transformer';
import { Address } from './address.entity';

@t.Entity('users')
export class User {
  @t.PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @t.Column({ length: 50 })
  username: string;

  @t.Column({ length: 50 })
  first_name: string;

  @t.Column({ length: 50 })
  last_name: string;

  @t.Column({ length: 100 })
  email: string;

  @Exclude()
  @t.Column({ length: 150 })
  password: string;

  @t.Column({ length: 11 })
  cpf: string;

  @t.Column({ length: 14 })
  phone: string;

  @t.Column()
  birth_date: Date;

  @t.Column({ default: false })
  is_admin: boolean;

  @t.CreateDateColumn()
  created_at: Date;

  @t.UpdateDateColumn()
  updated_at: Date;

  @t.ManyToOne(() => Address, (address) => address.users, {
    eager: true,
    cascade: true
  })
  address: Address;
}
