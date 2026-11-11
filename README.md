# NexaHome Lab S1 — avaliação de segurança IoT

**Entrega educacional reproduzível.** O objeto analisado é um dispositivo **simulado em software**, construído para este trabalho. A imagem NHFW é um contêiner didático de configuração, não firmware executável de uma placa. A UART é um log simulado; a rede usa TCP em `127.0.0.1`. Essas limitações devem acompanhar qualquer entrega acadêmica.

## Objetivo e escopo
Demonstrar preservação de evidência, análise básica de imagem, mapeamento de interfaces, observação de comunicações, demonstração controlada e relação entre achado e risco. Testes restritos ao processo local e a dados sintéticos. Não houve acesso a equipamento físico, rede externa ou serviço de produção.

## Arquitetura
MCU virtual → imagem NHFW → log UART simulado e sensor virtual → JSON sobre TCP loopback → coletor local. Detalhes e diagrama em [architecture/architecture.md](architecture/architecture.md).

## Ferramentas
Node.js 24.18.0 na execução documentada, módulos nativos `crypto`, `fs` e `net`; PowerShell para leitura dos arquivos de evidência; editor de texto. O script funciona em Node.js 18+ e não depende de pacotes externos.

## Reprodução
```sh
node src/lab-assessment.mjs
```
A saída deve indicar `status: PASS`. O script cria uma imagem original em `out/private/original/`, uma cópia em `out/private/work/`, confere o SHA-256 e analisa apenas a cópia. Também inicia um coletor TCP local, envia uma telemetria e registra os bytes recebidos. As saídas revisadas aparecem em `out/public/`; as saídas da execução de 2026-11-11 estão em [evidence/simulation](evidence/simulation).

**SHA-256 da imagem:** `09883d6e34b1e03d7084c7515db37d16b0273ef99a6d1dd28bdaa2ddc0f7b00e` (345 bytes). O hash deve ser reproduzível; a data de análise muda a cada execução.

## Resultados
- **Firmware:** formato NHFW; cabeçalho de 8 bytes e manifesto JSON de 337 bytes, sem partição ou sistema de arquivos. Token **fictício** legível no campo `token`.
- **Hardware:** não há placa; apenas log UART simulado. A inspeção de UART/JTAG/SPI/I²C físicos é **não aplicável**.
- **Protocolo:** TCP local com JSON por linha, sem TLS. O coletor recebeu identificador, temperatura e token fictício.
- **Demonstração:** seis verificações passaram; o mesmo token apareceu na imagem, no log e na mensagem.
- **Achados:** F01 token na imagem, F02 token no log, F03 token no payload sem proteção de canal. Os três riscos foram classificados como **médios no laboratório**; ver [findings/findings.md](findings/findings.md).

## Entrega
| Parte | Arquivo |
|---|---|
| Relatório técnico | [report/relatorio-tecnico.md](report/relatorio-tecnico.md) e PDF em `report/relatorio-tecnico.pdf` |
| Preservação e firmware | [firmware/analysis-notes.md](firmware/analysis-notes.md), `evidence/simulation/hashes.txt` |
| Interfaces | [hardware/interface-map.md](hardware/interface-map.md) |
| Comunicações | [network/protocol-analysis.md](network/protocol-analysis.md) |
| Demonstração | [findings/controlled-demo.md](findings/controlled-demo.md) |
| Riscos | [findings/findings.md](findings/findings.md) |
| Hardening | [remediation/hardening-plan.md](remediation/hardening-plan.md) |
| Caso real e normas | [references/sources.md](references/sources.md) |

## Recomendações e publicação
Para uma versão comercial: credenciais individuais protegidas, logs sem segredos, autenticação de pares, canal criptografado, validação de atualização e restrição de debug. Estas são propostas de projeto, não correções testadas em hardware.

O token `LAB-ONLY-KEY-7C2A` é deliberadamente sintético e não autentica nenhum sistema real. Não envie para este repositório público firmware real, credenciais, tokens reais, PCAPs brutos, números de série ou dados pessoais.

**Limite de avaliação:** se o professor exigir um dispositivo físico ou imagem executável real, este estudo simulado não satisfaz esse requisito; será necessário substituir o objeto e repetir os testes.
