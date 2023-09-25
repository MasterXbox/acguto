const tomada = document.getElementById('tomada');
const interruptor = document.getElementById('interruptor');
const link = document.getElementById('link');

let conectado = false;

tomada.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'tomada');
});

interruptor.addEventListener('dragover', (event) => {
    event.preventDefault();
});

interruptor.addEventListener('drop', (event) => {
    const draggedItem = event.dataTransfer.getData('text/plain');

    if (draggedItem === 'tomada' && !conectado) {
        link.style.display = 'block';
        link.href = 'pagina_ex-Power/index.html'; // Substitua pelo link desejado
        conectado = true;
    }
});
