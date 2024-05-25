// src/entities/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Base } from '../../../common/entity/common.entity';
import { Vehicle } from '../../vehicle/entity/vehicle.entity';
import { TransferHistory } from '../../transfer/entity/transfer.entity';

@Entity()
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column({ nullable: true })
  profilePhoto: string;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.user)
  vehicles: Vehicle[];

  @OneToMany(
    () => TransferHistory,
    (transferHistory) => transferHistory.previousUser,
  )
  transferHistories: TransferHistory[];
}
