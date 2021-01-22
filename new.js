function longest_string(str_ara) {
    var max = str_ara[0].length;
    str_ara.map(v => max = Math.max(max, v.length));
    result = str_ara.filter(v => v.length == max);
    return result;
  }
  
  var result1 = longest_string(['abul karim', 'munna', 'aaa', 'aaaaa', 'karim abul'])
  
  console.log(result1[0])