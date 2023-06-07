import { News } from "../../entities/News";
import { User } from "../../entities/User";
import NewsRepository from "../../repositories/NewsRepository";

interface ICreateNews {
    title: string;
    content: string;
    user: User;
}

export default class CreateNewsService {
    public async execute(data: ICreateNews): Promise<News> {
        const newsRepository = new NewsRepository();

        const news = await newsRepository.create(data);

        await newsRepository.save(news);

        return news;
    }
}