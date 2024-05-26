import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  @IsString()
  vehicleNumber: string;

  @IsNotEmpty()
  @IsString()
  vehicleType: string;

  @IsNotEmpty()
  @IsString()
  pucCertificate: string;

  @IsNotEmpty()
  @IsString()
  insuranceCertificate: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}

export class VehicleNumberDto {
  @IsNotEmpty()
  @IsString()
  vehicleNumber: string;
}
