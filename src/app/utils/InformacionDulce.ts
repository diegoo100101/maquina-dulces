import { Dulce } from "../models/Dulce";

export class InformacionDulces {
    static imprimirInformacionDulce(dulce: Dulce): void {
        console.log(`Código: ${dulce.codigo}\nNombre: ${dulce.nombre}\nPrecio: ${dulce.precio}\nCantidad: ${dulce.cantidad}`);
    }
}