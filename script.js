// Usuários padrão
let usuarios = [
    { user: "admin", senha: "123", perfil: "admin" },
    { user: "atendente", senha: "123", perfil: "atendente" }
];

let interessados = [];

// LOGIN (RF01 + RNF03)
function login() {
    let u = document.getElementById("usuario").value;
    let s = document.getElementById("senha").value;

    let encontrado = usuarios.find(
        user => user.user === u && user.senha === s
    );

    if (encontrado) {
        document.getElementById("loginBox").classList.add("hidden");

        if (encontrado.perfil === "admin") {
            document.getElementById("adminArea").classList.remove("hidden");
            listarUsuarios();
        } else {
            document.getElementById("atendenteArea").classList.remove("hidden");
            listarInteressados();
        }
    } else {
        document.getElementById("msg").innerText = "Usuário ou senha inválidos";
    }
}

// CADASTRAR USUÁRIO (RF02)
function cadastrarUsuario() {
    let user = document.getElementById("novoUser").value;
    let perfil = document.getElementById("perfil").value;

    usuarios.push({ user, senha: "123", perfil });
    listarUsuarios();
}

// LISTAR USUÁRIOS
function listarUsuarios() {
    let lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach(u => {
        let li = document.createElement("li");
        li.innerText = `${u.user} (${u.perfil})`;
        lista.appendChild(li);
    });
}

// CADASTRAR INTERESSADO (RF03)
function cadastrarInteressado() {
    let nome = document.getElementById("nomeInteressado").value;
    let curso = document.getElementById("curso").value;

    interessados.push({ nome, curso });
    listarInteressados();
}

// LISTAR INTERESSADOS (RF04)
function listarInteressados() {
    let lista = document.getElementById("listaInteressados");
    lista.innerHTML = "";

    interessados.forEach(i => {
        let li = document.createElement("li");
        li.innerText = `${i.nome} - ${i.curso}`;
        lista.appendChild(li);
    });
}

// LOGOUT
function logout() {
    location.reload();
}
