/*Questão 12: Você recebeu uma task de criar um cadastro clientes, Crie uma função que receba como parâmetro o nome, email 
e cpf do cliente.

a) - Caso o argumento passado como nome não seja informado, a mensagem “O nome do cliente deve ser informado”*/

function cadastroClientes(nome, email, cpf) {
    if (!nome || nome.trim() === "") {
        return"O nome do cliente deve ser informado";
    }
    const cliente = {
        Nome: nome,
        Email: email,
        CPF: cpf
    };
    return `Cliente ${nome} cadastrado com sucesso!`;
}
const nomeCliente = "";
const emailCliente = "samara@email.com";
const cpfCliente = "123.456.789-00";

//const resultado = cadastroClientes(nomeCliente, emailCliente, cpfCliente);
//console.log(resultado);

/*b) - Sua função deve utilizar outra função de validação de email (procure na internet função pronta de validação de email e 
utilize-a) e caso o parâmetro de email não seja válido, a mensagem “E-mail inválido” deve ser exibida;*/

function validarEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)) {
        return true;
    }
    else {
        return 'E-mail inválido';
    }
}
resultado = validarEmail ("samaragmail.com");
console.log(resultado);

/*c) - Além da validação do e-mail, o parâmetro do CPF deve ser validado (procure na internet uma função pronta para validar 
CPF e utilize-a) também, caso o argumento passado como CPF não seja válido, a mensagem “CPF inválido deve ser exibida”;*/

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return 'CPF inválido';

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return 'CPF inválido';

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return 'CPF inválido';
    return true;
}
var strCPF = "09012741432";
console.log(TestaCPF(strCPF));

/*d) - Não deve ser permitido o cadastro em duplicidade de email e cpf, logo, verifique se o email e cpf já não estão cadastrados.*/
// Simulando uma lista de clientes já cadastrados (você deve usar um banco de dados real em um ambiente de produção)
const clientesCadastrados = [
    {
        Nome: "Fabio",
        Email: "fabio@email.com",
        CPF: "123.456.789-00"
    },
    {
        Nome: "Vinicius",
        Email: "vinicius@email.com",
        CPF: "987.654.321-00"
    }
];

function validarEmail(email, callback) {
    setTimeout(function () {
        const emailExistente = clientesCadastrados.some(cliente => cliente.Email === email);
        callback(emailExistente);
    }, 1000); // Simula uma operação assíncrona de validação
}


function validarCpf(cpf, callback) {
    setTimeout(function () {
        const cpfExistente = clientesCadastrados.some(cliente => cliente.CPF === cpf);
        callback(cpfExistente);
    }, 1000);
}

// Função de cadastro de cliente com callbacks
function cadastrarCliente(nome, email, cpf, callback) {
    validarEmail(email, function (emailExistente) {
        if (emailExistente) {
            callback("E-mail já cadastrado");
        } else {
            validarCpf(cpf, function (cpfExistente) {
                if (cpfExistente) {
                    callback("CPF já cadastrado");
                } else {
                    // Se não houver duplicidade, cadastrar o cliente
                    const cliente = {
                        Nome: nome,
                        Email: email,
                        CPF: cpf
                    };
                    clientesCadastrados.push(cliente);
                    callback(`Cliente ${nome} cadastrado com sucesso!`);
                }
            });
        }
    });
}

const nomeCliente = "Vinicius";
const emailCliente = "vinicius@email.com";
const cpfCliente = "111.222.333-44";

cadastrarCliente(nomeCliente, emailCliente, cpfCliente, function (resultado) {
    console.log(resultado);
});
