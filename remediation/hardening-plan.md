# Hardening proposto para uma versão comercial

O plano responde aos achados F01–F03 observados no simulador. A implementação e a eficácia em hardware real não foram testadas.

| Prioridade | Achado | Medida | Verificação para produto |
|---|---|---|---|
| 1 | F01 | Não embutir credencial compartilhada na imagem; provisionar identidade única por dispositivo e usar armazenamento protegido | Extrair duas imagens de produção autorizadas e confirmar que não revelam o mesmo segredo |
| 1 | F02 | Desativar logs de debug em produção e remover segredos de mensagens de boot | Coletar boot de build de produção e procurar credenciais e identificadores sensíveis |
| 1 | F03 | Proteger comunicação com TLS adequado, autenticar o serviço e o dispositivo, limitar permissões do token | Testar rejeição de par não autorizado e verificar que captura de rede não revela payload |
| 2 | Superfície física futura | Bloquear ou controlar UART/JTAG/SWD de produção conforme necessidade de assistência | Inspeção e tentativa autorizada de leitura/comando em unidade comercial |
| 2 | Atualização futura | Assinar firmware, validar integridade/autoria, impedir rollback e prever recuperação de falha | Imagem modificada/antiga é rejeitada; interrupção de update não inutiliza a unidade |
| 2 | Inicialização futura | Secure Boot e proteção de chaves quando suportados | Boot não autorizado é rejeitado |
| 3 | Operação | Inventário, prazo de suporte, correções, divulgação de vulnerabilidades e redução de serviços | Processo documentado e teste periódico |

Não é necessário programar fusíveis ou mudanças irreversíveis no laboratório. Medidas dependem do hardware, custos e modelo de ameaça da versão comercial.
