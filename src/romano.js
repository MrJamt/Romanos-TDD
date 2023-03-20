import romano_unidades from "./romano_unidades.js";
import romano_decimales from "./romano_decimales.js";
import romano_centenas from "./romano_centenas.js";

function romano(num)
{
  let numromano = "";
    let u = num % 10; //hallamos el numero de la unidad
    num = Math.floor(num/10);
    let d = num%10; //hallamos el numero de la decena
    num = Math.floor(num/10);
    let c = num%10; //hallamos el numero de la centena
    num = Math.floor(num/10);

    numromano += romano_centenas(c);
    numromano += romano_decimales(d);
    numromano += romano_unidades(u);

    return numromano;
}

export default romano;
