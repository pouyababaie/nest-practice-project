import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Important {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

}
