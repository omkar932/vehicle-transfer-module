import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from '../entity/vehicle.entity';

export class VehicleRepository {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>,
  ) {}
  async findAll() {
    return await this.vehicleRepository.find();
  }
  createNew(payload) {
    const vehicle = this.vehicleRepository.create(payload);
    return this.vehicleRepository.save(vehicle);
  }
  async findWithVehicleNumber(vehicleNumber: string): Promise<Vehicle> {
    return await this.vehicleRepository.findOneBy({ vehicleNumber });
  }
}
