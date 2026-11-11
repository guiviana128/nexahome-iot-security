# Avaliação das interfaces físicas

O NexaHome Lab S1 é um **simulador em software**. Não existe PCB, UART elétrica, JTAG, SPI, I²C, pontos de teste nem alimentação de hardware a inspecionar. A ausência de interface física neste modelo não é uma conclusão sobre um dispositivo comercial.

| Interface | Situação | Evidência | Risco contextual |
|---|---|---|---|
| UART simulada | Log de boot em arquivo | `evidence/simulation/uart-observation.txt` | Expõe token fictício a quem lê o log |
| UART elétrica | Não aplicável | Não há placa | Não avaliado |
| JTAG/SWD | Não aplicável | Não há placa | Não avaliado |
| SPI/I²C | Não aplicável | Não há placa | Não avaliado |
| Pontos de teste | Não aplicável | Não há placa | Não avaliado |

## Implicação para produto comercial
Se o mesmo texto fosse emitido em uma UART fisicamente acessível, uma pessoa com acesso ao equipamento poderia ler o parâmetro. O risco dependeria de quem pode acessar a placa, de o token ter valor real e das proteções da interface. Para uma versão comercial: suprimir segredos do log, restringir depuração e verificar o build de produção.
