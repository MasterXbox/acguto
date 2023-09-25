function escrevendoLetra() {
    function ativaLetra(elemento) {
        const linhas = elemento.innerHTML.split('<br>');
        elemento.innerHTML = ''; // Limpa o conteúdo original

        function escreverLinha(index) {
            if (index < linhas.length) {
                const linhaElemento = document.createElement('p');
                elemento.appendChild(linhaElemento);

                const letras = linhas[index].split('');
                let letraIndex = 0;

                function escreverLetra() {
                    if (letraIndex < letras.length) {
                        linhaElemento.innerHTML += letras[letraIndex];
                        letraIndex++;

                        // Adiciona ou remove o elemento com content: '_'
                        if (letraIndex < letras.length) {
                            linhaElemento.classList.add('com-underscore');
                        } else {
                            linhaElemento.classList.remove('com-underscore');
                        }

                        setTimeout(escreverLetra, 7); // Altere este valor para ajustar a velocidade
                    } else {
                        elemento.appendChild(document.createElement('br'));
                        escreverLinha(index + 1);

                        // Verifica se chegamos ao final do texto
                        if (index === linhas.length - 1) {
                            // Exibe o botão "prosseguir"
                            const botao = document.getElementById('prosseguir');
                            botao.style.display = 'block';
                        }
                    }
                }

                escreverLetra();
            }
        }

        escreverLinha(0);
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

function redirecionar() {

    window.location.href = 'http://127.0.0.1:5502/pagina_ex-BOOT/index.html';
}

escrevendoLetra();