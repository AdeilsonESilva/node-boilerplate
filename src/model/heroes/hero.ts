import { race } from 'src/types';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hero {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name!: string;

  @Column('boolean', { default: true })
  enabled?: boolean;

  @Column('timestamptz', { default: 'now()' })
  created_at?: number;

  @Column('timestamptz', { default: 'now()' })
  updated_at?: number;

  @Column()
  race!: race;
}
