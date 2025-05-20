import { Dulce } from "../../models/Dulce";
import { InformacionDulces } from "../../utils/InformacionDulce";
import { IInventario } from "../IInventario";

export class Inventario implements IInventario {

    public dulces: Dulce[];

    constructor(dulces: Dulce[]) {
        this.dulces = dulces;
    }

    public obtenerDulce(codigo: string): Dulce | undefined{
        return this.dulces.find(item => item.codigo === codigo);
    }

    public mostrarDulces(): void {
        this.dulces.forEach(item => InformacionDulces.imprimirInformacionDulce(item));
    }
}