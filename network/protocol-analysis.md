# Análise de comunicações

**Escopo:** somente a rede de laboratório autorizada. Capturas brutas ficam fora do Git até revisão.

| Fluxo | Origem | Destino | Protocolo/porta | Tipo de dado | Autenticação | Criptografia | Evidência |
|---|---|---|---|---|---|---|---|
| N01 | Pendente | Pendente | Pendente | Pendente | Não verificado | Não verificada | — |

## Procedimento
1. Registrar topologia, horário, IP/MAC do dispositivo e ponto de captura.
2. Capturar uma inicialização e uma operação normal, sem interceptar terceiros.
3. Filtrar os fluxos do dispositivo; registrar origem, destino, porta e sequência de mensagens.
4. Verificar, por evidência observável, se há autenticação, confidencialidade e integridade. Quando houver TLS, anotar versão e certificado visíveis sem afirmar que todo o canal é seguro.
5. Inspecionar apenas amostras necessárias; ocultar tokens, dados pessoais e identificadores antes de publicar.
6. Comparar tráfego com strings/endpoints de firmware, se houver.

**Interpretação:** identificar MQTT, HTTP, BLE ou outro protocolo descreve o transporte. A segurança depende de configuração, autenticação, proteção do canal, autorização das mensagens e dados transmitidos no contexto observado.
