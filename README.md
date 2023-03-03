
https://user-images.githubusercontent.com/110927310/207105729-961fc569-1be0-42a9-b418-26ee24cc05b1.mp4
# Uma Solução feita especialmente para mercados autônomos..

Desde o começo da evolução de máquinas e desenvolvimentos tecnológicos, os processos em diversos setores foram sendo automatizados e isso continua evoluindo. Isso afetou os supermercados, que automatizaram diversas tarefas, como a categorização de produtos, gestão de estoque e outros métodos, até que um novo tipo de comércio e mercado surgiu, o mercado autônomo.

Esse tipo de mercado está sendo uma alternativa cada vez mais escolhida e neles não há (ou quase não há) mais o envolvimento de atendentes humanos, assim, o cliente tem toda a disponibilidade de fazer tudo sozinho de forma mais rápida, prática, intuitiva e barata, pois a menor mão de obra possibilita o comércio a disponibilizar preços mais acessíveis. Porém, uma falha presente nesse sistema é que se não há pessoas controlando todo esse processo, muitas vezes há a falta de produtos nas prateleiras e considerando que o mercado já é menor e, portanto, não tem tanta variedade de produtos, não haver determinados itens essenciais no dia a dia da população faz com que a praticidade desse comércio se perca. Essa falta de produto não afeta apenas a fidelidade do cliente com o mercado, como também afeta a imagem da marca do produto que não foi reabastecido.

Já existem sistemas que controlam o estoque dos produtos, todavia, não tem um sistema que controle o estoque das prateleiras de maneira eficiente, pois, tem dias que ocorre um fluxo grande de pessoas ao mesmo tempo e com isso é difícil manter o controle dos produtos em prateleiras, e caso não esteja disponível ao cliente, não tem vendas e por fim, não há lucro. Esses sistemas costumam funcionar na base de previsões ao invés de fatos e, de acordo com a Instituição Nielsen em uma pesquisa disponível no site da ABRAS (Associação Brasileira de Supermercados), isso resulta em 10% de ruptura (falta de mercadorias) nos mercados.

Visando cada vez mais a automação de serviços manuais, foi observada a necessidade de um projeto para gerenciar o controle dos produtos à venda de forma ágil e prática nos mercados autônomos. Assim, com o uso de sensores para checar o abastecimento das prateleiras, seria possível a visualização rápida e precisa onde há necessidade de reposição, com menos mão de obra. Isso atrairia mais clientes por não ter falta de mercadorias, adequando o abastecimento de acordo com a necessidade, focando nos itens de maior venda, o que aumentaria o giro dos produtos e por fim geraria uma operação mais eficiente e lucrativa.

https://user-images.githubusercontent.com/110927310/207200281-1f0c55aa-6ffd-4ca9-8edb-247b6f521647.mp4
# Objetivo do projeto

O objetivo é monitorar e gerenciar o reabastecimento das prateleiras de forma eficiente e que atraísse mais clientes e renda para a empresa, mantendo a ideologia de autonomia do mercado.

# Como usar

1. Clone este repositório em sua máquina.

1.1 Clique aqui e acesse: https://gabs-mvb.github.io/Jet-Enterprise/site/public/

2. Crie, no Banco de Dados, as tabelas necessárias para o funcionamento deste projeto.
- Siga as instruções no arquivo **/site/src/database/script-tabelas.sql**


3. Acesse o arquivo **/site/app.js** e parametrize o ambiente.
- Se você estiver utilizando o Ambiente de Produção (SQL Server na nuvem Azure, remoto), comente a linha 1 e deixe habilitada a linha 2 onde está o valor **process.env.AMBIENTE_PROCESSO = "producao";**
- Se você estiver utilizando o Ambiente de Desenvolvimento (MySQL Workbench, local), comente a linha 2 e deixe habilitada a linha 1 onde está o valor **process.env.AMBIENTE_PROCESSO = "desenvolvimento";**

4. Adicione as credenciais de Banco de Dados no arquivo **/site/src/database/config.js**, seguindo as instruções neste.

5. Acesse o local do diretório **/site** presente neste repositório no seu terminal (GitBash ou VSCode) e execute os comandos abaixo:

```
npm i
``` 
_O comando acima irá instalar as bibliotecas necessárias para o funcionamento do projeto_
```
npm start
``` 

_O comando acima irá iniciar seu projeto e efetuar os comandos de acordo com a sua parametrização feita nos passos anteriores._

4. Conecte um Arduino conectado a protoboar e siga os passos abaixo:
- Insira o TCRT 5000 na protoboard, ligue o cabo vermelho no resistor de 330R, que ligará na saída 5v, o cabo preto no GND(TERRA). 
- O sensor é ligado ao resistor de 10KΩ  e em uma entrada digital (A7) (cabo amarelo) no Arduino.
