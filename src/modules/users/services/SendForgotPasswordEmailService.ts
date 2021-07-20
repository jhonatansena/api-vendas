import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
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

    console.log(token);

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[API vendas] Recuperação de Senha',
      templateData: {
        template: `Olá {{name}}: {{token}}`,
        variables: {
          name: user.name,
          token,
        },
      },
    });
  }
}

export { SendForgotPasswordEmailService };
