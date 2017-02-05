function range(a, b, step) {
  var arr = [];
  
  if (step) {
    for(var i = a; i <= b; i+=step) {
      arr.push(i);
    } 
  } else {
    for(var i = a; i <= b; i++) {
      arr.push(i);
    }
  };
  
  return arr;
}