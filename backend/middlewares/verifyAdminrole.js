import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const verifyAdminToken =  ((req,res, next) => {
    const adminToken = req.cookies.access_token;
    if(!adminToken){
        const AdminTokenError = new Error('No Token Found!')
        AdminTokenError.statusCode = 404;
        throw AdminTokenError;
    }
    jwt.verify(adminToken,process.env.JWTSECRET,(err,user)=>{
        if(err){
            if (err.name === 'TokenExpiredError') {
                // Send a 401 Unauthorized status code with an error message
                res.status(401).json({ error: 'Token expired' });
            } else {
                // For other errors, send a generic 500 Internal Server Error status code
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }else {
            console.log('Admin token verified successfully',user)
            //setting the user to the req
            req.user = user ;
            //extracting the role from the 'user'
            const userRole = user.role;
            //Attaching the role to the request object for further use in route handlers
            req.role = userRole;
            next();
        }
    })
})