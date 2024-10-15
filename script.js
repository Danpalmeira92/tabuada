// Criando a função e declarando as variáveis de acordo com a inserção delas através dos id do HTML
function contar() {
    var numero = document.getElementById('numero').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.querySelector('div#res')

// Convertendo os valores para números
numero = Number(numero)
fim = Number(fim)
passo = Number(passo)

// Verificando se o paso é válido
if (passo <= 0) {
    alert('Passo inválido! Considerando passo 1')
    passo = 1
}

res.innerHTML = 'Contando: <br>' // Inserindo texto na página para substituir o texto inicial do HTML

/*
Inicialização (var i = numero):

Aqui, a variável i é inicializada com o valor de numero. Isso significa que a contagem começará pelo valor inicial que o usuário informou.
Condição (i <= fim && numero < fim):

O laço continuará rodando enquanto a variável i for menor ou igual ao valor de fim e a condição adicional numero < fim for verdadeira.
Por que numero < fim? Isso impede que a contagem seja executada se numero for maior ou igual ao valor de fim (o que seria o caso de uma contagem decrescente, e queremos evitar que o laço crescente seja executado nesse cenário).
Incremento (i += passo):

Após cada iteração do laço, a variável i é incrementada pelo valor de passo. Isso faz com que o número seja aumentado conforme o valor definido para o passo (exemplo: de 2 em 2, 5 em 5, etc.).

Inicialização (var i = numero):

A variável i é novamente inicializada com o valor de numero, para começar a contagem.
Condição (i >= fim && numero > fim):

O laço continuará rodando enquanto a variável i for maior ou igual ao valor de fim e a condição adicional numero > fim for verdadeira.
Isso impede que a contagem seja executada se o numero for menor ou igual ao fim (que seria o caso de uma contagem crescente).
Decremento (i -= passo):

Após cada iteração do laço, a variável i é decrementada pelo valor de passo. Assim, a contagem vai reduzindo conforme o valor definido para o passo (exemplo: de 2 em 2, 5 em 5, etc.).

*/

// Laço para contagem crescente
for (var i = numero; i <= fim && numero < fim; i += passo) {
    res.innerHTML += `${i} \u{1F449} ` // Emoji de mão apontando para o próximo número
}

// Laço para contagem decrescente
    for (var i = numero; i >= fim && numero > fim; i -= passo) {
        res.innerHTML += `${i} \u{1F449} `
    }

res.innerHTML += `\u{1F3C1}` // Emoji de bandeira para indicar o fim após o resultado

}