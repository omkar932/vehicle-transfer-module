import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserRepository } from '../dal/user.dal';
import { CreateUserDto, PhoneNumberDto } from '../dto/user.dto';
import { UserConstants } from 'src/common/constants.common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<any> {
    const data = await this.userRepository.findAll();
    return {
      data,
      message: UserConstants.UserFetchSuccessfully,
    };
  }

  async findWithMobileNumber(phoneNumberDto: PhoneNumberDto): Promise<any> {
    const data = await this.userRepository.findWithMobileNumber(
      phoneNumberDto.phoneNumber,
    );
    if (!data) return false;
    return {
      data,
      message: UserConstants.UserFetchSuccessfully,
    };
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    const findUserExist = await this.findWithMobileNumber({
      phoneNumber: createUserDto.phoneNumber,
    });
    console.log(findUserExist);
    if (findUserExist?.data)
      throw new BadRequestException(UserConstants.UserAlreadyExist);
    const user = await this.userRepository.createNew(createUserDto);
    return { user, message: UserConstants.UserCreatedSuccessFully };
  }
}
