
import { UserImportant } from '@app/user-important/user-important';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    mobile: string;

    @Column()
    weight: number;

    @Column()
    height: number;

    @Column()
    bmi: number;

    @Column()
    bmiResult: string;

    @Column()
    gender: string;

    @Column()
    requireTrainer: string;

    @Column()
    package: string;

    @Column()
    important: UserImportant[];

    @Column()
    haveGymBefore: boolean;

    @Column()
    enquireDate: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    // @Column()
    // age: number;

}
