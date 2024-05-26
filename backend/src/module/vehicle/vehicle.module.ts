import { Module } from '@nestjs/common';
import { VehicleService } from './service/vehicle.service';
import { VehicleController } from './controller/vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entity/vehicle.entity';
import { VehicleRepository } from './dal/vehicle.dal';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  providers: [VehicleService, VehicleRepository],
  controllers: [VehicleController],
})
export class VehicleModule {}
