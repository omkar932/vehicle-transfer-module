import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userSerive: UserService) {}
  @Get()
  async findAll(req, res) {
    return res.send('hello world');
  }
}
