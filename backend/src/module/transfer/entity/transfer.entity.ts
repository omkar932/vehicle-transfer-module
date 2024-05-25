// src/entities/transfer-history.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vehicle } from '../../vehicle/entity/vehicle.entity';
import { User } from '../../user/entity/user.entity';
import { Base } from '../../../common/entity/common.entity';

@Entity()
export class TransferHistory extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.transferHistories)
  vehicle: Vehicle;

  @ManyToOne(() => User, (user) => user.transferHistories)
  previousUser: User;

  @ManyToOne(() => User, (user) => user.transferHistories)
  currentUser: User;

  @Column({ type: 'timestamp' })
  transferDate: Date;
}
