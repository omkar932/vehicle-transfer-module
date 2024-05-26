import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async findAll() {
    return await this.userRepository.find();
  }
  async createNew(payload) {
    return await this.userRepository.create(payload);
  }
  async findWithMobileNumber(phoneNumber: string): Promise<User> {
    return await this.userRepository.findOneBy({ phoneNumber });
  }
}
