import { welcomeMessage } from './welcome';

describe('Função de boas-vindas', () => {
  it('deve chamar alert com a mensagem correta', () => {
    window.alert = jest.fn();
    
    welcomeMessage();

    expect(window.alert).toHaveBeenCalledWith('Bem-vindo ao DIO Bank!');
  });
});
