function iniciar() {
    var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
      alert(nombre);  // Usa una variable declarada en la función externa.
    }
    mostrarNombre();
  }

  iniciar();

  function creaFunc() {
    var nombre = "Mozilla";
    function muestraNombre() {
      alert(nombre);
    }
    return muestraNombre;
  }
  
  var miFunc = creaFunc();
  miFunc();

  /*En este ejemplo miFunc es un closure que incorpora tanto la función muestraNombre
  como el string "Mozilla" que existían cuando se creó el closure.*/

  function creaSumador(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var suma5 = creaSumador(5);
  var suma10 = creaSumador(10);
  
  console.log(suma5(2));  // muestra 7
  console.log(suma10(2)); // muestra 12 

  /*En esencia, creaSumador es una fábrica de función: crea funciones que pueden sumar un valor específico a su argumento.
  En el ejemplo anterior utilizamos nuestra fábrica de función para crear dos nuevas funciones: una que agrega 5 a su argumento
  y otra que agrega 10.*/

  let person = {
      name: "Sub",
  }

  let person2 = person;

  person2.name = "vaca";

  var Counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }
  })();
  
  alert(Counter.value()); /* Muestra 0 */
  Counter.increment();
  Counter.increment();
  alert(Counter.value()); /* Muestra 2 */
  Counter.decrement();
  alert(Counter.value()); /* Muestra 1 */ 

  //Acá se retornan 3 closures increment, decrement y value, no se puede acceder a privateCounter o a changeBy si no es a travez
  // de estos closures

  

