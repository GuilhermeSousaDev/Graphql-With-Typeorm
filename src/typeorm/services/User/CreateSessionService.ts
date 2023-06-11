import { compare } from "bcryptjs";
import { User } from "../../entities/User";
import UserRepository from "../../repositories/UserRepository";
import { sign } from "jsonwebtoken";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    token: string;
    user: User;
}

export default class CreateSessionService {
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const userRepository = new UserRepository();

        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new Error('User not Found');
        }

        const isSamePassword = compare(password, user.password);

        if (!isSamePassword) {
            throw new Error('Incorrect Password');
        }

        const token = sign(
            { 
                name: user.name,
                email: user.email, 
            }, 
            'privatekey', 
            { expiresIn: '1d' });

        return {
            token,
            user,
        };
    }
}