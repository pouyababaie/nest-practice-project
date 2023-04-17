import { Important } from "src/important/important";
import { User } from "src/user/entities/user.entity";
import { OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class UserImportant {

    @PrimaryGeneratedColumn()
    id: number;


    @OneToMany(type => Important, important => important.title)
    user: User;


    @OneToMany(type => User, imp => imp.important)

    important: string[]

}
