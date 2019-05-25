var Test = Test || {};
var miTest = {
                "titulo": "Test de conocimiento de JavaScript",
                "preguntas": [{
                    "pregunta": "- ¿En qué lugar se ejecuta generalmente el código JavaScript?",
                    "respuestas": ["Servidor", "Cliente", "Computadora personal"],
                    "correctas": 1
                    },
                    {
                    "pregunta": "- ¿Cuáles de estas son marcas para la inserción del código JavaScript en las páginas HTML?",
                    "respuestas": ["< javascript _code > y < /javascript_code >", "< script > y < /script >", "< ?script > y < script? >"],
                    "correctas": 1  
                    },
                    {
                    "pregunta": "- La llamada al código Javascript debe colocarse en:",
                    "respuestas": ["La sección Body de la página", "Antes de la etiqueta HTML", "Puede colocarse en la sección Head o en Body"],
                    "correctas": 2      
                    },
                    {
                    "pregunta": "- En JavaScript, para darle el nombre a una variable, objeto o función, debemos tener en cuenta que:",
                    "respuestas": ["No se pueden usar mayúsculas", "JavaScript no distingue entre mayúsculas y minúsculas", "JavaScript diferencia entre mayúsculas y minúsculas"],
                    "correctas": 2      
                    },
                    {
                    "pregunta": "-¿Cuál es la instrucción usada para devolver un valor en una función de JavaScript?",
                    "respuestas": ["Send", "Return", "Value"],
                    "correctas": 1      
                    },
                    {
                    "pregunta": "Para terminar las instrucciones en Javascript se utiliza:",
                    "respuestas": ["Un punto y coma", "Un punto y coma o un salto de línea", "La sentencia End."],
                    "correctas": 1      
                    },
                    {
                    "pregunta": "- ¿Cuál de estas instrucciones está correctamente escrita en Javascript?",
                    "respuestas": ["if (a==0) alert (a);", "if (a=0) print a;", "if (a==0) { print [a] }"],
                    "correctas": 0      
                    },
                    {
                    "pregunta": "- Para concatenar cadenas de caracteres en Javascript se usa el carácter:",
                    "respuestas": ["& (ampersand)", "+ (más)", ". (punto)"],
                    "correctas": 1      
                    },
                    {
                    "pregunta": "- ¿Es posible hacer que se ejecute un formulario por JavaScript?",
                    "respuestas": ["No, esa función sólo puede realizarse mediante código PHP, y se ha de realizar por tanto en el servidor.", "Sí, de hecho los formularios se crean con código Javascript, por lo que es el propio Javascript el que los ejecuta.", "Sí, por ejemplo basta con pasarle a una función Javascript el identificador del formulario, y aplicarle el comando “submit” para ejecutar ese formulario"],
                    "correctas": 2      
                    },
                    {
                    "pregunta": "- ¿Todo el código JavaScript debe estar por fuerza dentro del archivo .html de la página web?",
                    "respuestas": ["No, es posible incluir código JavaScript en ficheros de extensión .js y hacer un “include” en la sección HEAD de la página HTML", "Sí, porque si no, no se podría ejecutar en el navegador", "No, tambien es posible agregar el codigo Javascript en los archivos externos de estilos (.css)"],
                    "correctas": 0      
                    }          
                ],
                "cantidadAPreguntar": 5,
                "tiempoDeTrabajo": 30
            }
Test.armar = function(cont){
    window.addEventListener("DOMContentLoaded", function(){
        var contenedor,
            tiempo,
            n=1,
            tmpDisponible;
        contenedor = document.getElementById(cont);
        alert("Tenés "+miTest.tiempoDeTrabajo+' segundos para resolver el test');
        tiempo = document.getElementById('tiempo');
        tmpDisponible = setInterval(function(){
            tiempo.innerHTML = 'Tiempo: '+n;
            n++;
            if(n > miTest.tiempoDeTrabajo){
                clearInterval(tmpDisponible);
                var event = new Event('submit',{
                    'bubbles': true,
                    'cancelable': true
                });
                document.getElementById('form').dispatchEvent(event);
            }
        },1000);
        
        document.getElementById('form').addEventListener.onsubmit = Test.cantidadAciertos;
        document.getElementById('form').addEventListener('submit',function(e){
            e.preventDefault;
            var preguntas = miTest.preguntas,
                rtaCorrecta,
                opcionElegida,
                clasePregunta,
                aciertos = 0;
            
            e.preventDefault();
            for (var i = 0; i < miTest.cantidadAPreguntar; i++){
                clasePregunta = 'pregunta'+i;
                opcionElegida = document.getElementsByClassName('clasePregunta');
                rtaCorrecta = preguntas[i].correctas;
                for (var j = 0; j < rtaCorrecta.length; j++){
                    if (opcionElegida[rtaCorrecta[j]].checked){
                        aciertos++;
                    }
                }
            }
            clearInterval(tmpDisponible);
            ///////////////////////////////////////////////////////////////////////////
            var resul = document.getElementById('resultado');
            resul.classList.add("resultados");
            resul.innerHTML = aciertos +' respuestas correctas de un total de '+ miTest.cantidadAPreguntar;
            document.getElementById('enviar').disabled = true;
            //////////////////////////////////////////////////////////////////////////
           /*
            alert(aciertos +' respuestas correctas de un total de '+ miTest.cantidadAPreguntar);
            document.getElementById('enviar').disabled = true;
            */
        });
        contenedor.appendChild(Test.preguntas(miTest));
    });
}

//Define un array con numeros aleatorios que no se repiten que serán utilizados como indices para elegir las preguntas que se mostrarán por pantalla.
Test.generarAleatorios = function(cantidadNumeros,rango){
  var indicesAleatorios = [];
  while (indicesAleatorios.length < cantidadNumeros){
    var numeroAleatorio = Math.round(Math.random()*(rango));
    var existe = false;
    for(var i = 0; i< indicesAleatorios.length; i++){
  	   if(indicesAleatorios[i] == numeroAleatorio){
          existe = true;
          break;
      }
    }
    if(!existe){
      indicesAleatorios[indicesAleatorios.length] = numeroAleatorio;
    }
  }
  return indicesAleatorios;
}

Test.preguntas = function(miTest){
  var titulo,
      preguntas,
      cantPreguntas,
      tiempo,
      input,
      aleatorio;
    
  document.getElementById("titulo").innerText = miTest.titulo;
  formulario = document.getElementById("form");
  preguntas = miTest.preguntas;
  cantPreguntas = miTest.cantidadAPreguntar;

  if(cantPreguntas <= preguntas.length){
    aleatorio = Test.generarAleatorios(cantPreguntas,(preguntas.length-1));

    for (var i = 0; i < aleatorio.length; i++) {
      input = document.createElement('label');
      input.classList.add("tituloPregunta");
      input.innerHTML = preguntas[aleatorio[i]].pregunta + '<br>';
      formulario.insertBefore(input,document.getElementById("enviar"));

        for (var j = 0; j < preguntas[aleatorio[i]].respuestas.length; j++){
            input = document.createElement('label');
            input.innerHTML = '<input type="checkbox" name="pregunta'+i+'[]" class="pregunta'+i+'">'+ preguntas[aleatorio[i]].respuestas[j] +'<br>';
            formulario.insertBefore(input,document.getElementById("enviar"));
        };
    }
  }
    return formulario;
}
