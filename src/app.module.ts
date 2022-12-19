import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import ormConfig from "config/typeorm.config";
import { EmployeeModule } from "employee/employee.module";
import { JobModule } from "job/job.module";
import { OrderModule } from "order/order.module";
import { UserModule } from "user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    UserModule,
    OrderModule,
    EmployeeModule,
    JobModule,
  ],
})
export class AppModule {}
