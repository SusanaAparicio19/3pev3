//LISTO
import { UserRepository } from '../repository/user.repository.js';
import { hashSync } from 'bcrypt';

export class UserService {
    async create(reqBody) {
        try {
            reqBody.password = hashSync(reqBody.password);
            const create = await UserRepository.create(reqBody);
            const userData = {
                email: create.email,
                nombre: create.nombre,
                apellido: create.apellido,
                rol: 'usuario'
            };
            return userData;
        } catch (error) {
            throw new Error('Error al crear usuario');
        }
    }

    async findOneUser(req, res) {
        const user = req.session.user_id;
    
        try {
            const userFound = await UserRepository.findOneUser(user._id ).lean();
            return res.successfullGet(userFound);
        } catch (error) {
            return res.failedGet();
        }
    }
    
    async findManyUser(req, res) {
        const query = req.session.query;
    
        try {
            const usersFound = await UserRepository.findManyUser(query ).lean();
            return res.successfullGet(usersFound);
        } catch (error) {
            return res.failedGet();
        }
    }


   async resetPassword (email, password) {
        try {
            const newPassword = hashear(password);

            const actualizado = await UserRepository.findOneAndUpdate(
                { email },
                { $set: { password: newPassword } },
                { new: true }
            ).lean();

            if (!actualizado) {
                throw new Error('usuario no encontrado');
            }

            return actualizado;
        } catch (error) {
            throw new Error('Error al restablecer la contraseña del usuario');
        }
    }

    async usersByRoles(roles) {
        try {
            const usersByRole = await UserRepository.usersByRoles(roles);
            return usersByRole.map(user => user.toPOJO());
        } catch (error) {
            throw error;
        }
    }

    async updateUserByEmail(email, newData) {
        try {
            const updatedUser = await UserRepository.updateUserByEmail(email, { $set: { newData } });
            if (!updatedUser) {
            throw new Error('Usuario no encontrado')}
            return updatedUser;
        } catch (error) {
            throw new Error('Error al modificar los datos del usuario');
        }
    }

    async userCurrent (userId) {
        try {
            const user = await UserRepository.findOneUser(userId);
            return {
                id: user.id,
                username: user.username,
            };
        } catch (error) {
          throw new Error('Error al obtener el usuario actual');
        }
    }

    async deleteUserById (userId) {
        try {
          const deletedUser = await UserRepository.deleteUserById(userId);
          return deletedUser ? deletedUser.toObject() : null;
        } catch (error) {
          throw new Error('Error al eliminar usuario en el servicio');
        }
      }
}