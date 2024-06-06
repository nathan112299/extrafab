var imagem = document.getElementById('image1');
var tamanhoAtual = 300;

document.getElementById('zoomIn').onclick = function() {
    tamanhoAtual += 50;
    imagem.style.width = tamanhoAtual + 'px';
};

document.getElementById('zoomOut').onclick = function() {
    tamanhoAtual -= 50;
    if (tamanhoAtual <= 0) {
        tamanhoAtual = 50;
    }
    imagem.style.width = tamanhoAtual + 'px';
};

document.getElementById('resetZoom').onclick = function() {
    tamanhoAtual = 300;
    imagem.style.width = tamanhoAtual + 'px';
};