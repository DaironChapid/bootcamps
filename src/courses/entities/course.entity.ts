import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {   

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar' , {length : 40})
    title:string

    @Column({type: 'decimal' , nullable: true , default: 4})
    weeks: number;

    @Column({type: 'decimal'})
    tuition: true

    @Column({name: 'minimum_skill', 
        enum:['Beginner', 
            'Intermediate', 
            'Advance'], 
        type: 'enum' })
    minimumSkill:  minimumSkill

}

enum minimumSkill {'Beginner', 
    'Intermediate', 
    'Advance'} 