import { Body, Controller, Post } from "@nestjs/common";

import { UserService } from "user/user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("users")
  async createUser(@Body("user") createUserDto: any): Promise<any> {
    return await this.userService.createUser(createUserDto);
  }
}
