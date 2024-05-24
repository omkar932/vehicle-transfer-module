import { Module } from '@nestjs/common';
import { VehicleService } from './service/vehicle.service';
import { VehicleController } from './controller/vehicle.controller';

@Module({
  providers: [VehicleService],
  controllers: [VehicleController],
})
export class VehicleModule {}
