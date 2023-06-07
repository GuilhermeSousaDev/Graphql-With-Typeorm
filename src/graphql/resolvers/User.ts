import { GraphQLScalarType, Kind } from "graphql";
import { AppDataSource } from "../../typeorm/data-source";
import { ScalarDate } from "../scalar/Date";
import ListUsersService from "../../typeorm/services/User/ListUsersService";
import CreateUserService from "../../typeorm/services/User/CreateUserService";

const listUsersService = new ListUsersService();
const createUserService = new CreateUserService();

export default {
    Query: {
        users: async (_, args, context) => {
            console.log(context);

            return await listUsersService.execute();
        },
    },
    Date: ScalarDate,
    Mutation: {
        createUser: async (_, { user }) => await createUserService.execute(user),
    },
};