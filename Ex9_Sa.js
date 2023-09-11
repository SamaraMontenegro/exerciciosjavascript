/*Questão 9: Como desenvolvedor, você recebeu uma tarefa para implementar uma função de autenticação de usuário e 
controle de acesso. Obs: Implemente os testes unitários

a) - Crie uma função que receba dois parâmetros: um é o email e o outro é a senha, essa função deve retornar um 
Boolean (true ou false).
b) - Crie outra função que utiliza a função criada anteriormente (A) e exiba a mensagem na tela “Seja bem vindo”
 caso o usuário esteja autenticado ou a mensagem “Acesso negado”.
 */

 function getUsuariosDb() {
  return [
    { email: "samara@gmail.com", senha: "1234" },
    { email: "fabio@gmail.com", senha: "4321" },
  ]
}

function autenticarUsuario(email, senha) {
  if (!getUsuariosDb().find(user => user.email === email && user.senha === senha))
    return "Autenticação falhou. Verifique o email e a senha.";

  return "Autenticação bem-sucedida!";
}

module.exports = autenticarUsuario