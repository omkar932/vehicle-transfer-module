import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVehicleDto } from '../dto/vehicle.dto';
import { Vehicle } from '../entity/vehicle.entity';
import { VehicleService } from '../service/vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async findAll(): Promise<Vehicle[]> {
    return this.vehicleService.findAll();
  }

  @Post()
  async create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle[]> {
    return await this.vehicleService.create(createVehicleDto);
  }
}
