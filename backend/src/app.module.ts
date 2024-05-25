import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';
import { VehicleModule } from './module/vehicle/vehicle.module';
import * as dotenv from 'dotenv';
import { User } from './module/user/entity/user.entity';
import { Vehicle } from './module/vehicle/entity/vehicle.entity';
import { TransferModule } from './module/transfer/transfer.module';
import { TransferHistory } from './module/transfer/entity/transfer.entity';
const env = dotenv.config().parsed;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.DB_HOST,
      port: +env.DB_PORT,
      username: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
      entities: [User, Vehicle, TransferHistory],
      synchronize: JSON.parse('true'), // Auto create database schema
    }),
    TypeOrmModule.forFeature([User, Vehicle, TransferHistory]),
    UserModule,
    VehicleModule,
    TransferModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
