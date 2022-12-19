import { Body, Controller, Post } from "@nestjs/common";

import { OrderService } from "order/order.service";

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post("orders")
  async createOrder(@Body("order") createOrderDto: any): Promise<any> {
    return await this.orderService.createOrder(createOrderDto);
  }
}
