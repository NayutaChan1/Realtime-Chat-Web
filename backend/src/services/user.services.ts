import { User } from "../models"

const getProfile = async (id: number) => {
    const user = await User.findOne({ where: {id}});
    if(!user){
        throw new Error("User is not exists");
    }

    return{
        id: user.id,
        username: user.username,
        status: user.status
    }
}

export { getProfile };