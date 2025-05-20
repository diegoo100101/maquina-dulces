import { Dulce } from "../../models/Dulce";
import { ErrorNoExists, ErrorNoMoney, ErrorNoStock, ErrorNoUserAdmin } from "../../models/Errores";
import { Usuario } from "../../models/Usuario";
import { InformacionDulces } from "../../utils/InformacionDulce";
import { IMaquina } from "../IMaquina";
import { Inventario } from "./Inventario";

export class Maquina implements IMaquina {

    public inventario: Inventario;
    public ingreso: number = 0;

    constructor(inventario: Inventario) {
        this.inventario = inventario;
    }

    public venderDulce(codigo: string, pago: number): void {
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

    public mostrarVentas(usuario: Usuario): void {
        if (!ErrorNoUserAdmin.esAdmin(usuario)) {
            ErrorNoUserAdmin.mostrarMensaje();
            return
        }

        console.log(`Ingreso total: $${this.ingreso}`);
        this.inventario.dulces.forEach(item => console.log(`Dulce: ${item.nombre} Cantidad vendidos: ${item.cantidadVendidos}`))
    }

    public mostrarDulces(): void {
        console.log('-------------------------------------')
        this.inventario.mostrarDulces();
        console.log('-------------------------------------')
    }

}