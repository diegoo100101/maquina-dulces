import { Dulce } from "./app/models/Dulce";
import { Usuario } from "./app/models/Usuario";
import { Inventario } from "./app/services/impl/Inventario";
import { Maquina } from "./app/services/impl/Maquina";

let sneakers = new Dulce("sneakers", "snk", 20, 60);
let mazapan = new Dulce("mazapan", "maza", 5, 1);
let refresco = new Dulce("pepsi", "ppsi", 20, 1);

let dulces: Dulce[] = [sneakers, mazapan, refresco];

let inventario: Inventario = new Inventario(dulces)
let maquinaExpendedora: Maquina = new Maquina(inventario);

maquinaExpendedora.mostrarDulces()

// Venta normal y exitosa
maquinaExpendedora.venderDulce("snk", 30);

// Venta con saldo insuficiente
maquinaExpendedora.venderDulce("snk", 1);

// Venta con stock agotado
maquinaExpendedora.venderDulce("maza", 5);
maquinaExpendedora.venderDulce("maza", 5);

// Venta de producto inexistente
maquinaExpendedora.venderDulce("aaa", 5);

let usuarioAdmin: Usuario = new Usuario("Diego", "admin");
let usuarioNormal: Usuario = new Usuario("Vic", "normal");

// Ver ingresos y ventas de cada producto siendo admin
maquinaExpendedora.mostrarVentas(usuarioAdmin)

// Ver ingresos y ventas de cada producto siendo usuario normal
maquinaExpendedora.mostrarVentas(usuarioNormal)