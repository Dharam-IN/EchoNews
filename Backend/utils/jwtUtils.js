import JWT from 'jsonwebtoken';

export const getJWTToken = (userData) => {
    const tokenData = {
        id: userData._id,
        role: userData.role
    }
    const token = JWT.sign(tokenData, process.env.JWT_SECURE, {
        expiresIn: '7d'
    })

    return token;
}

export const sendToken = (user, statusCode, res, message) => {
    const token = getJWTToken(user);
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true, // Set httpOnly to true
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };
