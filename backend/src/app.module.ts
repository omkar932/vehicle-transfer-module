import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';
import { VehicleModule } from './module/vehicle/vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // Default MySQL port
      username: 'root',
      password: 'root',
      database: 'vehicle_transfer_module',
      entities: [],
      synchronize: true, // Auto create database schema
    }),
    TypeOrmModule.forFeature([]),
    UserModule,
    VehicleModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
