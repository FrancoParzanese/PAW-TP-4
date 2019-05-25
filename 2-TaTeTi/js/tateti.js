var nameJ1="";
var nameJ2="";

function pedirNombres(){
    var j1 = prompt("Introduzca el nombre del primer jugador:", "Jugador1");
    nameJ1 = j1;
    
    var j2 = prompt("Introduzca el nombre del segundo jugador:", "Jugador2");
    nameJ2 = j2;
    
    document.getElementById("victoriasJ1").innerHTML='<label>Victorias de '+ nameJ1+ ' </label>';
    document.getElementById("derrotasJ1").innerHTML= '<label>Derrotas de ' +nameJ1+ '</label>';
    document.getElementById("victoriasJ2").innerHTML='<label>Victorias de '+ nameJ2+ ' </label>';
    document.getElementById("derrotasJ2").innerHTML= '<label>Derrotas de ' +nameJ2+ '</label>';
}

function resetearPuntaje(){
    confirmar=confirm("¿Estas seguro de resetear el marcador?");
    victorias_j1 = document.getElementById("victorias_j1").value;
    victorias_j2 = document.getElementById("victorias_j2").value;
    empates = document.getElementById("empates").value;
    
    if(confirmar){			
        if(victorias_j1>0 || victorias_j2>0 || empates>0){
            if(victorias_j1 > victorias_j2){
                alert("Felicitaciones ha ganado el jugador: " + nameJ1 + ". Victorias: " + victorias_j1);
            }
            else if(victorias_j2 > victorias_j1){
                alert("Felicitaciones ha ganado el jugador: " + nameJ2 + ". Victorias: " + victorias_j2);
            }else{
                alert("Han quedado empatados. Empates: "+empates);
            }
        }
    }
    document.getElementById("victorias_j1").value=0;
    document.getElementById("victorias_j2").value=0;
    document.getElementById("empates").value=0;
    document.getElementById("ver_victorias_j1").innerHTML=0;
    document.getElementById("ver_victorias_j2").innerHTML=0;
    document.getElementById("ver_derrotas_j1").innerHTML=0;
    document.getElementById("ver_derrotas_j2").innerHTML=0;
    document.getElementById("ver_empates").innerHTML=0;
    document.getElementById("juego_nuevo").disabled=false;
}

function juegoNuevo(){
    document.getElementById("juego_terminado").value=0; //resetea el valor de juego_terminado a cero para una nueva partida
    document.getElementById("turno").value=1; //para que el jugador 1 empieze jugando siempre
    document.getElementById("turno_jugador").innerHTML='<img src="img/o.png" width="50" height="50" />';
    document.getElementById("juego_nuevo").disabled=true;
    
    for(i=1; i<=9; i++){
        document.getElementById("imagen_"+i).innerHTML='<img src="img/blanco.png" width="50" height="50" id="'+i+'" onclick="jugar(this.id);" />';
        document.getElementById("posicion_"+i).value=0;
    }
}

function casillaOcupada(){
    alert("Esta posicion ya esta ocupada");	
}	
	
