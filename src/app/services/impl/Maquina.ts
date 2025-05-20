import { Dulce } from "../../models/Dulce";
import { Usuario } from "../../models/Usuario";
import { InformacionDulces } from "../../utils/InformacionDulce";
import { IMaquina } from "../IMaquina";
import { Inventario } from "./Inventario";

export class Maquina implements IMaquina {

    inventario: Inventario;
    ingreso: number = 0;

    constructor(inventario: Inventario) {
        this.inventario = inventario;
    }

    venderDulce(codigo: string): void {
        let dulce = this.inventario.obtenerDulce(codigo);
        if (dulce && dulce.cantidad > 0) {
            dulce.aumentarVendidos();
            dulce.restarCantidad();
            this.ingreso += dulce?.precio ? dulce.precio : 0;
        } else {
            console.log("No hay stock o el artículo no existe");
        }
    }

    mostrarVentas(usuario: Usuario): void {
        if (this.esUsuarioAdmin(usuario)) {
            console.log(`Ingreso total: $${this.ingreso}`);
            this.inventario.dulces.forEach(item => console.log(`Dulce: ${item.nombre} Cantidad vendidos: ${item.cantidadVendidos}`))
        } else {
            console.log(`Permiso denegado`);
        }
    }

    private esUsuarioAdmin(usuario: Usuario): boolean {
        return usuario.rol === 'admin';
    }

    mostrarDulces(): void {
        this.inventario.mostrarDulces();
    }

}