function romano(num)
{
  let numromano = "";
  if(num==100)
    return "C";
  else{
    let u = num % 10;
    num = Math.floor(num/10);
    let d = num%10;
    num = Math.floor(num/10);
    switch(d)
    {
      case 1:  numromano += "X"; break;
      case 2:  numromano += "XX"; break;
      case 3:  numromano += "XXX"; break;
      case 4:  numromano += "XL"; break;
      case 5:  numromano += "L"; break;
      case 6:  numromano += "LX"; break;
      case 7:  numromano += "LXX"; break;
      case 8:  numromano += "LXXX"; break;
      case 9:  numromano += "XC"; break;
    }
    switch(u) {
      case 1: numromano += "I"; break;
      case 2: numromano += "II"; break;
      case 3: numromano += "III"; break;
      case 4: numromano += "IV"; break;
      case 5: numromano += "V"; break;
      case 6: numromano += "VI"; break;
      case 7: numromano += "VII"; break;
      case 8: numromano += "VIII"; break;
      case 9: numromano += "IX"; break;
    }

    return numromano;
  }
}

export default romano;
