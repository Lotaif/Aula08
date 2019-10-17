class Aluno {
    constructor(nome, sobrenome, n1, n2) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.n1 = n1;
        this.n2 = n2;
    };

    nomeCompleto() {
        return "Nome: " + this.nome + " " + this.sobrenome;
    };

    media() {
        return (this.n1 * .6) + (this.n2 * .4);
    };

    status() {
        return (this.media() >= 6) ? "Aprovado" : "Reprovado";
    };
}

var aluno1 = new Aluno("Tinky", "Winky", 10, 10);
var aluno2 = new Aluno("Laa", "Laa", 5, 5);
var aluno3 = new Aluno("Dipsy", "", 8, 8);
var aluno4 = new Aluno("Po", "", 1, 1);
var aluno5 = new Aluno("Joselito", "Osvaldo", 0, 10);

var lista = [aluno1, aluno2, aluno3, aluno4, aluno5];

for (var i = 0; i < lista.length; i++) {
    alert(
        lista[i].nomeCompleto() + "\n" +
        "Media: " + lista[i].media() + "\n" +
        lista[i].status()
    );
}