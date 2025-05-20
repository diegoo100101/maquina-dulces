import { Rol } from "../utils/Datos";

export class Usuario {
    private _nombre: string;
    private _rol: Rol;

    constructor(nombre: string, rol: Rol) {
        this._nombre = nombre;
        this._rol = rol;
    }

    get nombre() {
        return this._nombre;
    }

    get rol() {
        return this._rol;
    }
}