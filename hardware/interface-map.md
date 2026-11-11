# Interfaces físicas

**Estado:** inspeção pendente. Fotografias e logs originais devem ser preservados em local privado; publicar apenas cópias revisadas.

| Interface/ponto | Localização e evidência | Método de identificação | Saída ou capacidade observada | Proteção observada | Condição de acesso | Risco contextual |
|---|---|---|---|---|---|---|
| UART | Pendente | Pendente | Pendente | Pendente | Pendente | Não classificado |
| JTAG/SWD | Pendente | Pendente | Pendente | Pendente | Pendente | Não classificado |
| SPI/I²C | Pendente | Pendente | Pendente | Pendente | Pendente | Não classificado |
| USB/programação | Pendente | Pendente | Pendente | Pendente | Pendente | Não classificado |

## Procedimento seguro
1. Registrar fotos da placa e revisão, sem publicar identificadores sensíveis.
2. Confirmar alimentação e níveis elétricos antes de conectar qualquer adaptador.
3. Observar passivamente a saída de inicialização, quando autorizado.
4. Documentar se a interface só imprime diagnóstico ou também aceita comandos, permite leitura de memória ou altera configuração.
5. Avaliar risco considerando acesso físico, controles existentes e consequência demonstrada. Não inferir vulnerabilidade só pela presença dos pinos.
