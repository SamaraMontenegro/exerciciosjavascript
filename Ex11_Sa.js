/* Questão 11: Dado uma função que tem a finalidade que retorna as funcionalidades que o usuário tem permissão de acessar. 
Implemente essa função na qual ao receber o seguinte parâmetro {usuario_id: 1, perfil: “ADMINISTRADOR”} ou 
{usuario_id: 2, perfil: “NORMAL”} 

a) -Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”CADASTRAR”,”VISUALIZAR”,
    ”ALTERAR”,”EXCLUIR”];

b) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array de funcionalidades [“LISTAR”,”VISUALIZAR”]*/ 


const usuario1 = { usuario_id: 1, perfil: "ADMINISTRADOR" };
const usuario2 = { usuario_id: 2, perfil: "NORMAL" };

function TipodePermissão(usuario) {
    if (usuario.perfil === "ADMINISTRADOR") {
      return ["LISTAR", "CADASTRAR", "VISUALIZAR", "ALTERAR", "EXCLUIR"];
    } else if (usuario.perfil === "NORMAL") {
      return ["LISTAR", "VISUALIZAR"];

      
    }
  }

const funcionalidades1 = TipodePermissão(usuario1);
const funcionalidades2 = TipodePermissão(usuario2);

console.log("Permissão do usuário 1:", funcionalidades1);
console.log("Permissão do usuário 2:", funcionalidades2);