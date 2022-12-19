import { EmployeeEntity } from 'employee/employee.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'jobs',
})
export class JobEntity {
  @PrimaryGeneratedColumn()
  job_id: number;

  @Column()
  job_type: string;

  @Column({ default: 0 })
  hours: number;

  @Column({ default: 0 })
  salary: number;

  @OneToMany(() => EmployeeEntity, (employee) => employee.employee_id)
  employees: EmployeeEntity[];
}
