import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class News {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToOne(() => User, (user) => user.news)
    user: User;

    @CreateDateColumn({ name: 'created_at', default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date;
}