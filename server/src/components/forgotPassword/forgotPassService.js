import path from 'path';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { hashSomething } from '../../helpers';
import { emailServiceProvider,
  emailUser,
  emailPassword,
  secretForResetPassToken } from '../../config';
const hbs = require('nodemailer-express-handlebars');
const User = require('../../database/models').User;

class ForgotPassService {
  static async _createToken (email) {
    const token = await jwt.sign({ email }, secretForResetPassToken, { expiresIn: 180 });
    if (token) {
      return token;
    } else {
      return null;
    }
  }

  static async sendResetPasswordEmail (email) {
    const hbsOptions = {
      viewEngine: {
        extname: '.handlebars',
        layoutsDir: path.resolve(__dirname, 'emailTemaplates'),
        partialsDir: path.resolve(__dirname, 'emailTemaplates')
      },
      viewPath: path.resolve(__dirname, 'emailTemaplates'),
      extName: '.handlebars'
    };

    const transporter = nodemailer.createTransport({
      service: emailServiceProvider,
      auth: {
        user: emailUser,
        pass: emailPassword
      }
    });

    const token = await this._createToken(email);
    if (token) {
      transporter.use('compile', hbs(hbsOptions));
      transporter.sendMail({
        from: 'Forgot Password Help Team',
        to: email,
        subject: 'Reset Password',
        template: 'main',
        context: {
          token
        }
      }, (error, response) => {
        if (error) return console.log(error);
        else console.log(response);
        transporter.close();
      });
    } else return token;
  }

  static async checkToken (token) {
    return jwt.verify(token, secretForResetPassToken, (error, decoded) => {
      if (error) {
        return null;
      } else {
        return decoded;
      }
    });
  }

  static async changePassword (email, newPassword) {
    try {
      const newHashedPass = await hashSomething(newPassword);
      const changePassResult = await User.update({
        password: newHashedPass }, { where: { email: email } });
      return changePassResult;
    } catch (error) {
      return {
        Error: error
      };
    }
  }
}

export default ForgotPassService;
