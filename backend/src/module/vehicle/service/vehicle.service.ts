import { BadRequestException, Injectable } from '@nestjs/common';
import { VehicleRepository } from '../dal/vehicle.dal';
import { Vehicle } from '../entity/vehicle.entity';
import { CreateVehicleDto, VehicleNumberDto } from '../dto/vehicle.dto';
import { VehicleConstants } from 'src/common/constants.common';

@Injectable()
export class VehicleService {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.findAll();
  }

  async findWithVehicleNumber(
    vehicleNumberDto: VehicleNumberDto,
  ): Promise<Vehicle> {
    return this.vehicleRepository.findWithVehicleNumber(
      vehicleNumberDto.vehicleNumber,
    );
  }

  async create(createvehicleDto: CreateVehicleDto): Promise<any> {
    const findvehicleExist = await this.findWithVehicleNumber({
      vehicleNumber: createvehicleDto.vehicleNumber,
    });
    if (findvehicleExist)
      throw new BadRequestException(VehicleConstants.VehicleAlreadyExist);
    const vehicle = await this.vehicleRepository.createNew(createvehicleDto);
    return {
      vehicle,
      message: VehicleConstants.VehicleAddedSuccessFully,
    };
  }
}
