function romano(num)
{
  if(num<10)
  {
    let u = num % 10;
    num = num/10;
    
    switch(u) {
      case 1: return "I";
      case 2: return "II";
      case 3: return "III";
      case 4: return "IV";
      case 5: return "V";
      case 6: return "VI";
      case 7: return "VII";
      case 8: return "VIII";
      case 9: return "IX";
    }
  }
  else
  {
    switch(num)
    {
    case 10:  return "X";
    case 50:  return "L";
    case 100: return "C";
    }
  }
}

export default romano;
