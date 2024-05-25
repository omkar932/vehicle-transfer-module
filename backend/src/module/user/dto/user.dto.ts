import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  profilePhoto?: string;
}

export class PhoneNumberDto {
  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;
}
