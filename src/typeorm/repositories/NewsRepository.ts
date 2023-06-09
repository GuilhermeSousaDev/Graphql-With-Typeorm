import { Repository } from "typeorm";
import { News } from "../entities/News";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

interface ICreateNews {
    title: string;
    content: string;
    user: User;
}

export default class NewsRepository {
    ormRepository: Repository<News>;

    constructor() {
        this.ormRepository = AppDataSource.getRepository(News);
    }

    public async save(news: News): Promise<News> {
        return this.ormRepository.save(news);
    }

    public async create(data: ICreateNews): Promise<News> {
        return this.ormRepository.create(data);
    }

    public async find(): Promise<News[]> {
        return this.ormRepository.find({ relations: ['user'] });
    }

    public async findById(id: string): Promise<News> {
        return this.ormRepository.findOne({ where: { id }, relations: ['user'] });
    }

    public async delete(news: News): Promise<void> {
        this.ormRepository.remove(news);
    }
}