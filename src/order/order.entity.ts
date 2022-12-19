import { EmployeeEntity } from 'employee/employee.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from 'user/user.entity';

@Entity({
  name: 'orders',
})
export class OrderEntity {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  delivery_time: number;

  @Column({ default: '' })
  items: string;

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  user_id: UserEntity;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.employee_id)
  employee_id: EmployeeEntity;
}
