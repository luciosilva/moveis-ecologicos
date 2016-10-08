/**
 * Created by LucioSilva on 07/10/2016.
 */
var banners =
    ["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('h2#mensagem').textContent =
        banners[bannerAtual];
}

setInterval(trocaBanner, 1000);