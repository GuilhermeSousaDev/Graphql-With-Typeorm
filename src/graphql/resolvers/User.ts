import { GraphQLScalarType, Kind } from "graphql";
import { AppDataSource } from "../../typeorm/data-source";
import { ScalarDate } from "../scalar/Date";
import ListUsersService from "../../typeorm/services/User/ListUsersService";
import CreateUserService from "../../typeorm/services/User/CreateUserService";
import CreateSessionService from "../../typeorm/services/User/CreateSessionService";

const listUsersService = new ListUsersService();
const createUserService = new CreateUserService();
const createSessionService = new CreateSessionService();

export default {
    Query: {
        users: async () => await listUsersService.execute(),
    },
    Date: ScalarDate,
    Mutation: {
        createUser: async (_, { user }) => await createUserService.execute(user),
        createSession: async (_, { data }) => await createSessionService.execute(data),
    },
};