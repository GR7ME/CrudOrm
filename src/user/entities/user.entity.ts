import { Article } from "src/post/entities/post.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../models/user.models";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email:string

    @Column({type:"enum",
        enum: Role,
        default:Role.BASIC,
    })
    role:string

    @Column()
    password:string

    @OneToMany(()=>Article, (article) => article.user)
    articles: Article[]
}
