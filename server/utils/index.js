import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";


export const hashString = async (useValue) => {
    const salt = await bcrypt.genSalt(10);  
    const hashedPassword = await bcrypt.hash(useValue, salt);  
    return hashedPassword;
}


export const compareString = async (password, userPassword) => {
    const isMatch = await bcrypt.compare(password, userPassword);  
    return isMatch;
};

// Tạo JWT
export function createJWT(id) {
    return JWT.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
}
