//LISTO
import { UserModel } from "../models/User.model";


export class UserDao {
    async create(userData) {
        try {
            return await UserModel.create(userData);
        } catch (error) {
            throw new Error('Error al crear usuario en la base de datos');
        }
    }

    async findOneUser(_id) {
        try {
            const userFound = await UserModel.findOne({ _id }).lean();
            return userFound; 
        } catch (error) {
            throw new Error('Error al buscar usuario en la base de datos');
        }
    }

    async findManyUser(query) {
        try {
            const usersFound = await UserModel.findMany({ query }).lean();
            return usersFound; 
        } catch (error) {
            throw new Error('Error al buscar usuario en la base de datos');
        }
    }

    async resetPassword(email, newData) {
        try {
            const updatedPassword = await UserModel.findOneAndUpdate({ email }, newData, { new: true });
            return updatedPassword.toObject(); 
        } catch (error) {
            throw new Error('Error al actualizar usuario en la base de datos');
        }
    }


    async usersByRoles(roles) {
        try {
            const usersByRole = await UserModel.find({ rol: { $in: roles } }).lean();
            return usersByRole; 
        } catch (error) {
            throw new Error('Error al obtener usuarios por roles de la base de datos');
        }
    }


    async updateUserByEmail(email, newData) {
        try {
            const updatedUser = await UserModel.findOneAndUpdate({ email }, newData, { new: true });
            return updatedUser.toObject(); 
        } catch (error) {
            throw new Error('Error al actualizar usuario por email en la base de datos');
        }
    }

    async userCurrent(_id) {
        try {
            const userFound = await UserModel.findOne(_id);
            return userFound.toObject()
        } catch (error) {
            throw error;
        }
    }

    async deleteUserById(_id) {
        try {
            const deletedUser = await UserModel.findOneAndDelete({ _id });
            return deletedUser.toObject(); 
        } catch (error) {
            throw new Error('Error al eliminar usuario por email en la base de datos');
        }
    }
}
