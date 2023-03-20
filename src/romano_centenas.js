function romano_centenas(c)
{
  let romCentenas = "";
    switch(c)
    {
      
      case 1: romCentenas += "C"; break;
      case 2: romCentenas += "CC"; break;
      case 3: romCentenas += "CCC"; break;
      case 4: romCentenas += "CD"; break;
      case 5: romCentenas += "D"; break;
      case 6: romCentenas += "DC"; break;
      case 7: romCentenas += "DCC"; break;
      case 8: romCentenas += "DCCC"; break;
      case 9: romCentenas += "CM"; break;
    }
    return romCentenas;
}

export default romano_centenas;
