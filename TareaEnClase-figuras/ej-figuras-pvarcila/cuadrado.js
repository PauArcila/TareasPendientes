/**import { Figura } from './figura';
import {  FiguraGeometrica } from './figuraGeometrica';*/
/**CUADRADO extends Figura  *******************************************************************/
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
        //nombre: string, cantidadLados: number,  super(nombre, cantidadLados);
        this.nombre = "Cuadrado";
        this.cantidadLados = 4;
    }
    Cuadrado.prototype.calcularArea = function () {
        return Math.pow(this.lado, 2);
    };
    Cuadrado.prototype.calcularPerimetro = function () {
        return this.lado * 4; //this.lado*this.cantidadLados;
    };
    Cuadrado.prototype.calcularVolumen = function () {
        return 0;
    };
    Cuadrado.prototype.imprimirInfo = function () {
        return "Nombre de la Figura: " + this.nombre + " , posee: " + this.cantidadLados + " lado(s)";
    };
    return Cuadrado;
}());
var c1 = new Cuadrado(9);
console.log(c1.imprimirInfo(), "|  Área: ", c1.calcularArea(), ", Perímetro: ", c1.calcularPerimetro(), ", Volumen: ", c1.calcularVolumen());
/**RECTÁNGULO extends Figura  *******************************************************************/
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ladoA, ladoB) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.nombre = "Rectángulo";
        this.cantidadLados = 4;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.ladoA * this.ladoB;
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        return this.ladoA * 2 + this.ladoB * 2;
    };
    Rectangulo.prototype.calcularVolumen = function () {
        return 0;
    };
    Rectangulo.prototype.imprimirInfo = function () {
        return "Nombre de la Figura: " + this.nombre + " , posee: " + this.cantidadLados + " lado(s)";
    };
    return Rectangulo;
}());
var r1 = new Rectangulo(9, 3);
console.log(r1.imprimirInfo(), "|  Área: ", r1.calcularArea(), ", Perímetro: ", r1.calcularPerimetro(), ", Volumen: ", r1.calcularVolumen());
/**TRIÁNGULO extends Figura  *******************************************************************/
var Triangulo = /** @class */ (function () {
    function Triangulo(b, h) {
        this.b = b;
        this.h = h;
        this.nombre = "Triángulo";
        this.cantidadLados = 3;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.b * this.h) / 2;
    };
    Triangulo.prototype.calcularPerimetro = function () {
        return this.b * this.h * this.cantidadLados;
    };
    Triangulo.prototype.calcularVolumen = function () {
        return 0;
    };
    Triangulo.prototype.imprimirInfo = function () {
        return "Nombre de la Figura: " + this.nombre + " , posee: " + this.cantidadLados + " lado(s)";
    };
    return Triangulo;
}());
var t1 = new Triangulo(9, 3);
console.log(t1.imprimirInfo(), "|  Área: ", t1.calcularArea(), ", Perímetro: ", t1.calcularPerimetro(), ", Volumen: ", t1.calcularVolumen());
/**CÍRCULO extends Figura  *******************************************************************/
var Circulo = /** @class */ (function () {
    function Circulo(r) {
        this.r = r;
        this.nombre = "Círculo";
        this.cantidadLados = 1;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * (Math.pow(this.r, 2));
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this.r;
    };
    Circulo.prototype.calcularVolumen = function () {
        return 0;
    };
    Circulo.prototype.imprimirInfo = function () {
        return "Nombre de la Figura: " + this.nombre + " , posee: " + this.cantidadLados + " lado(s)";
    };
    return Circulo;
}());
var cir1 = new Circulo(9);
console.log(cir1.imprimirInfo(), "|  Área: ", cir1.calcularArea(), ", Perímetro: ", cir1.calcularPerimetro(), ", Volumen: ", cir1.calcularVolumen());
/**CONO extends Figura  *******************************************************************/
var Cono = /** @class */ (function () {
    function Cono(r, h, inclinada) {
        this.r = r;
        this.h = h;
        this.inclinada = inclinada;
        this.nombre = "Cono";
        this.cantidadLados = 2;
    }
    Cono.prototype.calcularArea = function () {
        return Math.PI * this.r * (this.r + this.inclinada);
    };
    Cono.prototype.calcularPerimetro = function () {
        return null;
    };
    Cono.prototype.calcularVolumen = function () {
        return (Math.PI * this.h * (Math.pow(this.r, 2))) / 3;
    };
    Cono.prototype.imprimirInfo = function () {
        return "Nombre de la Figura: " + this.nombre + " , posee: " + this.cantidadLados + " lado(s)";
    };
    return Cono;
}());
var cono = new Cono(9, 15, 17);
console.log(cono.imprimirInfo(), "|  Área: ", cono.calcularArea(), ", Perímetro: ", cono.calcularPerimetro(), ", Volumen: ", cono.calcularVolumen());
/**ESFERA extends Figura  *******************************************************************/
var Esfera = /** @class */ (function () {
    function Esfera(r) {
        this.r = r;
        this.nombre = "Esfera";
        this.cantidadLados = 1;
    }
    Esfera.prototype.calcularArea = function () {
        return (4 * Math.PI * (Math.pow(this.r, 2)));
    };
    Esfera.prototype.calcularPerimetro = function () {
        return null;
    };
    Esfera.prototype.calcularVolumen = function () {
        return (4 / 3) * Math.PI * (Math.pow(this.r, 3));
    };
    Esfera.prototype.imprimirInfo = function () {
        return "Nombre de la Figura: " + this.nombre + " , posee: " + this.cantidadLados + " lado(s)";
    };
    return Esfera;
}());
var esf = new Esfera(9);
console.log(esf.imprimirInfo(), "|  Área: ", esf.calcularArea(), ", Perímetro: ", esf.calcularPerimetro(), ", Volumen: ", esf.calcularVolumen());
/**CILINDRO extends Figura  *******************************************************************/
var Cilindro = /** @class */ (function () {
    function Cilindro(r, h) {
        this.r = r;
        this.h = h;
        this.nombre = "Cilindro";
        this.cantidadLados = 2;
    }
    Cilindro.prototype.calcularArea = function () {
        return (2 * Math.PI * this.r) * (this.h + this.r);
    };
    Cilindro.prototype.calcularPerimetro = function () {
        return null;
    };
    Cilindro.prototype.calcularVolumen = function () {
        return Math.PI * (Math.pow(this.r, 2)) * this.h;
    };
    Cilindro.prototype.imprimirInfo = function () {
        return "Nombre de la Figura: " + this.nombre + " , posee: " + this.cantidadLados + " lado(s)";
    };
    return Cilindro;
}());
var cil = new Cilindro(9, 20);
console.log(cil.imprimirInfo(), "|  Área: ", cil.calcularArea(), ", Perímetro: ", cil.calcularPerimetro(), ", Volumen: ", cil.calcularVolumen());
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
