// src/entities/vehicle.entity.ts
import { Base } from '../../../common/entity/common.entity';
import { User } from '../../user/entity/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity()
export class Vehicle extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleNumber: string;

  @Column()
  vehicleType: string;

  @Column({ nullable: true })
  pucCertificate: string;

  @Column({ nullable: true })
  insuranceCertificate: string;

  @ManyToOne(() => User, (user) => user.vehicles, { nullable: true })
  user: User;
}
