const imagem_btn_projetos = document.querySelectorAll(".img-projetos-btn");
const btn_projetos = document.querySelector(".btn-projetos");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img01");
const span = document.getElementsByClassName("close")[0];
const icon = document.querySelector(".btn-projetos");


function mostrarModal(){

    modal.style.display = "block";
    modalImg.src = this.src;
}

for (i=0; i < imagem_btn_projetos.length; i++){
    imagem_btn_projetos[i].onclick = function(){

        modal.style.display = "block";
        modalImg.src = this.src;
    }
}




span.onclick = function() { 
  modal.style.display = "none";
}









btn_projetos.addEventListener("click", toggleimg);

function toggleimg(){

    
  
  
    if(imagem_btn_projetos[0].classList.contains("mostrar-img")){
        icon.classList.remove("extendido");
      imagem_btn_projetos.forEach(iten => {
        iten.classList.remove("mostrar-img");
      });
    }
    else{
        icon.classList.add("extendido");
        imagem_btn_projetos.forEach(iten => {
            iten.classList.add("mostrar-img");
      });
    }
  }


