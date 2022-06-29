const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token, 'secretKey')
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).send(
               
            )
        } else if (error.name === "JsonWebTokenError") {
            return res.status(401).send(('Login unsuccessful')
                
            )
        } else {
            return res.status(401).send(('Login unsuccessful')
              
            )
        }

    }
}
