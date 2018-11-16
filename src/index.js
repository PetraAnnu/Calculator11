function solveExpression() {
  var change = true;
  var operator = "";
  var priklad = document.getElementById("priklad").value;

  let left = 0;
  let right = 0;
  //KDY SI NABEREME TY HODNOTY DO PROMENNÝCH???
  //JAKTO ŽE TU NENI NEJAKY SCANNER NEBO NECO???

  for (let i = 0; i < priklad.length; i++) {
    if (priklad.charAt(i) == "+") {
      operator = "+";
      change = false;
    } else if (priklad.charAt(i) == "-") {
      operator = "-";
      change = false;
    } else if (priklad.charAt(i) == "*") {
      operator = "*";
      change = false;
    } else if (priklad.charAt(i) == "/") {
      operator = "/";
      change = false;
    } else {
      if (change) {
        //if change se rovna true tak delej tadada?
        left = left * 10 + parseInt(priklad.charAt(i));
      } else {
        //bez ty desitky cisla jen od 0 do 9
        right = right * 10 + parseInt(priklad.charAt(i));
      }
    }
  }

  var output = 0; //udelame si output a v dalsích fech ho naplnime

  if (operator === "+") {
    //šlo by tohle nějak přidat do toho prvního if+elsu
    output = left + right;
  } else if (operator === "-") {
    output = left - right;
  } else if (operator === "*") {
    output = left * right;
  } else if (operator === "/") {
    output = left / right;
  } else {
    output = Nan;
  }
  document.getElementById("result").value =
    left + " " + operator + " " + right + " = " + output;
}

var input = document.getElementById("priklad");

// spustí funkci, když uživatel zmáčkne Enter
input.addEventListener("keyup", function (event) {
  // zruší výchozí funkci klávesy, pokud nějaká existuje
  event.preventDefault();
  // 13 je hodnota klávesy Enter
  if (event.keyCode === 13) {
    solveExpression();
  }
});
