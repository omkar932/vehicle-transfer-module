// src/entities/vehicle.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Base } from '../../../common/entity/common.entity';
import { User } from '../../user/entity/user.entity';
import { TransferHistory } from '../../transfer/entity/transfer.entity';

@Entity()
export class Vehicle extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  vehicleNumber: string;

  @Column()
  vehicleType: string;

  @Column({ nullable: true })
  pucCertificate: string;

  @Column({ nullable: true })
  insuranceCertificate: string;

  @ManyToOne(() => User, (user) => user.vehicles, { nullable: true })
  user: User;

  @OneToMany(
    () => TransferHistory,
    (transferHistory) => transferHistory.vehicle,
  )
  transferHistories: TransferHistory[];
}
