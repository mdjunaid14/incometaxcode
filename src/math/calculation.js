export const calc = (
  basic_salary,
  amt,
  age,
  nps,
  house_rent,
  hra,
  tuition_fee,
  girl_child,
  epf,
  ppf,
  life_ins,
  health_ins,
  home_interest,
  home_premium
) => {
  var sal = basic_salary;
  //   console.log(typeof sal);
  // console.log(sal);
  const std = 50000; //std deduction
  nps = 50000; //National Pension System
  var ssy = 0; //initialisation of Sukanya Samriddhi Yojana Bank Accounts Balance
  var fixed_deposit = 0; //initialisation of Fixed Deposits Balance

  var deductions = home_premium + life_ins + epf + ppf + tuition_fee;
  var deductible = 150000 - deductions;
  console.log(deductible, deductions);

  // deductions check
  if (deductible > 0) {
    if (girl_child > 0) {
      ssy = deductible; //ssy assignment
      deductible = 0;
    } else {
      ssy = 0;
    }
  } else if (deductible < 0) {
    deductible = 0;
    deductions = 150000;
  } else {
    fixed_deposit = deductible; //fixed_deposit assignment
  }

  // hra adjustment
  if (hra === 0) {
    if (house_rent < 60000) {
      hra = house_rent;
    } else if (house_rent > 60000) {
      hra = 60000;
    } else {
      hra = 0;
    }
  } else {
    hra = hra + 1 - 1;
  }

  // health_ins adjustment
  if (health_ins > 25000) {
    health_ins = 25000;
  } else {
    health_ins = health_ins - 1 + 1;
  }

  // home_interest adjustment
  if (home_interest > 200000) {
    home_interest = 200000;
  } else {
    home_interest = home_interest - 1 + 1;
  }

  const gen_deductions = health_ins + home_interest + hra;

  // if (deductions > 150000) {
  //   deductions = 150000;
  // }
  const final_deductions =
    std + nps + ssy + fixed_deposit + deductions + gen_deductions;
  console.log(std, nps, fixed_deposit, deductions, gen_deductions, deductible);

  sal -= final_deductions;
  console.log(sal);
  if (sal > 0) {
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
  } else if (sal <= 0) {
    return (amt = 0);
  } else {
    console.log("error");
    return (amt = 0);
  }
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

export const calculator = (sal, amt) => {
  var final_deductions = 0;
  sal -= final_deductions;
  if (sal > 0) {
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
  } else if (sal === 0) {
    return (amt = 0);
  } else {
    console.log("error");
    return (amt = 0);
  }
};
