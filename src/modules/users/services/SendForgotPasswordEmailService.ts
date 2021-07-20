import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import path from 'path';
import { UserTokenRepositories } from '../typeorm/repositories/UserTokenRepositories';
import EtherealMail from '@config/mail/EtherealMail';

interface IUser {
  email: string;
}

class SendForgotPasswordEmailService {
  async execute({ email }: IUser): Promise<void> {
    const userRepositories = getCustomRepository(UsersRepositories);
    const userTokenRepositories = getCustomRepository(UserTokenRepositories);

    const user = await userRepositories.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const { token } = await userTokenRepositories.generate(user.id);

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    );

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[API vendas] Recuperação de Senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `http://localhost:3000/reset_password?token=${token}`,
        },
      },
    });
  }
}

export { SendForgotPasswordEmailService };
