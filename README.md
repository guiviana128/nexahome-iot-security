# Avaliação de segurança IoT — NexaHome

> **Estado:** estrutura e metodologia preparadas. O dispositivo, firmware e evidências de laboratório ainda não foram fornecidos. Nenhum achado foi validado.

## Objetivo
Avaliar, em ambiente educacional autorizado, a superfície de ataque de um dispositivo IoT, relacionando evidência técnica, fragilidade, ameaça, impacto, risco e mitigação. A entrega inclui documentação técnica, evidências reproduzíveis e relatório em PDF após a coleta.

## Dispositivo e escopo
- Fabricante/modelo/revisão: **a preencher**.
- Identificador da unidade de laboratório: **a preencher** (não publicar número de série completo).
- Firmware/versão: **a preencher**.
- Rede de laboratório e serviços associados: **a preencher**.
- Autorização, datas e responsáveis: **a preencher**.
- Limites: apenas dispositivo e rede de laboratório autorizados; sem exploração de serviços externos, persistência ou alteração irreversível de hardware.

## Arquitetura
Veja [architecture/architecture.md](architecture/architecture.md). A arquitetura atual é um modelo a validar; componentes desconhecidos aparecem como “a identificar”.

## Ferramentas
PowerShell `Get-FileHash` e `Get-Item` para preservação; editor hexadecimal, `file`, `strings` e analisador de firmware **quando disponíveis**; multímetro ou adaptador serial conforme autorização; Wireshark/tcpdump na rede de laboratório. Registre versão e comando exato de cada ferramenta utilizada.

## Organização
- `architecture/`: componentes e diagrama.
- `firmware/`: inventário, hashes e notas; **não versionar imagem bruta**.
- `hardware/`: mapa das interfaces e evidências revisadas.
- `network/`: protocolos, fluxos e evidências revisadas.
- `findings/`: cadeia de evidência e matriz de riscos.
- `remediation/`: plano de hardening.
- `report/`: fonte do relatório técnico; exportar PDF após validação.
- `references/`: normas e caso real pesquisado.
- `scripts/`: preservação e identificação da imagem de firmware.

## Estado da avaliação
| Área | Situação | Evidência necessária |
|---|---|---|
| Reconhecimento | Pendente | fotos, manual ou inspeção do equipamento |
| Firmware | Pendente | imagem autorizada, origem, tamanho e SHA-256 |
| Interfaces físicas | Pendente | foto, medições e saída observada |
| Comunicações | Pendente | captura da rede de laboratório e contexto |
| Demonstração controlada | Pendente | procedimento, resultado e repetição |
| Riscos | Pendente | achados sustentados por evidência |

## Como reproduzir no ambiente autorizado
1. Registre modelo, revisão, limites de autorização e data.
2. Preserve a imagem original em local privado. No PowerShell, execute `scripts/preserve-firmware.ps1 -Source <caminho> -Origin <origem> -OutputDir <pasta-privada>`. Confira `hashes.txt` e trabalhe somente na cópia.
3. Preencha o inventário, fotografe as interfaces e guarde os originais em armazenamento privado.
4. Capture apenas o tráfego do dispositivo na rede de laboratório. Registre horários, IPs anonimizados, protocolo, autenticação e proteção do canal.
5. Escolha uma condição observada, faça uma demonstração controlada e registre passos, saída e limitação.
6. Preencha `findings/findings.md` com referências a evidências específicas. Atualize `report/relatorio-tecnico.md` e exporte o PDF.
7. Antes de publicar, retire credenciais, tokens, senhas, chaves, dados pessoais, endereços públicos e dumps não revisados.

**Regra de evidência:** “não observado” não equivale a “inexistente”. A presença de UART, JTAG ou de um protocolo não constitui, por si, vulnerabilidade.
