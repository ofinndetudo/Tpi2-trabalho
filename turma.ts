class Aluno {
    constructor(public nome: string, public nota: number) {}

    apresentar(): string {
        return `Olá, eu sou ${this.nome} e minha nota é ${this.nota}.`;
    }
}

class Turma {
    private alunos: Aluno[] = [];

    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
        console.log(`Aluno ${aluno.nome} adicionado com sucesso!`);
    }

    calcularMedia(): number {
        if (this.alunos.length === 0) return 0;
        
        const soma = this.alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
        return soma / this.alunos.length;
    }
}

// Testando:
const minhaTurma = new Turma();
minhaTurma.adicionarAluno(new Aluno("Felicia", 9.5));
minhaTurma.adicionarAluno(new Aluno("Marcos", 7.0));
console.log(`Média da turma: ${minhaTurma.calcularMedia()}`);
