import { User } from "../../entities/User";
import UserRepository from "../../repositories/UserRepository";

export default class CreateUserService {
    public async execute(data: { name: string, email: string, password: string }): Promise<User> {
        const userRepository = new UserRepository();

        const user = await userRepository.create(data);

        await userRepository.save(user);

        return user;
    }
}