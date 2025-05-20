import { Dulce } from "../models/Dulce";
import { Usuario } from "../models/Usuario";
import { Inventario } from "./impl/Inventario";

export interface IMaquina {

    inventario: Inventario;
    ingreso: number;

    venderDulce(codigo: string): void;
    mostrarVentas(usuario: Usuario): void;
    mostrarDulces(): void;
}