function jugar(id){
    var pos1,	pos2,	pos3,	pos4,	pos5,	pos6,	pos7,	pos8,	pos9, continuar = 1, victorias_j1=0, victorias_j2=0;
    
    turno = document.getElementById("turno").value;
    juegoTerminado = document.getElementById("juego_terminado").value;
    document.getElementById("turno").value="";
    
    function ganaJ1(){
        document.getElementById("juego_terminado").value=1;
        alert("¡Felicitaciones, ha ganado el Jugador: " +nameJ1 +"!"); continuar = 2;
        document.getElementById("juego_nuevo").disabled=false;		
        nuevo_valor=document.getElementById("ver_victorias_j1").innerHTML=victorias_j1+1;
        document.getElementById("ver_derrotas_j2").innerHTML=""+nuevo_valor;
        document.getElementById("victorias_j1").value=nuevo_valor;
    }
    
    function ganaJ2(){
        document.getElementById("juego_terminado").value=1;
        alert("¡Felicitaciones, ha ganado el Jugador: " +nameJ2 +"!"); continuar = 2;
        document.getElementById("juego_nuevo").disabled=false;
        document.getElementById("juego_terminado").value=1;
        nuevo_valor_2=document.getElementById("ver_victorias_j2").innerHTML=victorias_j2+1;
        document.getElementById("ver_derrotas_j1").innerHTML=""+nuevo_valor_2;
        document.getElementById("victorias_j2").value=nuevo_valor_2;
    }
		
    if (juegoTerminado==0){
        if(turno==1){
            document.getElementById("imagen_"+id).innerHTML='<img src="img/o.png" width="50" height="50" id="1" onclick="casillaOcupada();" />';
			document.getElementById("turno_jugador").innerHTML='<img src="img/x.png" width="50" height="50" />';			
			document.getElementById("turno").value=2;
			document.getElementById("posicion_"+id).value=1;	
		}else{
			document.getElementById("imagen_"+id).innerHTML='<img src="img/x.png" width="50" height="50" id="2" onclick="casillaOcupada();" />';
			document.getElementById("turno_jugador").innerHTML='<img src="img/o.png" width="50" height="50" />'; //cambia la imagen del turno del jugador
			document.getElementById("turno").value=1;
			document.getElementById("posicion_"+id).value=2;
		}

        pos1 = document.getElementById("posicion_1").value;
        pos2 = document.getElementById("posicion_2").value;
        pos3 = document.getElementById("posicion_3").value;
        pos4 = document.getElementById("posicion_4").value;
        pos5 = document.getElementById("posicion_5").value;
        pos6 = document.getElementById("posicion_6").value;
        pos7 = document.getElementById("posicion_7").value;
        pos8 = document.getElementById("posicion_8").value;
        pos9 = document.getElementById("posicion_9").value;
        victorias_j1=parseInt(document.getElementById("victorias_j1").value);
        victorias_j2=parseInt(document.getElementById("victorias_j2").value);
        empates=parseInt(document.getElementById("empates").value);
        //casos en los que ganaria el jugador 1
        if(pos1==1 && pos2==1 && pos3==1){
            ganaJ1();
        }else if(pos4==1 && pos5==1 && pos6==1){
            ganaJ1();
        }else if(pos7==1 && pos8==1 && pos9==1){
            ganaJ1();
        }else if(pos3==1 && pos5==1 && pos7==1){
            ganaJ1();
        }else if(pos1==1 && pos5==1 && pos9==1){
            ganaJ1();
        }else if(pos1==1 && pos4==1 && pos7==1){
            ganaJ1();
        }else if(pos2==1 && pos5==1 && pos8==1){
            ganaJ1();
        }else if(pos3==1 && pos6==1 && pos9==1){
            ganaJ1();
        }
        //casos en los que ganaria el jugador 2
        if(pos1==2 && pos2==2 && pos3==2){
            ganaJ2();
        }else if(pos4==2 && pos5==2 && pos6==2){
            ganaJ2();
        }else if(pos7==2 && pos8==2 && pos9==2){
            ganaJ2();
        }else if(pos3==2 && pos5==2 && pos7==2){
            ganaJ2();
        }else if(pos1==2 && pos5==2 && pos9==2){
            ganaJ2();
        }else if(pos1==2 && pos4==2 && pos7==2){
            ganaJ2();
        }else if(pos2==2 && pos5==2 && pos8==2){
            ganaJ2();
        }else if(pos3==2 && pos6==2 && pos9==2){
            ganaJ2();
        }
       
        if(pos1!=0 && pos2!=0 && pos3!=0 && pos4!=0 && pos5!=0 && pos6!=0 && pos7!=0 && pos8!=0 && pos9!=0 && continuar!=2){
            alert("¡Esta vez el juego ha quedado empatado!");
            document.getElementById("juego_terminado").value=1;
            document.getElementById("juego_nuevo").disabled=false;
            nuevo_valor_3=document.getElementById("ver_empates").innerHTML=empates+1;
            document.getElementById("empates").value=nuevo_valor_3;
        }
	}
}

window.addEventListener("load", pedirNombres);