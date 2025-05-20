import { Dulce } from "./app/models/Dulce";
import { Usuario } from "./app/models/Usuario";
import { Inventario } from "./app/services/impl/Inventario";
import { Maquina } from "./app/services/impl/Maquina";

let sneakers = new Dulce("sneakers", "snk", 20, 60);
let mazapan = new Dulce("mazapan", "maza", 5, 50);
let refresco = new Dulce("pepsi", "ppsi", 20, 1);

let dulces: Dulce[] = [sneakers, mazapan, refresco];

let inventario: Inventario = new Inventario(dulces)
let maquinaExpendedora: Maquina = new Maquina(inventario);

// maquinaExpendedora.mostrarDulces()

maquinaExpendedora.venderDulce("ppsi", 30);
maquinaExpendedora.venderDulce("ppsi", 10);

// maquinaExpendedora.mostrarDulces()

let usuario: Usuario = new Usuario("Diego", "admin");

maquinaExpendedora.mostrarVentas(usuario)