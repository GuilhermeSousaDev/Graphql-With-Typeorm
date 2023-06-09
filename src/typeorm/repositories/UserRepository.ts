import { Repository } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";

export default class UserRepository {
    ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(User);
    }

    public async save(user: User): Promise<User> {
        return this.ormRepository.save(user);
    }
    
    public async create(data: { name: string, email: string, password: string }): Promise<User> {
        return this.ormRepository.create(data);
    }

    public async find(): Promise<User[]> {
        return this.ormRepository.find({ relations: ['news'] });
    }

    public async findByEmail(email: string): Promise<User> {
        return this.ormRepository.findOne({ where: { email } });
    }

    public async delete(user: User): Promise<void> {
        this.ormRepository.remove(user);
    }
}