export class Dulce {
    private _codigo: string;
    private _nombre: string;
    private _precio: number;
    private _cantidad: number;
    private _cantidadVendidos: number = 0;

    constructor(nombre: string, codigo: string, precio: number, cantidad: number) {
        this._nombre = nombre;
        this._codigo = codigo;
        this._precio = precio;
        this._cantidad = cantidad;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(cantidad: number) {
        this._cantidad = cantidad;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    get codigo() {
        return this._codigo;
    }

    get cantidadVendidos() {
        return this._cantidadVendidos;
    }

    public restarCantidad() {
        this._cantidad --;
    }

    public aumentarVendidos() {
        this._cantidadVendidos ++;
    }
}