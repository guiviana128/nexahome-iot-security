# Preservação e análise da imagem NHFW

**Data da execução:** 2026-11-11 (UTC no registro automático).  
**Origem autorizada:** imagem criada pelo próprio código educacional em `src/lab-assessment.mjs`.  
**Nome:** `nexahome-lab-s1-v1.0.bin`; **tamanho:** 345 bytes.  
**SHA-256 original e cópia:** `09883d6e34b1e03d7084c7515db37d16b0273ef99a6d1dd28bdaa2ddc0f7b00e`.

A execução criou `out/private/original/` e `out/private/work/`, copiou a imagem e confirmou igualdade dos hashes antes de analisar a cópia. Esses diretórios não foram publicados. Registro: `evidence/simulation/hashes.txt`.

## Resultado da análise

| Item | Evidência | Significado |
|---|---|---|
| Formato | Magic `NHFW` no offset 0 | Contêiner didático, não firmware executável de MCU |
| Estrutura | Comprimento little-endian no offset 4; manifesto JSON no offset 8, 337 bytes | Sem partições ou sistema de arquivos |
| Configuração | Campo `token` no manifesto | Token fictício legível diretamente na imagem |
| Protocolos | Campo `transport` | Indica TCP local; uso confirmado pela execução |
| Atualização | Nenhum mecanismo implementado | Limite do simulador; não afirmar vulnerabilidade de atualização em produto real |

A análise foi feita por leitura estruturada da cópia preservada, com validação do cabeçalho e do tamanho. `evidence/simulation/firmware-analysis.txt` registra a saída. O token foi criado apenas para a demonstração e não dá acesso a serviço real.
