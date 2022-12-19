import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OrderEntity } from 'order/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async createOrder(createOrderDto: any): Promise<OrderEntity> {
    const newOrder = new OrderEntity();
    Object.assign(newOrder, createOrderDto);

    return await this.orderRepository.save(newOrder);
  }
}
