import { Body, Controller, Post } from "@nestjs/common";

import { EmployeeService } from "employee/employee.service";

@Controller()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post("employees")
  async createEmployee(@Body("employee") createEmployeeDto: any): Promise<any> {
    return await this.employeeService.createEmployee(createEmployeeDto);
  }
}
