import jwt from 'jsonwebtoken';

const isAuth=async (req, res, next) => {
    try{
        let {token} = req.cookies;
        if(!token){
            return res.status(400).json({message:"Unauthorized: No token provided"});
        }
        // Verify token and extract user ID
        const verifyToken=jwt.verify(token, process.env.JWT_SECRET);
        if(!verifyToken){
            return res.status(400).json({message:"Unauthorized: Invalid token"});
        }
        req.userId=verifyToken.userId;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"isAuth Middleware Error: "+error.message});
    }
}

export default isAuth;