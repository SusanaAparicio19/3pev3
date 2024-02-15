//LISTO
import { UserDao } from '../dao/user.dao.js';
import { UserDto } from '../dto/user.dto.js';

export class UserRepository {
    async create(userData) {
        try {
            const user = await UserDao.create(userData);
            return new UserDto(user); 
        } catch (error) {
            throw error;
        }
    }

    async findOneUser(_id) {
        try {
            const userFound = await UserDao.findOneUser(_id);
            return userFound ? new UserDto(user) : null; 
        } catch (error) {
            throw error;
        }
    }

    async findManyUser(query) {
        try {
            const usersFound = await UserDao.findManyUser(query);
            return usersFound ? new UserDto(user) : null; 
        } catch (error) {
            throw error;
        }
    }


    async resetPassword(email, newData) {
        try {
            const updatedPassword = await UserDao.resetPassword(email, newData); 
            return updatedPassword ? new UserDto(updatedPassword) : null; 
        } catch (error) {
            throw error;
        }
    }

    async usersByRoles(roles) {
        try {
            const usersByRole = await UserDao.usersByRoles(roles);
            return usersByRole.map(user => new UserDto(user)); 
        } catch (error) {
            throw error;
            }
    }

    async updateUserByEmail(email, newData) {
            try {
                const updatedUser = await UserDao.updateUserByEmail(email, newData); 
                return updatedUser ? new UserDto(updatedUser) : null; 
            } catch (error) {
                throw error;
            }
        }

    async userCurrent(_id) {
            try {
                const userFound = await UserDao.findOneUser(_id);
                return userFound ? new UserDto(user) : null; 
            } catch (error) {
                throw error;
            }
        }

    async deleteUserById(_id) {
        try {
            const deletedUser = await UserDao.deleteUserById(_id); 
            return deletedUser ? new UserDto(deletedUser) : null; 
        } catch (error) {
            throw error;
        }
    }
}

export const userRepository = new UserRepository();

