# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários. 

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem: 
<table style= "width:100%">
    <tbody>
        <tr>
            <td rowspan=3> <img src="/docs/img/Persona_1.jpg" width=50% height=50%>  </td>
            <td colspan=2> <h1>Michele de Oliveira</h1> </td> 
        </tr>
        <tr>
            <td rowspan=2><h4>Idade: 30 </h4>
                <h4>Ocupação: Advogada,  encarregada  no setor de dívida ativa da  prefeitura. </ h4 >
            </td>
        </tr>
        <tr>
            <td><strong>Hobbies:</strong> 
            <ul>
            <li>Infernizar a vida do marido quando ele esta jogando ;</li> 
            <li>Natação;</li>
            <li>Livros de Ficção;</li>
            </li></ul></td>
        </tr>
  	    <tr>
            <td colspan="3"><strong>Motivações:</strong><br> 
            <ul><li>Aumentar Renda;</li> 
            <li>Vida Estável;</li> 
            <li>Aumentar Patrimonio.</li></ul>
            </td></tr>
       <tr>
            <td colspan="3"><strong>Frustrações:</strong> 
            <ul><li>Saldo Negativo;</li>
            <li> Não tem reserva pra investir</li>
            </td>
        </tr>
    </tbody>
</table>


<table style= "width:100px">
    <tbody>
        <tr>
            <td rowspan=3> <img src="/docs/img/Persona_2.jpg" width=50% height=50%>  </td>
            <td colspan=2> <h1>Carlos Gomes</h1> </td> 
        </tr>
        <tr>
            <td rowspan=2><h4>Idade: 40 </h4>
            <h4>Ocupação: Engenheiro de Produção, funcionário de uma multinacional do setor da indústria automotiva. </h4>
            </td>
        </tr>
        <tr>
            <td><strong>Hobbies:</strong> 
            <ul><li>Academia;</li> 
              <li>Jogos Ps5;</li>
              <li>Futebol;</li>
              <br>
             <br>
              <br>
            </ul></td>
        </tr>
  	    <tr>
            <td colspan="3"><strong>Motivações:</strong><br> 
            <ul><li>Ter uma renda extra;</li> 
            <li>Estabilizar vida financeira;</li> 
            <li>Adquirir Bens.</li></ul>
            </td></tr>
       <tr>
            <td colspan="3"><strong>Frustrações:</strong> 
            <ul><li>Renda Baixa;</li>
            <li> Não consegue criar reserva</li>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
        <tr>
            <td rowspan=3> <img src="/docs/img/Persona_3.jpg" width=45% height=45%>  </td>
            <td colspan=2> <h1>Marco Aurélio</h1> </td> 
        </tr>
        <tr>
            <td rowspan=2><h4>Idade: 35 </h4>
            <h4>Ocupação: Analista GSTI jr, faz gestão de serviços em TI numa startup </h4>
            </td>
        </tr>
        <tr>
            <td><strong>Hobbies:</strong> 
            <ul><li>Caminhada;</li> 
            <li>Jogos de RPG;</li>
            <li>Pocker;</li>
            <br>
            <br>
            <br>
            </ul></td>
        </tr>
  	    <tr>
            <td colspan="3"><strong>Motivações:</strong><br> 
            <ul><li>Ter uma boa reserva;</li> 
            <li>Aprender a lidar com gastos;</li> 
            <li>Investir;</li></ul>
            </td></tr>
       <tr>
            <td colspan="3"><strong>Frustrações:</strong> 
            <ul><li>Renda Baixa;</li>
            <li> Não tem conhecimento de investimnto;</li>
            <li> Não conseguir administrar vida financeira;</li>
            </td>
        </tr>
    </tbody>
</table>

 ## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`      |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-----------------------------------------|----------------------------------------|
|Michele de Oliveira | Administar vida financeira   | Adquirir patrimonio    |
|Carlos Gomes | Aprender mais sobre investimentos  | Admininstrar Renda e Acumular bens |
|Marco Aurelio  | Aprender sobre finanças  | Administrar gastos e equilibrar sua renda |



## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir. 

