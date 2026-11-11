# Relatório técnico — avaliação de segurança IoT

**Status:** rascunho estruturado; não converter em entrega final antes de inserir evidências.  
**Data da análise:** a preencher.  
**Dispositivo/versão:** a preencher.  
**Ambiente autorizado:** a preencher.

## 1. Resumo
Objetivo, escopo, principais achados confirmados e risco residual: **pendente de avaliação**. Nenhuma conclusão sobre a segurança do dispositivo pode ser emitida sem amostra e evidências.

## 2. Dispositivo e arquitetura
Descrever MCU, memória, sensores, alimentação, interfaces, firmware, protocolos e serviço associado com base em `architecture/architecture.md`. Inserir o diagrama validado.

## 3. Superfície de ataque e metodologia
Delimitar acesso físico, rede local, atualização e serviço associado. Registrar fonte do firmware, preservação, análise estática, inspeção física, captura de tráfego e demonstração controlada. Informar versões de ferramentas, datas e limitações.

## 4. Firmware
Nome, tamanho, origem, SHA-256, formato, partições, sistemas de arquivos, strings relevantes, endpoints, configurações e mecanismo de atualização. Cada conclusão deve citar offset, arquivo ou saída redigida. **Pendente.**

## 5. Interfaces físicas
Localização, acesso necessário, saída observada, proteções e consequência plausível. Diferenciar interface acessível de vulnerabilidade comprovada. **Pendente.**

## 6. Comunicações
Origem, destino, protocolo, tipo de mensagem, autenticação, criptografia e identificadores. Distinguir uso do protocolo da segurança da configuração. **Pendente.**

## 7. Demonstração controlada
Objetivo, pré-condições, passos, evidência, resultado, limite e repetição. Apenas no laboratório autorizado. **Pendente.**

## 8. Riscos e recomendações
| Achado | Evidência | Impacto | Probabilidade | Risco | Recomendação |
|---|---|---|---|---|---|
| F01 | Pendente | — | — | — | — |

Justificar cada classificação pela cadeia: evidência → fragilidade → ameaça → impacto → risco → mitigação.

## 9. Hardening comercial
Selecionar medidas de `remediation/hardening-plan.md` conforme os riscos confirmados e registrar como cada uma será testada.

## 10. Exemplo real pesquisado
O botnet Mirai explorou dispositivos IoT expostos com configurações padrão e credenciais embutidas; em 2016 participou de um ataque DDoS contra a Dyn. Esse caso ilustra a consequência de credenciais fracas em produtos conectados. **Não é evidência de que o dispositivo desta avaliação tenha a mesma falha.** Fonte: [relatório NSTAC hospedado pela CISA](https://www.cisa.gov/sites/default/files/publications/NSTAC%20Report%20to%20the%20President%20on%20ICR%20FINAL%20%2810-12-17%29%20%281%29-%20508%20compliant_0.pdf).

## 11. Referências
- [NIST IR 8259A — IoT Device Cybersecurity Capability Core Baseline](https://csrc.nist.gov/pubs/ir/8259/a/final).
- [ETSI EN 303 645 V3.1.3 — Cyber Security for Consumer IoT](https://www.etsi.org/deliver/etsi_en/303600_303699/303645/03.01.03_60/en_303645v030103p.pdf).
- Referências específicas do enunciado completo: **a confirmar**.
