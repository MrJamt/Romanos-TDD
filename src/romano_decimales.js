function romano_decimales(d)
{
  let romDecimales = "";
  switch(d)
  {
    case 1:  romDecimales += "X"; break;
    case 2:  romDecimales += "XX"; break;
    case 3:  romDecimales += "XXX"; break;
    case 4:  romDecimales += "XL"; break;
    case 5:  romDecimales += "L"; break;
    case 6:  romDecimales += "LX"; break;
    case 7:  romDecimales += "LXX"; break;
    case 8:  romDecimales += "LXXX"; break;
    case 9:  romDecimales += "XC"; break;
  
  }
    return romDecimales;
}

export default romano_decimales;
