import { verify } from "jsonwebtoken";
import { News } from "../../entities/News";
import { User } from "../../entities/User";
import NewsRepository from "../../repositories/NewsRepository";

interface ICreateNews {
    title: string;
    content: string;
    user: User;
    token: string;
}

export default class CreateNewsService {
    public async execute(data: ICreateNews): Promise<News> {
        try {
            verify(data.token, 'privatekey');

            const newsRepository = new NewsRepository();

            const news = await newsRepository.create(data);

            await newsRepository.save(news);

            return news;
        } catch (e) {
            return e;
        }
    }
}