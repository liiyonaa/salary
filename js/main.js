let fullName=document.querySelector("input#name");
let s=document.querySelector("select#degree");
let Tax=document.querySelector("input#Tax");
let hours=document.querySelector("input#hours");
let submit=document.querySelector("button");
let pure;
let taxsalary;
let salary;
let d = 0;
s.addEventListener("change", function () {
  if (s != undefined) {
    d = s.value;
  }
});
submit.addEventListener("click", function () {
  h = Number(hours.value);
  c = Number(Tax.value);
  if (d == 1) {
    pure = h * 50;
    taxsalary = pure * (c / 100);
    salary = pure - taxsalary;
  } else if (d == 2) {
    pure = h * 80;
    taxsalary = pure * (c / 100);
    salary = pure - taxsalary;
  } else if (d == 3) {
    pure = h * 100;
    taxsalary = pure * (c / 100);
    salary = pure - taxsalary;
  } else if (d == 4) {
    pure = h * 150;
    taxsalary = pure * (c / 100);
    salary = pure - taxsalary;
  } else {
    console.log("error");
  }
  document.querySelector("h1#Fullname").innerHTML = `<p>Your Fullname:</p>
    ${fullName.value}`;
  document.querySelector("h1#salary").innerHTML = `<p>Your Final Pay:</p>
    ${salary} <span> $ </span>`;
});


/*

if(degree="Diploma"){
    pure=hour*50000
    taxsalary=pure*(tax/100)
    salary=pure-taxsalary
    console.log(salary);
}else if(degree="BA"){
    pure=hour*80000
    taxsalary=pure*(tax/100)
    salary=pure-taxsalary
    console.log(salary);
}else if(degree="MA"){
    pure=hour*100000
    taxsalary=pure*(tax/100)
    salary=pure-taxsalary
    console.log(salary);
}else if(degree="PHD"){
    pure=hour*150000
    taxsalary=pure*(tax/100)
    salary=pure-taxsalary
    console.log(salary);
}else{
    console.log("error");
}

/*
submit.addEventListener("click",function(){
    

    document.querySelector("button.Name").innerHTML=FullName.value
    document.querySelector("button.degree").innerHTML=select.value
})
if(degree="Diploma"){
    pure=hour*50000
    taxsalary=pure*(tax/100)
    salary=pure-taxsalary
    console.log(salary);
}else if(degree="BA"){
    pure=hour*80000
    taxsalary=pure*(tax/100)
    salary=pure-taxsalary
    console.log(salary);
}else if(degree="MA"){
    pure=hour*100000
    taxsalary=pure*(tax/100)
    salary=pure-taxsalary
    console.log(salary);
}else if(degree="PHD"){
    pure=hour*150000
    taxsalary=pure*(tax/100)
    salary=pure-taxsalary
    console.log(salary);
}else{
    console.log("error");
}
function calcsalary(){
    let Name=document.getElementById("name").value;
    let degree=document.getElementById("degree").value;
    let hour=Number(document.getElementById("hour").value);
    let tax=Number(document.getElementById("tax").value);

    let baseslary =20;

    let dm = 1;
    if( degree ==="Diploma"){
        dm=1.1;

    }else if(degree ==="BA"){
        dm=1.2;

    }
    else if(degree ==="MA"){
        dm=1.5;

    }
    else if(degree ==="PHD"){
        dm=2;

    }
    let grossSalary = baseslary * hour * dm;

    let taxsalary =(tax/100)*grossSalary;
    let endsalary =grossSalary - taxsalary;
    document.getElementById("result").innerText=  endsalary 
}







*/
