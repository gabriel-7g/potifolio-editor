//Atualização do botão
const botaoTema = document.querySelector('#rodape button');
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
    document.body.classList.add('dark-mode');
    botaoTema.textContent = 'Claro';
} else {
    document.body.classList.add('light-mode');
    botaoTema.textContent = 'Escuro';
}

botaoTema.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        
        botaoTema.textContent = 'Claro';       
        localStorage.setItem('tema', 'dark'); 
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        
        botaoTema.textContent = 'Escuro';       
        localStorage.setItem('tema', 'light'); 
    }
});

//Contatos
const linkWhatsapp = document.querySelector('a[href=""]');
const numeroTelefone = "5581997254072";
const mensagem = encodeURIComponent("Olá, Gabriel! Vi seu portfólio de edição e gostaria de fazer um orçamento.");
if (linkWhatsapp) {
    linkWhatsapp.href = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
    linkWhatsapp.setAttribute('target', '_blank'); 
}

//Animação do site
const containers = document.querySelectorAll('.container');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, { threshold: 0.1 });

containers.forEach(container => {
    container.classList.add('fade-in-hidden');
    observer.observe(container);
});

//Carregar Vídeos
const meusVideos = [
    { arquivo: "https://www.youtube.com/watch?v=UpNkULDx2JQ", short: false },
    { arquivo: "https://www.youtube.com/watch?v=b_B1tsyPXVg", short: false },
    { arquivo: "https://www.youtube.com/watch?v=c8BFJhhWqkc&feature=youtu.be", short: false },
    { arquivo: "https://www.youtube.com/shorts/gPobiAdSD_E", short: true },
    { arquivo: "https://www.youtube.com/shorts/2O1kYFhm40E", short: true }
]

// Extrai o ID do vídeo e retorna a URL de embed correta
function getEmbedUrl(url, short) {
    if (short) {
        const id = url.split('/shorts/')[1]?.split('?')[0];
        return `https://www.youtube.com/embed/${id}`;
    } else {
        const id = new URL(url).searchParams.get('v');
        return `https://www.youtube.com/embed/${id}`;
    }
}

const gridPortifolio = document.getElementById('lista-portfolio');

function carregarPortifolio() {
    let htmlGerado = "";
    meusVideos.map(({ arquivo, short }) => {
        const embedUrl = getEmbedUrl(arquivo, short);
        htmlGerado += `
            <div class="video-card ${short ? 'video-card--short' : ''}">
                <div class="video-wrapper">
                    <iframe
                        width="100%"
                        height="100%"
                        src="${embedUrl}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        `
    })
    gridPortifolio.innerHTML = htmlGerado;
}

carregarPortifolio();