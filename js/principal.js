/**
 * Created by LucioSilva on 07/10/2016.
 */
var banners =
    ["Do lixo ao luxo!", "Reaproveitar é aproveitar!"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('h2#mensagem').textContent =
        banners[bannerAtual];
}

setInterval(trocaBanner, 1000);