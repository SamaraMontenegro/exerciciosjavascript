/*Questão 15: Você é hacker! Isso mesmo, você possui o nome de usuário da conta do instagram que você deseja acessar, 
mas não tem a senha, porém, você conhece algumas características que obteve através de engenharia social, e acredita
 que a senha seja uma dessas palavras “chocolateQuente viajar amoviajar 123456 alterarsenha”.
a) Desenvolva uma função que receba como parâmetro esse texto inteiro e verifique se a senha do usuário que é 
amoviajar está contida nessas palavras; Caso sim, a mensagem “Você acessou a conta!”;*/

    var possivelSenha = ["chocolateQuente", "viajar", "amoviajar", "123456", "alterarsenha"]
    const senhaAcesso = "amoviajar"
    function acessarInsta() {
        for (let index = 0; index < possivelSenha.length; index++) {
            if (possivelSenha[index] == senhaAcesso) {
                return "Você acessou a conta!";
            } 
        }
                return "Acesso Negado"
    }


    resultado = acessarInsta()
    console.log(resultado);