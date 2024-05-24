// src/entities/base.entity.ts
import {
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

export class Base extends BaseEntity {
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ nullable: true })
  createdBy: number;

  @Column({ nullable: true })
  updatedBy: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @BeforeInsert()
  setDefaultsOnInsert() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.isActive = true;
    this.isDeleted = false;
  }

  @BeforeUpdate()
  setDefaultsOnUpdate() {
    this.updatedAt = new Date();
  }
}
