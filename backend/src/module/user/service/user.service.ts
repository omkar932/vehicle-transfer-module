import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserRepository } from '../dal/user.dal';
import { CreateUserDto, PhoneNumberDto } from '../dto/user.dto';
import { UserConstants } from 'src/common/constants.common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findWithMobileNumber(phoneNumberDto: PhoneNumberDto): Promise<User> {
    return this.userRepository.findWithMobileNumber(phoneNumberDto.phoneNumber);
  }

  async create(createUserDto: CreateUserDto): Promise<User[]> {
    const findUserExist = await this.findWithMobileNumber({
      phoneNumber: createUserDto.phoneNumber,
    });
    if (findUserExist)
      throw new BadRequestException(UserConstants.UserAlreadyExist);
    const user = await this.userRepository.createNew(createUserDto);
    return user;
  }
}
