var window = window || {},
    document = document || {},
    Slide = Slide || {};

var animaciones = ["AnimacionIzq","AnimacionDer","AnimacionThumb"];

var imgCargadas = -1;
var img = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"];
var imgActual =0;

Slide.cargarCarrusel = function(contenedorHTML){
     window.addEventListener("DOMContentLoaded", function(){
        Slide.contenedor = document.getElementById(contenedorHTML);
        Slide.cargarElementos();
     });
    
    
    window.addEventListener("keydown",function(event){
            if (event.keyCode == 37){
                Slide.anterior();
                Slide.pasarImagen(animaciones[0]);
            }
            if (event.keyCode == 39){
                Slide.siguiente();
                Slide.pasarImagen(animaciones[1]);
            }
        });
}

Slide.anterior = function(){
    if (imgActual==0){
        imgActual= (img.length-1);
    } 
    else{
        imgActual--;
    }
}

Slide.siguiente = function(){
    if (imgActual==(img.length-1)){
        imgActual= 0;
    } 
    else{
        imgActual++;
    }    
}

Slide.pasarImagen=function(animacion){

    var ant = document.querySelector(".anterior");
    if(ant!=null){
        ant.classList.remove("anterior");
    }
    var x = document.querySelector(".li-imagen.activa");
    x.classList.remove("activa");
    x.classList.add("anterior");
    var y = document.querySelector(".thumb.activo");
    y.classList.remove("activo");
    
    for (var i=0;i<animaciones.length;i++){
        if (x.classList.contains(animaciones[i])){
            x.classList.remove(animaciones[i]);
        }
    }
    var x1 = document.querySelector(".li-imagen[idImg='"+imgActual+"']");
    x1.classList.add("activa");
    x1.classList.add(animacion);
    var y1 = document.querySelector(".thumb[idImg='"+imgActual+"']");
    y1.classList.add("activo");
}

Slide.cargarElementos = function(){
    //Se crea la seccion con la imagenes
   Slide.seccionCarrusel= document.createElement("section");
   Slide.seccionCarrusel.classList.add("carrusel");
   Slide.contenedor.appendChild(Slide.seccionCarrusel);  
    
    Slide.botonIzq = document.createElement("button");
    Slide.botonIzq.classList.add("boton");
    Slide.botonIzq.classList.add("haciaAtras");
    Slide.botonIzq.innerHTML="<";
    Slide.botonIzq.addEventListener("click",function(){
        Slide.anterior();
        Slide.pasarImagen(animaciones[0]);
    }); 
    Slide.seccionCarrusel.appendChild(Slide.botonIzq);
        
    Slide.botonDer = document.createElement("button");
    Slide.botonDer.classList.add("boton");
    Slide.botonDer.classList.add("haciaDelante");
    Slide.botonDer.innerHTML=">";
    Slide.botonDer.addEventListener("click",function(){
        Slide.siguiente();
        Slide.pasarImagen(animaciones[1]);
    });
    Slide.seccionCarrusel.appendChild(Slide.botonDer);
    
    Slide.cargarImagenes(img);
    Slide.seccionThumbs= document.createElement("div");
    Slide.seccionThumbs.classList.add("thumbs");
    Slide.seccionCarrusel.appendChild(Slide.seccionThumbs);   
    Slide.cargarThumbs();
    
    Slide.botonDer.classList.add("no-visible");
    Slide.botonIzq.classList.add("no-visible");
    
}


Slide.cargarImagenes= function(){
    var cont = 0;
    var ulInsert= document.createElement("ul");
    ulInsert.classList.add("listaImagenes");
    
    img.forEach(function(path){
        var liInsert = document.createElement("li");
        liInsert.classList.add("li-imagen");
        liInsert.setAttribute("idImg",cont); 
        var imgInsert = document.createElement("img");
        imgInsert.classList.add("img-imagen");
        imgInsert.setAttribute("idImg",cont);
        imgInsert.classList.add("no-visible");
        if (cont==0){
            liInsert.classList.add("activa"); 
        }
        imgInsert.setAttribute("src",path);
        liInsert.appendChild(imgInsert);
        ulInsert.appendChild(liInsert);
        cont++;
        
        imgInsert.addEventListener("load", Slide.actualizarImgCargadas)
    })
    
    Slide.seccionCarrusel.appendChild(ulInsert);
    Slide.actualizarImgCargadas();
}

Slide.actualizarImgCargadas = function(){
    imgCargadas++;
    if (imgCargadas==img.length){
        var visibles = document.querySelectorAll(".no-visible");
        visibles.forEach(function(e){
            e.classList.remove("no-visible");
        });
       document.querySelectorAll(".pre-carga").forEach(function(e){ 
           e.parentNode.removeChild(e)
       });
    }
}

Slide.cargarThumbs=function(){
    
    for (var i=0;i<img.length;i++){
        var thumb = document.createElement("div");
        thumb.classList.add("thumb");
        if (i==0){
            thumb.classList.add("activo")
        }
        thumb.setAttribute("idImg",i);
        thumb.addEventListener("click",function(){
            imgActual = this.getAttribute("idImg");
            Slide.pasarImagen(animaciones[2]);
        });
        thumb.classList.add("no-visible");
        Slide.seccionThumbs.appendChild(thumb);
    }
}

