class Livro {
    constructor(public titulo: string, public autor: string) {}
}

class Biblioteca {
    private acervo: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.acervo.push(livro);
    }

    listarLivros(): void {
        console.log("--- Acervo da Biblioteca ---");
        this.acervo.forEach(livro => {
            console.log(`Título: ${livro.titulo} | Autor: ${livro.autor}`);
        });
    }
}

// Testando:
const minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivro(new Livro("Clean Code", "Robert C. Martin"));
minhaBiblioteca.adicionarLivro(new Livro("TypeScript Essentials", "Christopher Nance"));

minhaBiblioteca.listarLivros();
