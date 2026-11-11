# Análise das comunicações do NexaHome Lab S1

O simulador conectou um cliente e um coletor em `127.0.0.1` por TCP. A porta foi alocada pelo sistema e não foi exposta à rede externa. O cliente enviou uma linha JSON; o coletor registrou os bytes recebidos. Não houve TLS nem autenticação do coletor. O registro é uma **transcrição de aplicação**, não um arquivo PCAP.

| Fluxo | Origem | Destino | Protocolo | Dados | Autenticação | Criptografia |
|---|---|---|---|---|---|---|
| N01 | Cliente local, porta efêmera | 127.0.0.1, porta efêmera | TCP + JSON por linha | `device_id`, temperatura, token fictício, tipo de mensagem | Ausente no código | Ausente no código |

Evidência: `evidence/simulation/network-observation.txt`. O coletor recebeu exatamente os bytes enviados; a execução validou a igualdade. A conclusão é limitada ao simulador. O token fictício não autoriza operações reais, mas demonstra que um valor colocado no payload pode ser lido pelo destinatário sem proteção de canal.

Identificar TCP e JSON só descreve o transporte e o formato. A análise de segurança observa também alcance de rede, autenticação, criptografia, autorização de mensagens e sensibilidade dos campos. Aqui o alcance é apenas loopback; em rede comercial, o impacto dependeria do desenho do serviço.
