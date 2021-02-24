
let contatos = JSON.parse(localStorage.getItem('contatos')) || [];

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("tel");

const alerta = document.getElementById("alerta")
const btn = document.getElementById("btn");
const listaUL = document.getElementById("listaCliente");

const rederizarContato = (id) => {
  listaUL.innerHTML = "";
  let ids = -1;

  for (const contato of contatos) {
    ids++;
    const deletar = document.createElement("h1");
    deletar.setAttribute("class", "delete");
    deletar.innerText = "X";
    deletar.id = ids;
    deletar.onclick = () => {
      deletarContato(deletar.id);
    };

    const itemLista = document.createElement("li");
    itemLista.setAttribute("class", "item");

    const nome = document.createElement("p");
    nome.setAttribute("class", "nome");
    nome.innerText = contato.nome;

    const email = document.createElement("p");
    email.innerText = "Email: " + contato.email;

    const whatsApp = document.createElement("p");
    whatsApp.innerText = "Tel: " + contato.whatsApp;

    itemLista.appendChild(deletar);
    itemLista.appendChild(nome);
    itemLista.appendChild(email);
    itemLista.appendChild(whatsApp);
    listaUL.appendChild(itemLista);
    salvarDadosNoStorage()
  }
};

const deletarContato = (tar) => {
  // Remove a tarefa do array
  contatos.splice(tar, 1);
  rederizarContato();
};

btn.onclick = () => {
  console.log(alerta.innerText)
  alerta.innerText = ""
  if (nome.value !== "" && email.value !== "" && telefone.value !== "") {
  
    contatos.push({
      nome: nome.value,
      email: email.value,
      whatsApp: telefone.value,
    });
    rederizarContato();
  }else{
    alerta.innerText = "digite os dados do conatato"
  }

  nome.value = "";
  email.value = "";
  telefone.value = "";
};

function salvarDadosNoStorage(){
  localStorage.setItem('contatos', JSON.stringify(contatos));
}



rederizarContato();
