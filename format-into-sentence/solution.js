function formatWords(words){
    if (words === null || words.length === 0) return '';
      
     words = words.filter(n => n != '');
     
    if (words.length <= 1) return words.join('');
    
    return words.slice(0, -1).join(', ') + ' and ' + words.slice(-1);
  }