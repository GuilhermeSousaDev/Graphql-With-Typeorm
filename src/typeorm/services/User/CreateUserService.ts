import { User } from "../../entities/User";
import UserRepository from "../../repositories/UserRepository";
import { hash } from "bcryptjs";

export default class CreateUserService {
    public async execute(data: { name: string, email: string, password: string }): Promise<User> {
        const userRepository = new UserRepository();

        const user = await userRepository.create(data);

        user.password = await hash(data.password, 8);

        await userRepository.save(user);

        return user;
    }
}