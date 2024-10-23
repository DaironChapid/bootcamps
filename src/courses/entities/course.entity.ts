import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {   

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar' , {length : 20})
    phone:string

    @Column('varchar' , { length: 20 })
    name: string

    @Column('varchar' , {length:100 , default:"XXX"})
    address: string

    @Column('text')
    topics:string
        
    @Column('double' , )
    averageRating:number

    @Column('date')
    createdAt: Date

    @Column( 'varchar', {length: 30})
    minimumSkills : minimumSkill

}

enum minimumSkill {
    'Beginner', 
    'Intermediate', 
    'Advance'
}
