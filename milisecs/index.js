function past(h, m, s){
    const seconds = s * 1000;
    const minutes  = m * 60 * 1000;
    const hours = h * 60 * 60 *  1000;
    const result = seconds + minutes + hours;
    return result;
}

  console.log(past(0, 1, 1));
  console.log(past(3, 15, 1));
  console.log(past(0, 1, 1));
  console.log(past(0, 1, 1));
  