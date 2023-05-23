const validation = (userData) => {
    const errors = {};

    if (!/^[a-z0-9._%+-]+@[A-Z0-9.-]+\.[a-z]{2,3}$/i.test(userData.email)) {
        errors.email = 'Debes ingresar una dirección de email válida'
    }
    if (!userData.email) {
        errors.email = 'Debes ingresar un email'
    }
    if (userData.email.length > 35) {
        errors.email = 'El mail no debe superar los de 35 caracteres'
        }
    if(!/.\d+.*/.test(userData.password)){
        errors.password = 'La contraseña debe tener al menos un número'
    }

    if(userData.password.length  < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe tener una longitud entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation;