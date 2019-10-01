export const calc = (sal, amt) => {
  //   console.log(typeof sal);
  sal -= 50000; //std deduction
  if (sal > 250000) {
    if (sal > 500000) {
      if (sal > 1000000) {
        sal -= 1000000;
        amt = 112500 + sal * 0.3;
      } else if (sal <= 1000000) {
        sal -= 500000;
        amt = 12500 + sal * 0.2;
      } else {
        console.log("error");
      }
    } else if (sal <= 500000) {
      sal -= 250000;
      amt = sal * 0.05;
    } else {
      console.log("error");
    }
  } else if (sal <= 250000) {
    amt = 0;
  } else {
    console.log("error");
  }
  return amt;
};
