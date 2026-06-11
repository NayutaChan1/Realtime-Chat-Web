import bcrypt from 'bcrypt';
import { User } from '../models/index';

interface RegisteredUser {
    id: number;
    username: string;
}

const registerUser = async (
    username: string,
    password: string
): Promise<RegisteredUser> => {
    const isExisting = await User.findOne({ where: { username } });
    if (isExisting) {
        throw new Error('Username is already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        username: username,
        password: hashedPassword,
        status: 'offline',
    });

    return { id: newUser.id, username: newUser.username };
};

const getUser = async (username: string, password: string) => {
    const user = await User.findOne({ where: { username } });
    if(!user){
        throw new Error("User is not exists");
    }
    const isSame = await bcrypt.compare(password, user.password);
    if(!isSame){
        throw new Error("Wrong password");
    }

    return{
        username: user.
    }
}

export { registerUser, getUser };
