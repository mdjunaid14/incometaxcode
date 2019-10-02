export const calc = (sal, amt) => {
  //   console.log(typeof sal);
  // console.log(sal);
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

// age: 0,
//     basic_salary: 0,
//     epf: 0,
//     health_ins: 0,
//     home_interest: 0,
//     home_premium: 0,
//     hra: 0,
//     life_ins: 0,
//     ppf: 0,
//     tuition_fee: 0
