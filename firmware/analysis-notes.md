# Preservação e análise de firmware

## Cadeia de custódia
| Campo | Valor |
|---|---|
| Nome do arquivo original | Pendente |
| Origem autorizada | Pendente |
| Data/hora e fuso | Pendente |
| Tamanho em bytes | Pendente |
| SHA-256 original | Pendente |
| Local privado de preservação | Pendente |
| SHA-256 da cópia de trabalho | Pendente |
| Analista | Pendente |

A imagem original deve permanecer intacta. Use `scripts/preserve-firmware.ps1` e compare os hashes antes da análise. Não publique firmware bruto ou dados sensíveis neste repositório público.

## Análise estática básica
| Etapa | Ferramenta/versão/comando | Resultado observado | Evidência | Relevância para segurança |
|---|---|---|---|---|
| Formato e cabeçalho | — | Pendente | — | — |
| Partições/offsets | — | Pendente | — | — |
| Sistema de arquivos | — | Pendente | — | — |
| Bibliotecas/versões | — | Pendente | — | — |
| Strings/endpoints | — | Pendente | — | — |
| Configurações e credenciais | — | Pendente | — | — |
| Atualização/assinatura | — | Pendente | — | — |

## Cuidados de interpretação
Uma string encontrada pode ser código não utilizado ou dado de teste. Um endpoint não demonstra transmissão efetiva. Registre offset, contexto e confirmação por outra fonte antes de concluir que há exposição ou uso inseguro.
