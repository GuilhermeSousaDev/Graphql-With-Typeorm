import { News } from "../../entities/News";
import NewsRepository from "../../repositories/NewsRepository";

export default class ListNewsService {
    public async execute(): Promise<News[]> {
        const newsRepository = new NewsRepository();

        const news = await newsRepository.find();

        return news;
    }
}