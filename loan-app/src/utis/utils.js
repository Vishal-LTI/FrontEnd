import bcrypt from 'bcryptjs';

function encryptPassword(password){
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword;
}

export default encryptPassword;