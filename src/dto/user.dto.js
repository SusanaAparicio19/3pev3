export class UserDto {
    constructor(user) {
        this.email = user.email;
        this.nombre = user.nombre;
        this.apellido = user.apellido;
    }
}
