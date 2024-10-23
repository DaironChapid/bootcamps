import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    role: string 
    
    @Column()
    password: string 
    
}

