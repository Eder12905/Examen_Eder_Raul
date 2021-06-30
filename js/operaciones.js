//Examen Eder Raul Quiñones Quiroz  3-A

//Calcular edad
function edad(edad1){
    let edad4;
    edad4=parseInt(edad1);

    if(edad4<18){
        document.getElementById("edad").innerHTML="<h1>Eres menor de edad</h1>"
    }else
    if(edad4>=18 && edad4<60){
        document.getElementById("edad").innerHTML="<h1>Eres mayor de edad</h1>"
    }else
    if (edad4>=60 && edad4<120){
        document.getElementById("edad").innerHTML="<h1>Eres adulto mayor</h1>"
    }
    
}
//Meses del año

function mes(numero){
    let num;
    var mes;
    num=parseInt(numero);

    switch(num){
        case 1:
        document.getElementById("mes").innerHTML="<h1>Enero</h1>";
        break;
        case 2:
        document.getElementById("mes").innerHTML="<h1>Febrero</h1>";
        break;
        case 3:
        document.getElementById("mes").innerHTML="<h1>Marzo</h1>";
        break;
        case 4:
        document.getElementById("mes").innerHTML="<h1>Abril</h1>";
        break;
        case 5:
        document.getElementById("mes").innerHTML="<h1>Mayo</h1>";
        break;
        case 6:
        document.getElementById("mes").innerHTML="<h1>Junio</h1>";
        break;
        case 7:
        document.getElementById("mes").innerHTML="<h1>Julio</h1>";
        break;
        case 8:
        document.getElementById("mes").innerHTML="<h1>Agosto</h1>";
        break;
         case 9:
        document.getElementById("mes").innerHTML="<h1>Septiembre</h1>";
        break;
         case 10:
        document.getElementById("mes").innerHTML="<h1>Octubre</h1>";
        break;
         case 11:
        document.getElementById("mes").innerHTML="<h1>Noviembre</h1>";
        break;
         case 12:
        document.getElementById("mes").innerHTML="<h1>Diciembre</h1>";
        break;
        default:
        document.getElementById("mes").innerHTML="<h1>No valido</h1>";
        break;

    }
}

function iva(cantidad){
	var iv= parseInt(cantidad);
	var caliva=parseInt(iv * .16);
	var total= iv+caliva;
	document.getElementById("iva").innerHTML="<h1>Cantidad: " + iv + "<br>" + " Iva(16%): " + caliva + "<br>" + " Total: " + total + "</h1>";

}
document.getElementById("iva").innerHTML="<h1>Total del IVA es:" + total + "</h1>";

function validarUsuario(user,pass){
	var usuario=user;
	var passwd=pass;

	if(usuario=="admin" && passwd=="adminUT3N"){
		document.getElementById("resultado").innerHTML="";
		alert("Bienvenido a mi sistema!");
	}else{
		document.getElementById("resultado").innerHTML="";
		alert("Error en usuario y/o Contraseña");
	}

}

function nufac(fac){
	let num1;
	var a;
	var res;
	num1=parseInt(fac);
	a=num1;
	res=num1;
	while(a>1){
		a--;
		res=res*a;
	}
	alert("Respuesta: " + res)
}

