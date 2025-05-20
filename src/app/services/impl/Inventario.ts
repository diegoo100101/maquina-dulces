import { Dulce } from "../../models/Dulce";
import { InformacionDulces } from "../../utils/InformacionDulce";
import { IInventario } from "../IInventario";

export class Inventario implements IInventario {

    dulces: Dulce[];

    constructor(dulces: Dulce[]) {
        this.dulces = dulces;
    }

    obtenerDulce(codigo: string): Dulce | undefined{
        return this.dulces.find(item => item.codigo === codigo);
    }

    mostrarDulces(): void {
        this.dulces.forEach(item => InformacionDulces.imprimirInformacionDulce(item));
    }
}