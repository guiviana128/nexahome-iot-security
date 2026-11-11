# Plano de hardening para versão comercial

**Estado:** proposta preliminar. Priorizar e ajustar após achados confirmados.

| Área | Medida proposta | Condição para aplicar | Verificação sugerida |
|---|---|---|---|
| Identidade | Credencial individual por unidade; sem senha universal | Se houver autenticação do dispositivo | Duas unidades não compartilham segredo |
| Firmware | Assinatura e verificação de atualização; proteção contra rollback | Se houver atualização | Imagem alterada ou antiga é rejeitada |
| Inicialização | Secure Boot e proteção da cadeia de confiança | Se suportado pelo hardware e modelo de ameaça | Boot de imagem não autorizada falha |
| Armazenamento | Proteger segredos em hardware/armazenamento; criptografia quando necessária | Se houver dados sensíveis persistentes | Extração offline não revela segredo em claro |
| Debug | Remover logs sensíveis; limitar ou desativar acesso de produção | Se saída/comandos sensíveis forem observados | Build de produção não expõe dados nem comando |
| Comunicação | Autenticação mútua ou equivalente e canal protegido | Se fluxo carregar comandos ou dados sensíveis | Tráfego capturado não revela conteúdo; comandos sem autorização falham |
| Serviços | Desabilitar portas e funções desnecessárias | Após mapa real da superfície | Varredura autorizada mostra apenas serviços previstos |
| Atualização | Processo seguro com recuperação após falha | Se houver OTA/local update | Falha de energia não inutiliza a unidade |
| Ciclo de vida | Inventário, política de suporte, correção e divulgação de falhas | Versão comercial | Procedimento e prazo documentados |

A prioridade final deve seguir a matriz em `findings/findings.md`; esta lista não substitui evidência de risco.