### Requisitos Funcionais
A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues. 

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Registro de transações financeiras: O sistema deve ser capaz de registrar todas as transações financeiras, incluindo receitas, despesas, investimentos, empréstimos e pagamentos. | ALTA | 
|RF-002| Controle de orçamento: O sistema deve permitir que os usuários definam e controlem orçamentos para diferentes categorias de despesas e receitas.    | MÉDIA |
|RF-003| Monitoramento de fluxo de caixa: O sistema deve ser capaz de monitorar o fluxo de caixa e alertar os usuários quando houver riscos de retenção de caixa. | MÉDIA  | 
|RF-004| Geração de relatórios financeiros: O sistema deve ser capaz de gerar relatórios financeiros, como balanços patrimoniais, relatórios de resultados e fluxos de caixa, para fornecer informações precisas e atualizadas sobre a saúde financeira da organização.   | MÉDIA |
|RF-005| Gerenciamento de contas a pagar e receber: O sistema deve permitir que os usuários gerenciem contas a pagar e receber, rastreando pagamentos recebidos e emitidos.| ALTA | 
|RF-006| Gerenciamento de investimentos: O sistema deve permitir que os usuários gerenciem seus investimentos, rastreando o desempenho e o valor atual dos investimentos. | MÉDIA |
|RF-007| Controle de dívidas: O sistema deve permitir que os usuários controlem suas dívidas, rastreando pagamentos, juros e prazos de vencimento.  | BAIXA| 
|RF-008| Gerenciamento de impostos: O sistema deve permitir que os usuários gerenciem seus impostos, rastreando obrigações fiscais, pagamentos e prazos de vencimento.    | BAIXA |
|RF-009| Alertas e notificações: O sistema deve ser capaz de enviar alertas e notificações para os usuários sobre vencimentos de pagamentos, metas de orçamento e outros eventos financeiros importantes.  | BAIXA | 
|RF-0010| Segurança de dados: O sistema deve garantir a segurança e privacidade dos dados financeiros dos usuários, protegendo contra acesso não autorizado e outras ameaças à segurança da informação.   | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Segurança: O sistema deve ser seguro e proteger as informações financeiras dos usuários contra acesso não autorizado, hackers e outras ameaças à segurança da informação.  | ALTA | 
|RNF-002| Confiabilidade: O sistema deve ser confiável e estar disponível sempre que os usuários precisarem dele, para garantir que as informações financeiras estejam sempre atualizadas e disponíveis para tomada de decisões financeiras. |  ALTA | 
|RNF-003| Usabilidade: O sistema deve ser fácil de usar e ter uma interface intuitiva, para que os usuários possam realizar tarefas financeiras com facilidade e rapidez, sem necessidade de conhecimentos técnicos avançados.|  MÉDIA|
|RNF-004| Desempenho: O sistema deve ter um bom desempenho, mesmo com grandes volumes de dados financeiros, para garantir que os usuários possam acessar e processar as informações rapidamente. |  ALTA |
|RNF-005| Escalabilidade: O sistema deve ser escalável e capaz de lidar com o aumento de dados financeiros e usuários, sem afetar o desempenho ou a disponibilidade do sistema. Isso permitirá que uma organização possa crescer e expandir suas operações sem precisar mudar para um novo sistema de controle financeiro.  |  ALTA |




## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

 
|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 07/07/2020.|
|RE-02 | O aplicativo deve se restringir às tecnologias básicas da Web no Front-end.  |
|RE-03 | A equipe não pode subcontratar o desenvolvimento do trabalho.  |

Diagramas de Casos de Uso 

O diagrama contempla as principais ligações previstas entre casos de uso e atores e permite detalhar os Requisitos Funcionais identificados na etapa de elicitação. Lembrando que  não se utiliza diagramas de caso de uso para requisitos não-funcionais. 

 

Como atores é importante a identificação dos grupos de todos os envolvidos que interagem com o sistema, principalmente outros sistemas ou sensores. Eles são representados graficamente por bonecos-palito e serão nomeados pelos papéis nas interações nas quais estão envolvidos (ex. Cliente, Administrador). Lembre-se de que o próprio sistema não pode ser ator do diagrama que o modela. 

 

Em relação aos casos de uso, eles devem representar as interações ou transações dos atores com o sistema. Cada tipo possível é representada por uma elipse nomeada e os relacionamentos são indicados por linhas que podem ter setas nos casos em que se indica a origem da interação. Os nomes dos casos de uso representam verbos no infinitivo associados aos objetos com os quais se relacionam os verbos (ex. Cadastrar usuário, Visualizar relatório). Os tipos de relacionamentos mais comuns são associações entre atores e casos de uso, generalizações entre atores e entre casos de uso, inclusões e extensões entre casos de uso. 
