import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar',
        length: 100,
        nullable: false})
    name: string

    @Column({type: 'varchar',
        length: 100,
        nullable: false})
    email: string

    @Column({name: 'role', 
        enum:['Customers', 
            'Editor', 
            'Admin'], 
        type: 'enum', 
    nullable: false})
    role: role
    
    @Column({type: 'varchar',
        length: 100,
        nullable: false})
    password: string 
    
}

enum role {'Customers', 
    'Editor', 
    'Admin'}