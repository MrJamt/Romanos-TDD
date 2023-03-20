function romano_unidades(u)
{
  let romUnidades = "";
    switch(u)
    {
      
      case 1: romUnidades += "I"; break;
      case 2: romUnidades += "II"; break;
      case 3: romUnidades += "III"; break;
      case 4: romUnidades += "IV"; break;
      case 5: romUnidades += "V"; break;
      case 6: romUnidades += "VI"; break;
      case 7: romUnidades += "VII"; break;
      case 8: romUnidades += "VIII"; break;
      case 9: romUnidades += "IX"; break;
    }
    return romUnidades;
}

export default romano_unidades;
