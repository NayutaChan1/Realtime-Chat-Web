import bcrypt from 'bcrypt';
import { User } from '../models/index';
import jwt from 'jsonwebtoken';

interface RegisteredUser {
    id: number;
    username: string;
}

const JWT_SECRET= process.env.JWT_SECRET || "SECRETBANGETTTT";

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

    const token = jwt.sign(
        {id: user.id, username: user.username, status: user.status},
        JWT_SECRET,
        { expiresIn: "7d" }
    )

    return{
        token: token, user: {id: user.id, username: user.username, status: user.status}
    }
}

export { registerUser, getUser };
