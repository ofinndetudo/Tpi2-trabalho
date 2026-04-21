class AlunoBolsista extends Aluno {
    constructor(
        nome: string,
        idade: number,
        matricula: string,
        public bolsa: number
    ){
        // Chama o construtor da classe pai (Aluno)
        super (nome, idade, matricula);
    }

   // 3. Sobrescrevendo o método apresentar
    apresentar(): string {
        // super.apresentar() chama a frase original e nós apenas adicionamos o resto
        return `${super.apresentar()} Além disso, possuo uma bolsa de R$ ${this.bolsa.toFixed(2)}.`;
    }
}

// Testando agora com os parâmetros certos:
const bolsista = new AlunoBolsista("Ana Oliveira", 21, "2024005", 1500.00);
console.log(bolsista.apresentar());
