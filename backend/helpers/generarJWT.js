import jwt from 'jsonwebtoken';

const generarJWT = (...info) => {
    return jwt.sign({ ...info }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
export default generarJWT;