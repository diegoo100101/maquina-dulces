import { Dulce } from "./Dulce";

abstract class Error {
    static mostrarMensaje() : void {};
}

export class ErrorNoStock extends Error {
    static existeStock(dulce: Dulce | undefined ): boolean {
        return dulce !== undefined && dulce.cantidad > 0;
    }

    static mostrarMensaje(): void {
        console.log("No hay stock");
    }
    
}

export class ErrorNoMoney implements Error {
    static esSaldoSuficiente(dulce: Dulce | undefined, saldo: number): boolean {
        return dulce !== undefined && dulce.precio <= saldo;
    }

    static mostrarMensaje(): void {
        console.log("Dinero no suficiente");
    }
    
}

export class ErrorNoExists implements Error {
    static existeDulce(dulce: Dulce | undefined ): boolean {
        return dulce !== undefined ;
    }

    static mostrarMensaje(): void {
        console.log("El producto no existe");
    }

}