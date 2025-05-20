import { Dulce } from "../models/Dulce";

export interface IInventario {

    dulces: Dulce[];

    obtenerDulce(codigo: string): Dulce | undefined;
    mostrarDulces(): void;
}