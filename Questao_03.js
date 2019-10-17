var nome = "Pedrinho Anão";
var n1 = 5;
var n2 = 5.5;
var media = realizaMedia(n1, n2);

alert("Nome: " + nome + "\n" +
    "Primeira nota: " + n1 + "\n" +
    "Segunda nota: " + n2);

alert("Media: " + media);

function realizaMedia(n1, n2) {
    return (n1 * .6) + (n2 * .4);
}