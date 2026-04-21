class Professor{
    nomeProfessor: string;
    diciplina: string;

    //método construtor
    constructor(nomeProfessor: string,diciplina: string){
        this.nomeProfessor = nomeProfessor;
        this.diciplina = diciplina;
    }

    //método ensinar
    ensinar(): string{
        return `Meu nome é ${this.nomeProfessor}, sou professor da matéria ${this.ensinar}.`;
    }
}

//objeto a partir da classe
    let professor1 = new Professor ("Julia", "Tecnologia para internet");
    let professor2 = new Professor ("Felipe", "Industria 4.0");

    //usando o método 
    console.log(professor1.ensinar());
    console.log(professor2.ensinar());
