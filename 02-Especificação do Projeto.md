# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
>
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
> Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                |
| -------------------- | ---------------------------------- | -------------------------------------- |
| Usuário do sistema   | Registrar minhas tarefas           | Não esquecer de fazê-las               |
| Administrador        | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
>
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                                                                                                                                                         | Prioridade |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RF-001 | Registro de transações financeiras: O sistema deve ser capaz de registrar todas as transações financeiras, incluindo receitas, despesas, investimentos, empréstimos e pagamentos.                                                                              | ALTA       |
| RF-002 | Controle de orçamento: O sistema deve permitir que os usuários definam e controlem orçamentos para diferentes categorias de despesas e receitas.                                                                                                               | MÉDIA      |
| RF-003 | Monitoramento de fluxo de caixa: O sistema deve ser capaz de monitorar o fluxo de caixa e alertar os usuários quando houver riscos de retenção de caixa.                                                                                                       | MÉDIA      |
| RF-004 | Geração de relatórios financeiros: O sistema deve ser capaz de gerar relatórios financeiros, como balanços patrimoniais, relatórios de resultados e fluxos de caixa, para fornecer informações precisas e atualizadas sobre a saúde financeira da organização. | MÉDIA      |
| RF-005 | Gerenciamento de contas a pagar e receber: O sistema deve permitir que os usuários gerenciem contas a pagar e receber, rastreando pagamentos recebidos e emitidos.                                                                                             | ALTA       |
| RF-006 | Gerenciamento de investimentos: O sistema deve permitir que os usuários gerenciem seus investimentos, rastreando o desempenho e o valor atual dos investimentos.                                                                                               | MÉDIA      |
| RF-007 | Controle de dívidas: O sistema deve permitir que os usuários controlem suas dívidas, rastreando pagamentos, juros e prazos de vencimento.                                                                                                                      | BAIXA      |
| RF-008 | Gerenciamento de impostos: O sistema deve permitir que os usuários gerenciem seus impostos, rastreando obrigações fiscais, pagamentos e prazos de vencimento.                                                                                                  | MÉDIA      |
| RF-009 | Alertas e notificações: O sistema deve ser capaz de enviar alertas e notificações para os usuários sobre vencimentos de pagamentos, metas de orçamento e outros eventos financeiros importantes.                                                               | MÉDIA      |
| RF-010 | Segurança de dados: O sistema deve garantir a segurança e privacidade dos dados financeiros dos usuários, protegendo contra acesso não autorizado e outras ameaças à segurança da informação.                                                                  | MÉDIA      |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                                                                                                                                                                                                                                           | Prioridade |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | Segurança: O sistema deve ser seguro e proteger as informações financeiras dos usuários contra acesso não autorizado, hackers e outras ameaças à segurança da informação.                                                                                                                                        | MÉDIA      |
| RNF-002 | Confiabilidade: O sistema deve ser confiável e estar disponível sempre que os usuários precisarem dele, para garantir que as informações financeiras estejam sempre atualizadas e disponíveis para tomada de decisões financeiras.                                                                               | BAIXA      |
| RNF-003 | Usabilidade: O sistema deve ser fácil de usar e ter uma interface intuitiva, para que os usuários possam realizar tarefas financeiras com facilidade e rapidez, sem necessidade de conhecimentos técnicos avançados.                                                                                             | BAIXA      |
| RNF-004 | Desempenho: O sistema deve ter um bom desempenho, mesmo com grandes volumes de dados financeiros, para garantir que os usuários possam acessar e processar as informações rapidamente.                                                                                                                           | BAIXA      |
| RNF-005 | Escalabilidade: O sistema deve ser escalável e capaz de lidar com o aumento de dados financeiros e usuários, sem afetar o desempenho ou a disponibilidade do sistema. Isso permitirá que uma organização possa crescer e expandir suas operações sem precisar mudar para um novo sistema de controle financeiro. | BAIXA      |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
  (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
  correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
  Lembre-se que cada requisito deve corresponder à uma e somente uma
  característica alvo da sua solução. Além disso, certifique-se de que
  todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre |
| 02  | Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
>
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
>
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
