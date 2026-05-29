//Atualização do botão
const botaoTema = document.querySelector('#rodape button');
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
    document.body.classList.add('dark-mode');
    botaoTema.textContent = 'Claro';
} else {
    botaoTema.textContent = 'Escuro';
}

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        botaoTema.textContent = 'Claro';
        localStorage.setItem('tema', 'dark');
    } else {
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