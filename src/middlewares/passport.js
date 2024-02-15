import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { UserModel } from '../models/User.model.js'
import { Strategy as GithubStrategy } from 'passport-github2'
import { githubCallbackUrl, githubClientSecret, githubClienteId } from '../config.js'


passport.use('github', new GithubStrategy({
  clientID: githubClienteId,
  clientSecret: githubClientSecret,
  callbackURL: githubCallbackUrl
}, async function verify(accessToken, refreshToken, profile, done) {
  
  console.log(profile)

  const usuario = await User.findOne({ email: profile.username })
  if (usuario) {
    return done(null, {
      ...usuario.infoPublica(),
      rol: 'usuario'
    });
    }
    try{
    const registrado = await UsersManager.create({
      email: profile.username,
      password: '(sin especificar)',
      nombre: profile.displayName,
      apellido: '(sin especificar)' ,
    });
    
    done(null, {
      ...registrado.infoPublica(),
      rol: 'usuario'
    })
  } catch(error) {
    done(error);
  }

}));


passport.use('register', new LocalStrategy({
  passReqToCallback: true,
  usernameField: 'email'
},
  async (req, _u, _p, done) => {
    try {
      const datosUsuario = await UsersManager.createUser(req.body)
      done(null, datosUsuario)
    } catch (error) {
      done(null, false, error.message)
    }
  }))

  passport.use('login', new LocalStrategy({
    usernameField: 'email'
  }, async (email, password, done) => {
    try {
      const usuario = await User.findOne({ email }).lean();
      if (!usuario || !hasheadasSonIguales(password, usuario.password)) {
        // En caso de falla de autenticación
        return done(null, false);
      }
      // Autenticación exitosa
      return done(null, usuario);
    } catch (error) {
      // Manejo de errores
      console.error(error);
      return done(error);
    }
  }));
  

/*  
passport.use('login', new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    const datosUsuario = await UsersManager.autenticar(email, password)
    done(null, datosUsuario)
  } catch (error) {
    console.log(error);
    return done(null, false, error.message)
  }
}))*/


passport.serializeUser((usuario, next) => { next(null, usuario) })
passport.deserializeUser((usuario, next) => { next(null, usuario) })

const passportInitialize = passport.initialize()
const passportSession = passport.session()

export function autenticacion(req, res, next) {
  passportInitialize(req, res, () => {
    passportSession(req, res, next)
  })
}