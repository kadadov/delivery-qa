import { OrderEntity } from 'order/order.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  full_name: string;

  @Column({ default: '' })
  phone: string;

  @Column({ default: '' })
  address: string;

  @OneToMany(() => OrderEntity, (order) => order.user_id)
  orders: OrderEntity[];
}
