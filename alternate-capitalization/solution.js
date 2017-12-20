function capitalize(s){
  let str = s.split('');
  let even = str.map((chr, index) =>{
    if (index % 2 === 0){
      return chr.toUpperCase();
    }else{
      return chr;
    }
  })
    let odd = str.map((chr, index) =>{
    if (index % 2 !== 0){
      return chr.toUpperCase();
    }else{
      return chr;
    }
  })
  return [even.join(''), odd.join('')];
};