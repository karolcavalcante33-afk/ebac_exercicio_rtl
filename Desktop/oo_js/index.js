// ================================
// Classe base (abstração)
// ================================
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        console.log(`${this.modelo} está ligado.`);
    }
}

// ================================
// Classe herdeira - Carro
// ================================
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    info() {
        console.log(
            `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Portas: ${this.portas}`
        );
    }
}

// ================================
// Classe herdeira - Moto
// ================================
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    info() {
        console.log(
            `Moto: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}`
        );
    }
}

// ================================
// Instâncias (objetos)
// ================================
const carro1 = new Carro("Toyota", "Corolla", 2022, 4);
const moto1 = new Moto("Honda", "CG 160", 2021, 160);
const moto2 = new Moto("Yamaha", "MT-03", 2023, 321);

// ================================
// Testes
// ================================
carro1.ligar();
carro1.info();

moto1.ligar();
moto1.info();

moto2.ligar();
moto2.info();
