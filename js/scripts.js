function range(a, b, step) {
  var arr = [];
  
  if (step && step > 0) {
    for(var i = a; i <= b; i+=step) {
      arr.push(i);
    }
  } else if (step && step < 0) {
    for(var i = a; i >= b; i+=step) {
      arr.push(i);
    }
  } else {
    for(var i = a; i <= b; i++) {
      arr.push(i);
    }
  };
  
  return arr;
}