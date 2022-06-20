function teste(servicoSelecionado){
    opForm = servicoSelecionado.value;
    if(opForm == "--" || opForm == "Manutenção Computador"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none"; 
    }
    if(opForm == "Elétrica"){
        document.getElementById('Elétrica').style.display = "flex"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none"; 
    }
    if(opForm == "Hidráulica"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "flex";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none"; 
    }
    if(opForm == "Mecânica"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "flex";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none";
    }
    if(opForm == "Carreto"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "flex";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none";
    }
    if(opForm == "Pintura"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "flex";
        document.getElementById('Marcenaria').style.display = "none";
    }
    if(opForm == "Marcenaria"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "flex";
    } 
}
function habilitarBotão(OpP){
    if(OpP.value != "--"){
        document.getElementById('btnSubmit').disabled = false;
    }
    if(OpP.value == "--"){
        document.getElementById('btnSubmit').disabled = true;
    } 
}
function cadastroServico(){

    window.alert("Serviço cadastrado com sucesso")
}

