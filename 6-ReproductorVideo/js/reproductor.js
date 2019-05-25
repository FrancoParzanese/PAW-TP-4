var window = window || {},
  document = document || {},
  Reproductor = Reproductor || {};

           
Reproductor.cargarAdministracionVideos = function(contenedorHTML){
     window.addEventListener("DOMContentLoaded", function(){
        
        Reproductor.contenedor = document.getElementById(contenedorHTML); 
        Reproductor.seccionAgregarVideo = document.createElement("section");
        Reproductor.seccionAgregarVideo.classList.add("agregarVideos");
          
        var input = document.createElement("input");
        input.classList.add("boton"); 
        input.classList.add("seleccionar"); 
        input.setAttribute("id","video");
        input.setAttribute("type","file");
        input.setAttribute("accept","mp4");
         
        Reproductor.file = input; 
        var botonAgregar = document.createElement("button");
        Reproductor.subtitulo = document.createElement("h2");
        botonAgregar.setAttribute("id","botonAgregar");
        botonAgregar.classList.add("boton");
        botonAgregar.innerHTML = "AGREGAR VIDEO";
          
        Reproductor.seccionAgregarVideo.appendChild(input);
        Reproductor.seccionAgregarVideo.appendChild(botonAgregar);
            
        botonAgregar.addEventListener("click",Reproductor.agregarVideo);
         
        Reproductor.seccionVideoActual = document.createElement("section");
        Reproductor.seccionVideoActual.classList.add("videos");  
        Reproductor.seccionVideoActual.classList.add("videoActual");
         
        Reproductor.seccionListaVideos = document.createElement("section");
        Reproductor.seccionListaVideos.classList.add("videos");
        Reproductor.seccionListaVideos.classList.add("listaVideos");
         
        Reproductor.subtitulo.setAttribute("id","subtitulo");
        Reproductor.subtitulo.classList.add("playlist");
        Reproductor.subtitulo.innerHTML = 'Lista de reproducción';
        
        Reproductor.seccionListaVideos.appendChild(Reproductor.subtitulo);
        
         //agrego a la pagina las dos secciones principales
        Reproductor.contenedor.appendChild(Reproductor.seccionAgregarVideo); 
        Reproductor.contenedor.appendChild(Reproductor.seccionVideoActual);
        Reproductor.contenedor.appendChild(Reproductor.seccionListaVideos); 

        Reproductor.videoActual = document.createElement("video"); 
        Reproductor.videoActual.setAttribute("width","95%");
        Reproductor.videoActual.setAttribute("idvideo",null);
        Reproductor.videoActual.setAttribute("controls","true");
        
        Reproductor.seccionVideoActual.appendChild(Reproductor.videoActual);
        Reproductor.cantVideos = 0; 
         
        Reproductor.tituloVideoActual = document.createElement("label");
        Reproductor.seccionVideoActual.appendChild(Reproductor.tituloVideoActual);
        Reproductor.videoEnReproduccion = "false"; 
     });
}


Reproductor.agregarVideo = function(){
    Reproductor.cantVideos++;

    var video = document.createElement("div");
    video.classList.add("listado");    
    var miniatura = document.createElement("video");
    miniatura.setAttribute("idVideo",Reproductor.cantVideos);
    
    var dataURL = URL.createObjectURL(Reproductor.file.files[0]); 
        miniatura.setAttribute("src",dataURL);   
    
    var nombreVideo = document.createElement("label");    
    nombreVideo.innerHTML = Reproductor.file.files[0].name;
    miniatura.setAttribute("tituloVideo",Reproductor.file.files[0].name); 
   
    miniatura.addEventListener("click",function(){
        if (Reproductor.videoEnReproduccion == "true"){
            var selecAnt = document.querySelector(".seleccionado");
            if (selecAnt!=null){
                selecAnt.classList.remove("seleccionado");
            }                        
        }
        var src = miniatura.getAttribute("src");
        Reproductor.videoActual.setAttribute("src",src);
        Reproductor.videoActual.setAttribute("idVideo", miniatura.getAttribute("idVideo"));
        var numVideo= miniatura.getAttribute("idVideo")-1;
        Reproductor.tituloVideoActual.innerHTML=miniatura.getAttribute("tituloVideo");
        video.classList.add("seleccionado");                            
        Reproductor.videoEnReproduccion = "true";
    });
    
    var botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton");
    botonEliminar.classList.add("quitar");
    botonEliminar.innerHTML = "X";
    botonEliminar.addEventListener("click",function(){
        if (Reproductor.videoActual.getAttribute("idVideo")==miniatura.getAttribute("idVideo")){
            Reproductor.videoActual.setAttribute("src","");
            Reproductor.videoEnReproduccion="false";
            Reproductor.tituloVideoActual.innerHTML="";
        }
        Reproductor.seccionListaVideos.removeChild(video);
    });
        
    video.appendChild(miniatura);
    video.appendChild(nombreVideo);
    video.appendChild(botonEliminar);
    
    Reproductor.seccionListaVideos.appendChild(video);
}


