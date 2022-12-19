import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EmployeeEntity } from 'employee/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async createEmployee(createEmployeeDto: any): Promise<EmployeeEntity> {
    const newEmployee = new EmployeeEntity();
    Object.assign(newEmployee, createEmployeeDto);

    return await this.employeeRepository.save(newEmployee);
  }
}
