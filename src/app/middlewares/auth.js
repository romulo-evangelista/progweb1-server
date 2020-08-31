import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

export default function verifyJWT(req, res, next){
  const bearerToken = req.headers.authorization;

  if(!bearerToken) {
    return res.status(401).json({
      auth: false, message: 'Token não existe.'
    });
  }
  
  const [, token] = bearerToken.split(' ');

  if (!token) {
    return res.status(401).json({
      auth: false, message: 'Token não existe.'
    });
  }

  jwt.verify(token, authConfig.jwt.secret, function(err, decoded) {
    if (err) {
      return res.status(500).json({
        auth: false, message: 'Falha ao autenticar token.'
      });
    }
    
    req.userId = decoded.id;
    next();
  });
}