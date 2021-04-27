/**import { Figura } from './figura';
import {  FiguraGeometrica } from './figuraGeometrica';*/

/**INTERFACE */
interface FiguraGeometrica {
    calcularPerimetro(): number;
    calcularArea(): number;
    calcularVolumen(): number;
}


/**CUADRADO extends Figura  *******************************************************************/
class Cuadrado implements FiguraGeometrica {
    nombre: string;
    cantidadLados: number

    constructor(public lado: number) {
        //nombre: string, cantidadLados: number,  super(nombre, cantidadLados);
        this.nombre = "Cuadrado";
        this.cantidadLados = 4;
    }

    calcularArea(): number {
        return this.lado **2;
    }

    calcularPerimetro(): number {
        return this.lado*this.cantidadLados;
    }

    calcularVolumen(): number {
        return 0;
    }

    public imprimirInfo() {
        return `Nombre de la Figura: ${this.nombre} , posee: ${this.cantidadLados} lado(s)`;
    }
}
let c1 = new Cuadrado(9);
console.log(c1.imprimirInfo(), "|  Área: ", c1.calcularArea(),
    ", Perímetro: ", c1.calcularPerimetro(),
    ", Volumen: ", c1.calcularVolumen());



/**RECTÁNGULO extends Figura  *******************************************************************/
class Rectangulo implements FiguraGeometrica {
    nombre: string;
    cantidadLados: number

    constructor(public ladoA: number, public ladoB: number) {
        this.nombre = "Rectángulo";
        this.cantidadLados = 4;
    }

    calcularArea(): number {
        return this.ladoA * this.ladoB;
    }

    calcularPerimetro(): number {
        return this.ladoA * 2 + this.ladoB * 2;
    }

    calcularVolumen(): number {
        return 0;
    }

    public imprimirInfo() {
        return `Nombre de la Figura: ${this.nombre} , posee: ${this.cantidadLados} lado(s)`;
    }
}
let r1 = new Rectangulo(9, 3);
console.log(r1.imprimirInfo(), "|  Área: ", r1.calcularArea(),
    ", Perímetro: ", r1.calcularPerimetro(),
    ", Volumen: ", r1.calcularVolumen());


/**TRIÁNGULO extends Figura  *******************************************************************/
class Triangulo implements FiguraGeometrica {
    nombre: string;
    cantidadLados: number

    constructor(public b: number, public h: number) {
        this.nombre = "Triángulo";
        this.cantidadLados = 3;
    }

    calcularArea(): number {
        return (this.b * this.h) / 2;
    }

    calcularPerimetro(): number {
        return this.b * this.h * this.cantidadLados;
    }

    calcularVolumen(): number {
        return 0;
    }

    public imprimirInfo() {
        return `Nombre de la Figura: ${this.nombre} , posee: ${this.cantidadLados} lado(s)`;
    }
}
let t1 = new Triangulo(9, 3);
console.log(t1.imprimirInfo(), "|  Área: ", t1.calcularArea(),
    ", Perímetro: ", t1.calcularPerimetro(),
    ", Volumen: ", t1.calcularVolumen());


/**CÍRCULO extends Figura  *******************************************************************/
class Circulo implements FiguraGeometrica {
    nombre: string;
    cantidadLados: number

    constructor(public r: number) {
        this.nombre = "Círculo";
        this.cantidadLados = 1;
    }

    calcularArea(): number {
        return Math.PI * (this.r ** 2);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.r;
    }

    calcularVolumen(): number {
        return 0;
    }

    public imprimirInfo() {
        return `Nombre de la Figura: ${this.nombre} , posee: ${this.cantidadLados} lado(s)`;
    }
}
let cir1 = new Circulo(9);
console.log(cir1.imprimirInfo(), "|  Área: ", cir1.calcularArea(),
    ", Perímetro: ", cir1.calcularPerimetro(),
    ", Volumen: ", cir1.calcularVolumen());


/**CONO extends Figura  *******************************************************************/
class Cono implements FiguraGeometrica {
    nombre: string;
    cantidadLados: number

    constructor(public r: number, public h: number, public inclinada: number) {
        this.nombre = "Cono";
        this.cantidadLados = 2;
    }

    calcularArea(): number {
        return Math.PI * this.r * (this.r + this.inclinada);
    }

    calcularPerimetro(): number {
        return null;
    }

    calcularVolumen(): number {
        return (Math.PI * this.h * (this.r ** 2)) / 3;
    }

    public imprimirInfo() {
        return `Nombre de la Figura: ${this.nombre} , posee: ${this.cantidadLados} lado(s)`;
    }
}
let cono = new Cono(9, 15, 17);
console.log(cono.imprimirInfo(), "|  Área: ", cono.calcularArea(),
    ", Perímetro: ", cono.calcularPerimetro(),
    ", Volumen: ", cono.calcularVolumen());

/**ESFERA extends Figura  *******************************************************************/
class Esfera implements FiguraGeometrica {
    nombre: string;
    cantidadLados: number

    constructor(public r: number) {
        this.nombre = "Esfera";
        this.cantidadLados = 1;
    }

    calcularArea(): number {
        return (4 * Math.PI * (this.r **2));
    }

    calcularPerimetro(): number {
        return null;
    }

    calcularVolumen(): number {
        return  (4/3) * Math.PI * (this.r **3);
    }

    public imprimirInfo() {
        return `Nombre de la Figura: ${this.nombre} , posee: ${this.cantidadLados} lado(s)`;
    }
}
let esf = new Esfera(9);
console.log(esf.imprimirInfo(), "|  Área: ", esf.calcularArea(),
    ", Perímetro: ", esf.calcularPerimetro(),
    ", Volumen: ", esf.calcularVolumen());

/**CILINDRO extends Figura  *******************************************************************/
class Cilindro implements FiguraGeometrica {
    nombre: string;
    cantidadLados: number

    constructor(public r: number, public h: number) {
        this.nombre = "Cilindro";
        this.cantidadLados = 2;
    }

    calcularArea(): number {
        return (2 * Math.PI * this.r) * (this.h + this.r);
    }

    calcularPerimetro(): number {
        return null;
    }

    calcularVolumen(): number {
        return  Math.PI * (this.r**2) * this.h;
    }

    public imprimirInfo() {
        return `Nombre de la Figura: ${this.nombre} , posee: ${this.cantidadLados} lado(s)`;
    }
}
let cil = new Cilindro(9, 20);
console.log(cil.imprimirInfo(), "|  Área: ", cil.calcularArea(),
    ", Perímetro: ", cil.calcularPerimetro(),
    ", Volumen: ", cil.calcularVolumen());


/**SUPERCLASE */
// class Figura {
//     protected nombre: string;
//     protected cantidadLados: number;

//     constructor(nombre: string, cantidadLados: number){
//         this.nombre = nombre;
//         this.cantidadLados = cantidadLados;
//     }

//     public imprimir(){
//         return `Nombre de la Figura: ${this.nombre} , posee: ${this.cantidadLados} lado(s)`;
//     }
// }

