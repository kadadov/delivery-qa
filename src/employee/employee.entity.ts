import { JobEntity } from "job/job.entity";
import { OrderEntity } from "order/order.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({
  name: "employees",
})
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ default: "" })
  phone: string;

  @OneToMany(() => OrderEntity, (order) => order.employee_id)
  orders: OrderEntity[];

  @ManyToOne(() => JobEntity, (job) => job.job_id)
  job_id: JobEntity;
}
