# Demonstração controlada — exposição do token fictício

**Ambiente:** NexaHome Lab S1 em Node.js, comunicação apenas por loopback.  
**Objetivo:** comprovar a leitura do token fictício em imagem, log UART simulado e payload TCP.

## Reprodução
1. No diretório do repositório, executar `node src/lab-assessment.mjs` com Node.js 18 ou superior.
2. Confirmar `status: PASS` e os seis campos `true` em `out/public/checks.json`.
3. Conferir `out/public/hashes.txt`: hashes da imagem original e da cópia são iguais.
4. Observar o campo `token` em `firmware-analysis.txt`, a linha `DEBUG enrollment token` em `uart-observation.txt` e o campo `token` em `network-observation.txt`.
5. Repetir a execução. O SHA-256 da imagem deve permanecer o mesmo; a data da análise pode mudar.

## Resultado observado em 2026-11-11
- Execução local retornou `PASS`.
- Imagem de 345 bytes; SHA-256 `09883d6e34b1e03d7084c7515db37d16b0273ef99a6d1dd28bdaa2ddc0f7b00e`.
- Token sintético `LAB-ONLY-KEY-7C2A` presente nas três superfícies.
- Coletor TCP recebeu exatamente a linha JSON transmitida.
- Todas as seis verificações em `evidence/simulation/checks.json` foram verdadeiras.

## Limites
A UART é um arquivo de log, e a “firmware” é um contêiner didático sem código executável. A transcrição de rede não é captura de pacotes. O token não é credencial de produção. Nenhum equipamento físico, serviço externo ou rede de terceiros foi testado.
