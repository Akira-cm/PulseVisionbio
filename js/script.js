//SCRIPT DO AUDIO.																																																																															// veritas           discord.gg/veritaz
const playSound = () => {
    let audio = new Audio();
    audio.src = "./coisas/musica.mp3";
    audio.volume = (0.3);
    audio.loop = false;
    return audio;
}

const audioElement = playSound();

document.body.addEventListener("mouseenter", () => {
    audioElement.play();
});

//DESATIVAR O CLIQUE COM O BOTÃO DIREITO.

 document.addEventListener('contextmenu', function (e) {
   e.preventDefault();
  }); 

//EFEITO MAQUINA DE ESCERVER..

  const text = " \“Não adianta agradar com palavras se vai decepcionar com atitudes\"";

  let index = 0;
  const machineText = document.getElementById("machine-text");

  function typeWriter() {
      if (index < text.length) {
          machineText.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, Math.floor(Math.random() * 150) + 50);
      }
  }

  typeWriter();

  

  AOS.init();



  //COPIAR

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showNotification();
  }
  
  function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
  
    setTimeout(() => {
      notification.style.display = 'none';
    }, 5000);
  }


  //efeito de neve

  $(document).ready(function(){
    // Opções de configuração (você pode ajustar conforme necessário)
    $(document).snowfall({
        round: true,
        shadow: true,
        flakeCount: 100, // Número de flocos de neve
    });
});

  
  