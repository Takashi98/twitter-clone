import jwt from 'jsonwebtoken'


const isAuthenticated = async(req,res,next) =>{
    try {
        const token = res.cookies?.token;
        // you will get res.cookies from browser --> inspect --> network --> header --> res --> cookies
        console.log(token);
        if(!token){
            return res.status(401).json({
                message: 'user is not authenticated',
                success : false
            })
        }

        const decode = await jwt.verify(token, process.env.JWT_TOKEN)
        console.log(decode);
        req.user = decode.userId
        next();
        

        
    } catch (error) {
        if(error.name === 'TokenExpiredError'){
            return res.status(401).json({
                message: 'Session expired, please log in again.',
                success: false,
            })
        }
        console.log(error)
        res.status(500).json({
            message : 'Internal server error'
        })
    }
}

export default isAuthenticated