const linksVazios = document.querySelectorAll("a");

linksVazios.forEach(iten => {
    if(iten.href === "")
    iten.href = "javascript:alert('Indisponível no momento!');"
})