function teste(servicoSelecionado){
    opForm = servicoSelecionado.value;
    if(opForm == "--" || opForm == "Manutenção Computador"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none";
        document.getElementById('1').hidden = true;
        document.getElementById('2').hidden = true; 
        document.getElementById('3').hidden = true;  
        document.getElementById('4').hidden = true; 
        document.getElementById('5').hidden = true; 
        document.getElementById('6').hidden = true; 

    }
    if(opForm == "Elétrica"){
        document.getElementById('Elétrica').style.display = "flex"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none"; 
        document.getElementById('1').hidden = false;
        document.getElementById('2').hidden = true; 
        document.getElementById('3').hidden = true;  
        document.getElementById('4').hidden = true; 
        document.getElementById('5').hidden = true; 
        document.getElementById('6').hidden = true; 
        //Joao
    }
    if(opForm == "Hidráulica"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "flex";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none"; 
        document.getElementById('1').hidden = true;
        document.getElementById('2').hidden = false; 
        document.getElementById('3').hidden = true;  
        document.getElementById('4').hidden = true; 
        document.getElementById('5').hidden = true; 
        document.getElementById('6').hidden = true; 
        //Mario
    }
    if(opForm == "Mecânica"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "flex";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none";
        document.getElementById('1').hidden = true;
        document.getElementById('2').hidden = true; 
        document.getElementById('3').hidden = false;  
        document.getElementById('4').hidden = true; 
        document.getElementById('5').hidden = true; 
        document.getElementById('6').hidden = true;
        //Jailson
    }
    if(opForm == "Carreto"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "flex";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "none";
        document.getElementById('1').hidden = true;
        document.getElementById('2').hidden = true; 
        document.getElementById('3').hidden = true;  
        document.getElementById('4').hidden = false; 
        document.getElementById('5').hidden = true; 
        document.getElementById('6').hidden = true;
        //Reinaldo
    }
    if(opForm == "Pintura"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "flex";
        document.getElementById('Marcenaria').style.display = "none";
        document.getElementById('1').hidden = true;
        document.getElementById('2').hidden = true; 
        document.getElementById('3').hidden = true;  
        document.getElementById('4').hidden = true; 
        document.getElementById('5').hidden = false; 
        document.getElementById('6').hidden = true;
        //joana
    }
    if(opForm == "Marcenaria"){
        document.getElementById('Elétrica').style.display = "none"; 
        document.getElementById('Hidráulica').style.display = "none";
        document.getElementById('Mecânica').style.display = "none";
        document.getElementById('Carreto').style.display = "none";
        document.getElementById('Pintura').style.display = "none";
        document.getElementById('Marcenaria').style.display = "flex";
        document.getElementById('1').hidden = true;
        document.getElementById('2').hidden = true; 
        document.getElementById('3').hidden = true;  
        document.getElementById('4').hidden = true; 
        document.getElementById('5').hidden = true; 
        document.getElementById('6').hidden = false;
        //Adriano
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
function cadastroServico(local, desc){
    if(local.value != "" && desc.value != ""){
        window.alert("Serviço cadastrado com sucesso");
    }
    
}

