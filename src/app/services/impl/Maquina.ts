import { Dulce } from "../../models/Dulce";
import { ErrorNoExists, ErrorNoMoney, ErrorNoStock } from "../../models/Errores";
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

    venderDulce(codigo: string, pago: number): void {
        let dulce = this.inventario.obtenerDulce(codigo);
        
        if(!ErrorNoExists.existeDulce(dulce)) {
            ErrorNoExists.mostrarMensaje();
            return
        }

        if(!ErrorNoStock.existeStock(dulce)) {
            ErrorNoStock.mostrarMensaje();
            return
        }

        if(!ErrorNoMoney.esSaldoSuficiente(dulce, pago)) {
            ErrorNoMoney.mostrarMensaje();
            return
        }

        dulce?.aumentarVendidos();
        dulce?.restarCantidad();
        this.ingreso += dulce?.precio ? dulce.precio : 0;
        console.log('¡Venta exitosa!');
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