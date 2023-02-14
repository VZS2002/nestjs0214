import { IsInt, MaxLength } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Tarhely {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @MaxLength(50, { message: 'A név nem lehet hosszabb 50 karakternél' })
  nev: string;
  @Column()
  @IsInt({ message: 'A tárhelynek számnak kell lennie' })
  tarhely: number;
  @Column()
  @IsInt({ message: 'Az árnak számnak kell lennie' })
  ar: number;
}
