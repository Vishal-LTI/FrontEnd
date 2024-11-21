import bcrypt from 'bcryptjs';

function encryptPassword(password){

    const hashedPassword = bcrypt.hashSync(password, '$2a$10$Nt1wP/JVvWP0zSN.3Eht7u');

    return hashedPassword;
}

export default encryptPassword;