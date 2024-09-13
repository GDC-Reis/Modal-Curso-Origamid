// Crie uma função que verifique corretamente o tipo de dado

function verificaTipo(tipo) {
    return Object.prototype.toString.call(tipo);
}

// Crie um objeto quadrado com a propriedade lados e torne ela imutável

const quadrado = {};

Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true, 
    }
});

// Previna qualquer mudança no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
};

Object.freeze(configuracao)
  
// Liste o nome de todas as propriedades do protótipo de String e Array  
Object.getOwnPropertyDescriptors(String.prototype);
Object.getOwnPropertyDescriptor(Array.prototype);