import CreateNewsService from "../../typeorm/services/News/CreateNewsService";
import ListNewsService from "../../typeorm/services/News/ListNewsService";
import { ScalarDate } from "../scalar/Date";

const listNewsService = new ListNewsService();
const createNewsService = new CreateNewsService();

export default {
    Query: {
        news: async () => await listNewsService.execute(),
    },
    Date: ScalarDate,
    Mutation: {
        createNews: async (_, { data }) => 
            await createNewsService.execute(data),
    },
}