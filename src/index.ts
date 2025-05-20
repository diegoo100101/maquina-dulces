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

maquinaExpendedora.mostrarDulces()

maquinaExpendedora.venderDulce("snk", 30);
maquinaExpendedora.venderDulce("snk", 1);
maquinaExpendedora.venderDulce("maza", 5);
maquinaExpendedora.venderDulce("ppsi", 30);
maquinaExpendedora.venderDulce("ppsi", 5);

let usuarioAdmin: Usuario = new Usuario("Diego", "admin");
let usuarioNormal: Usuario = new Usuario("Vic", "normal");

maquinaExpendedora.mostrarVentas(usuarioAdmin)
maquinaExpendedora.mostrarVentas(usuarioNormal)