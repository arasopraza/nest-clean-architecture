import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column('varchar', { unique: true })
  username: string;

  @Column('text')
  password: string;

  @CreateDateColumn({ name: 'create_date' })
  create_date: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updated_date: Date;
}
