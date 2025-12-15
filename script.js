// Usuários padrão
let usuarios = [
  { user: "admin", senha: "123", perfil: "admin" },
  { user: "atendente", senha: "123", perfil: "atendente" }
];

let interessados = [];
let usuarioLogado = null;

// LOGIN (RF01 + RNF03)
function login() {
  let u = document.getElementById("loginUser").value;
  let s = document.getElementById("loginPass").value;

  let encontrado = usuarios.find(
    user => user.user === u && user.senha === s
  );

  if (encontrado) {
    usuarioLogado = encontrado;

    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("appSection").classList.remove("hidden");

    document.getElementById("welcome").innerText =
      `Usuário: ${encontrado.user} | Perfil: ${encontrado.perfil}`;

    // Controle de acesso por perfil (RF05)
    if (encontrado.perfil === "admin") {
      document.getElementById("btnUsuarios").style.display = "inline-block";
      showArea("usuarios");
      listarUsuarios();
    } else {
      document.getElementById("btnUsuarios").style.display = "none";
      showArea("interessados");
      listarInteressados();
    }
  } else {
    alert("Usuário ou senha inválidos");
  }
}

// NAVEGAÇÃO
function showArea(area) {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("usuarios").classList.add("hidden");
  document.getElementById("interessados").classList.add("hidden");

  document.getElementById(area).classList.remove("hidden");
}

// CADASTRAR USUÁRIO (RF02)
function addUser() {
  let user = document.getElementById("newUser").value;
  let senha = document.getElementById("newPass").value;
  let perfil = document.getElementById("newRole").value;

  if (!user || !senha) {
    alert("Preencha todos os campos");
    return;
  }

  usuarios.push({ user, senha, perfil });
  listarUsuarios();
}

// LISTAR USUÁRIOS
function listarUsuarios() {
  let tabela = document.getElementById("userTable");
  tabela.innerHTML = "";

  usuarios.forEach(u => {
    let row = `<tr>
      <td>${u.user}</td>
      <td>${u.perfil}</td>
    </tr>`;
    tabela.innerHTML += row;
  });
}

// CADASTRAR INTERESSADO (RF03)
function addInteressado() {
  let nome = document.getElementById("intNome").value;
  let curso = document.getElementById("intCurso").value;

  if (!nome || !curso) {
    alert("Preencha todos os campos");
    return;
  }

  interessados.push({ nome, curso });
  listarInteressados();
}

// LISTAR INTERESSADOS (RF04)
function listarInteressados() {
  let tabela = document.getElementById("intTable");
  tabela.innerHTML = "";

  interessados.forEach(i => {
    let row = `<tr>
      <td>${i.nome}</td>
      <td>${i.curso}</td>
    </tr>`;
    tabela.innerHTML += row;
  });
}

// LOGOUT
function logout() {
  location.reload();
}
