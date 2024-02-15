//import { responseFailed } from '../middlewares/responseFailed.js';


export function soloLogueadosApi(req, res, next) {
  if (!req.session.user) {
    return res.failedGet();
  }
  next();
}
  
export function soloLogueadosWeb(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login')
      }
    next();
  }

export function soloAdmin(req, res, next) {
  if (!req.session.user) {
    return res.failedValidation();
  }
  next();
}

export function soloRoles(roles = []) {
  return function (req, res, next) {
    const userRoles = req.session.user ? req.session.user.rol : [];
    const unauthorizedRoles = roles.filter(role => !userRoles.includes(role));
    if (unauthorizedRoles.length > 0) {
      return res.forbidden(`No tiene permiso para acceder a este recurso. Roles no autorizados: ${unauthorizedRoles.join(", ")}`);
    }
    next();
  };
}

export function isAdmin(username, password) {
        return username === 'adminCoder@coder.com' && password === 'adminCod3r123'
    }
