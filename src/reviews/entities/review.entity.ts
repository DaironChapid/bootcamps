import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('reviews')
export class Review {

    @Column()
    title: string

    @Column()
    content: string
    
    @Column()
    rating: string

    

}
