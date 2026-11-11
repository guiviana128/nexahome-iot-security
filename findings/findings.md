# Achados validados no simulador

**Escopo da classificação:** laboratório local e token fictício sem privilégio real. Impactos comerciais abaixo são cenários condicionais, não fatos observados.

## Critério
Impacto baixo = efeito limitado ao ambiente demonstrado; médio = perda relevante de dados/função; alto = controle amplo ou efeito físico. Probabilidade baixa/média/alta estima a facilidade de reproduzir a condição no escopo definido. Matriz: baixo+alta = **médio**; médio+alta = **alto**; alto+alta = **alto**.

| ID | Evidência | Fragilidade | Ameaça/cenário | Impacto | Prob. | Risco | Referência | Mitigação |
|---|---|---|---|---|---|---|---|---|
| F01 | `firmware-analysis.txt`, `hashes.txt`; campo `token` | Token fictício em texto claro na imagem | Leitura por quem obtiver o arquivo | Baixo | Alta | Médio | NIST IR 8259A, Data Protection | Não embutir segredo compartilhado; armazenar credencial individual protegida |
| F02 | `uart-observation.txt`, linha 3 | Log de boot imprime token fictício | Leitura do log por operador local | Baixo | Alta | Médio | NIST IR 8259A, Logical Access to Interfaces / Data Protection | Remover parâmetros sensíveis do log de produção |
| F03 | `network-observation.txt`, `checks.json` | JSON com token e telemetria via TCP sem TLS | Leitura do conteúdo no caminho de comunicação, caso exposto | Baixo | Alta | Médio | ETSI EN 303 645 §5.5, comunicação de parâmetros críticos | Proteger canal, autenticar pares e evitar enviar segredo em cada telemetria |

## Cadeia causal e limites
- **F01:** imagem preservada → manifesto contém token → acesso ao arquivo permitiria leitura → no laboratório o token não concede acesso → impacto baixo → risco médio pela facilidade de reprodução. Em produto real, o impacto depende de o segredo ser aceito por um serviço.
- **F02:** log UART simulado mostra o mesmo token → pessoa com acesso ao log poderia copiá-lo → impacto atual baixo. Não houve inspeção de pinos físicos.
- **F03:** coletor recebeu os bytes do payload sem TLS → o conteúdo é legível no destino e em pontos de observação do fluxo → comunicação restrita a loopback; nenhum interceptador de rede externa foi testado.

Os três achados usam o mesmo token fictício para mostrar superfícies distintas. Não são três credenciais diferentes nem três explorações independentes.
