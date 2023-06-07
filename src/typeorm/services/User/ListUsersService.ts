import { User } from "../../entities/User";
import UserRepository from "../../repositories/UserRepository";

export default class ListUsersService {
    public async execute(): Promise<User[]> {
        const userRepository = new UserRepository();

        const users = await userRepository.find();

        return users;
    }
}