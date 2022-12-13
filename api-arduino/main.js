// não altere!
const serialport = require("serialport");
const express = require("express");
const mysql = require("mysql2");
const sql = require("mssql");

// não altere!
const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

// configure a linha abaixo caso queira que os dados capturados sejam inseridos no banco de dados.
// false -> nao insere
// true -> insere
const HABILITAR_OPERACAO_INSERIR = true;

// altere o valor da variável AMBIENTE para o valor desejado:
// API conectada ao banco de dados remoto, SQL Server -> 'producao'
// API conectada ao banco de dados local, MySQL Workbench - 'desenvolvimento'
const AMBIENTE = "producao";

const serial = async (
  valoresPrat1,
  valoresPrat2,
  valoresPrat3,
  valoresPrat4,
  valoresPrat5,
  valoresPrat6,
  valoresPrat7,
  valoresPrat8,
  valoresPrat9,
  valoresPrat10,
  valoresPrat11,
  valoresPrat12,
  valoresPrat13,
  valoresPrat14,
  valoresPrat15,
  valoresPrat16,
  valoresPrat17,
  valoresPrat18,
  valoresPrat19,
  valoresPrat20,
  valoresPrat21,
  valoresPrat22,
  valoresPrat23,
  valoresPrat24,
  valoresPrat25,
  valoresPrat26,
  valoresPrat27,
  valoresPrat28,
  valoresPrat29,
  valoresPrat30,
  valoresPrat31,
  valoresPrat32,
  valoresPrat33,
  valoresPrat34,
  valoresPrat35,
  valoresPrat36,
  valoresPrat37,
  valoresPrat38,
  valoresPrat39,
  valoresPrat40,
  valoresPrat41,
  valoresPrat42,
  valoresPrat43,
  valoresPrat44

) => {
  let poolBancoDados = "";

  if (AMBIENTE == "desenvolvimento") {
    poolBancoDados = mysql
      .createPool({
        // altere!
        // CREDENCIAIS DO BANCO LOCAL - MYSQL WORKBENCH
        host: "localhost",
        user: "admin",
        password: "admin123",
        database: "empresaJet",
      })
      .promise();
  } else if (AMBIENTE == "producao") {
    console.log(
      "Projeto rodando inserindo dados em nuvem. Configure as credenciais abaixo."
    );
  } else {
    throw new Error(
      'Ambiente não configurado. Verifique o arquivo "main.js" e tente novamente.'
    );
  }

  const portas = await serialport.SerialPort.list();
  const portaArduino = portas.find(
    (porta) => porta.vendorId == 2341 && porta.productId == 43
  );
  if (!portaArduino) {
    throw new Error("O arduino não foi encontrado em nenhuma porta serial");
  }
  const arduino = new serialport.SerialPort({
    path: portaArduino.path,
    baudRate: SERIAL_BAUD_RATE,
  });
  arduino.on("open", () => {
    console.log(
      `A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`
    );
  });
  arduino
    .pipe(new serialport.ReadlineParser({ delimiter: "\r\n" }))
    .on("data", async (data) => {
      //console.log(data);
      var teste = []; 

      const valores = data.split(";");

      for (let a = 0; a < valores.length - 1; a++) {
        teste.push(valores[a])
      }
      const Prat1 = parseInt(valores[0]);
      const Prat2 = parseInt(valores[1]);
      const Prat3 = parseInt(valores[2]);
      const Prat4 = parseInt(valores[3]);
      const Prat5 = parseInt(valores[4]);
      const Prat6 = parseInt(valores[5]);
      const Prat7 = parseInt(valores[6]);
      const Prat8 = parseInt(valores[7]);
      const Prat9 = parseInt(valores[8]);
      const Prat10 = parseInt(valores[9]);
      const Prat11 = parseInt(valores[10]);
      const Prat12 = parseInt(valores[11]);
      const Prat13 = parseInt(valores[12]);
      const Prat14 = parseInt(valores[13]);
      const Prat15 = parseInt(valores[14]);
      const Prat16 = parseInt(valores[15]);
      const Prat17 = parseInt(valores[16]);
      const Prat18 = parseInt(valores[17]);
      const Prat19 = parseInt(valores[18]);
      const Prat20 = parseInt(valores[19]);
      const Prat21 = parseInt(valores[20]);
      const Prat22 = parseInt(valores[21]);
      const Prat23 = parseInt(valores[22]);
      const Prat24 = parseInt(valores[23]);
      const Prat25 = parseInt(valores[24]);
      const Prat26 = parseInt(valores[25]);
      const Prat27 = parseInt(valores[26]);
      const Prat28 = parseInt(valores[27]);
      const Prat29 = parseInt(valores[28]);
      const Prat30 = parseInt(valores[29]);
      const Prat31 = parseInt(valores[30]);
      const Prat32 = parseInt(valores[31]);
      const Prat33 = parseInt(valores[32]);
      const Prat34 = parseInt(valores[33]);
      const Prat35 = parseInt(valores[34]);
      const Prat36 = parseInt(valores[35]);
      const Prat37 = parseInt(valores[36]);
      const Prat38 = parseInt(valores[37]);
      const Prat39 = parseInt(valores[38]);
      const Prat40 = parseInt(valores[39]);
      const Prat41 = parseInt(valores[40]);
      const Prat42 = parseInt(valores[41]);
      const Prat43 = parseInt(valores[42]);
      const Prat44 = parseInt(valores[43]);

      valoresPrat1.push(Prat1);
      valoresPrat2.push(Prat2);
      valoresPrat3.push(Prat3);
      valoresPrat4.push(Prat4);
      valoresPrat5.push(Prat5);
      valoresPrat6.push(Prat6);
      valoresPrat7.push(Prat7);
      valoresPrat8.push(Prat8);
      valoresPrat9.push(Prat9);
      valoresPrat10.push(Prat10);
      valoresPrat11.push(Prat11);
      valoresPrat12.push(Prat12);
      valoresPrat13.push(Prat13);
      valoresPrat14.push(Prat14);
      valoresPrat15.push(Prat15);
      valoresPrat16.push(Prat16);
      valoresPrat17.push(Prat17);
      valoresPrat18.push(Prat18);
      valoresPrat19.push(Prat19);
      valoresPrat20.push(Prat20);
      valoresPrat21.push(Prat21);
      valoresPrat22.push(Prat22);
      valoresPrat23.push(Prat23);
      valoresPrat24.push(Prat24);
      valoresPrat25.push(Prat25);
      valoresPrat26.push(Prat26);
      valoresPrat27.push(Prat27);
      valoresPrat28.push(Prat28);
      valoresPrat29.push(Prat29);
      valoresPrat30.push(Prat30);
      valoresPrat31.push(Prat31);
      valoresPrat32.push(Prat32);
      valoresPrat33.push(Prat33);
      valoresPrat34.push(Prat34);
      valoresPrat35.push(Prat35);
      valoresPrat36.push(Prat36);
      valoresPrat37.push(Prat37);
      valoresPrat38.push(Prat38);
      valoresPrat39.push(Prat39);
      valoresPrat40.push(Prat40);
      valoresPrat41.push(Prat41);
      valoresPrat42.push(Prat42);
      valoresPrat43.push(Prat43);
      valoresPrat44.push(Prat44);


      if (HABILITAR_OPERACAO_INSERIR) {
        if (AMBIENTE == "producao") {
          // altere!
          // Este insert irá inserir os dados na tabela "medida"
          // -> altere nome da tabela e colunas se necessário
          // Este insert irá inserir dados de fk_aquario id=1 (fixo no comando do insert abaixo)
          // >> Importante! você deve ter o aquario de id 1 cadastrado.
          
          // CREDENCIAIS DO BANCO REMOTO - SQL SERVER
          // Importante! você deve ter criado o usuário abaixo com os comandos presentes no arquivo
          // "script-criacao-usuario-sqlserver.sql", presente neste diretório.
          const connStr =
          `Server=svr-projeto-empresajet.database.windows.net;
          Database=bd-projeto-empresajet;
          User Id=admin-projeto-empresajet;
          Password=#Gfgrupo1;`;

          console.log(teste)
          console.log(teste.length)
          
        //   for (let i = 0; i < teste.length ; i++) {
        //       sqlquery = `INSERT INTO dados_sensor (statusPrateleira, fkPrateleira) 
        //   VALUES (${teste[i]}, ${i+1});`;
        // }

              sqlquery = `INSERT INTO dados_sensor (statusPrateleira, fkPrateleira) VALUES 
              (${teste[0]}, ${1}),
              (${teste[1]}, ${2}),
              (${teste[2]}, ${3}),
              (${teste[3]}, ${4}),
              (${teste[4]}, ${5}),
              (${teste[5]}, ${6}),
              (${teste[6]}, ${7}),
              (${teste[7]}, ${8}),
              (${teste[8]}, ${9}),
              (${teste[9]}, ${10}),
              (${teste[10]}, ${11}),
              (${teste[11]}, ${12}),
              (${teste[12]}, ${13}),
              (${teste[13]}, ${14}),
              (${teste[14]}, ${15}),
              (${teste[15]}, ${16}),
              (${teste[16]}, ${17}),
              (${teste[17]}, ${18}),
              (${teste[18]}, ${19}),
              (${teste[19]}, ${20}),
              (${teste[20]}, ${21}),
              (${teste[21]}, ${22}),
              (${teste[22]}, ${23}),
              (${teste[23]}, ${24}),
              (${teste[24]}, ${25}),
              (${teste[25]}, ${26}),
              (${teste[26]}, ${27}),
              (${teste[27]}, ${28}),
              (${teste[28]}, ${29}),
              (${teste[29]}, ${30}),
              (${teste[30]}, ${31}),
              (${teste[31]}, ${32}),
              (${teste[32]}, ${33}),
              (${teste[33]}, ${34}),
              (${teste[34]}, ${35}),
              (${teste[35]}, ${36}),
              (${teste[36]}, ${37}),
              (${teste[37]}, ${38}),
              (${teste[38]}, ${39}),
              (${teste[39]}, ${40}),
              (${teste[40]}, ${41}),
              (${teste[41]}, ${42}),
              (${teste[42]}, ${43}),
              (${teste[43]}, ${44})
              ;`;


        sql
        .connect(connStr)
        .then((conn) => inserirComando(conn, sqlquery))
        .catch((err) => console.log("erro! " + err));


            
            
          function inserirComando(conn, sqlquery) {
            conn.query(sqlquery);
            console.log(
              "valores inseridos no banco: ",
              data.toString()
            );
          }

        } else if (AMBIENTE == "desenvolvimento") {
          // altere!
          // Este insert irá inserir os dados na tabela "medida"
          // -> altere nome da tabela e colunas se necessário
          // Este insert irá inserir dados de fk_aquario id=1 (fixo no comando do insert abaixo)
          // >> você deve ter o aquario de id 1 cadastrado.
          for (let i = 0; i < teste.length ; i++) {
            await poolBancoDados.execute(
            `INSERT INTO dados_sensor (statusPrateleira, fkPrateleira) 
                VALUES (${teste[i]},${[i+1]});`,
            );
            console.log(teste);
        }
          console.log(
            "valores inseridos no banco: ", data.toString()
          );
        } else {
          throw new Error(
            'Ambiente não configurado. Verifique o arquivo "main.js" e tente novamente.'
          );
        }
      }
    });
  arduino.on("error", (mensagem) => {
    console.error(`Erro no arduino (Mensagem: ${mensagem}`);
  });
};

const servidor = (
  valoresPrat1,
  valoresPrat2,
  valoresPrat3,
  valoresPrat4,
  valoresPrat5,
  valoresPrat6,
  valoresPrat7,
  valoresPrat8,
  valoresPrat9,
  valoresPrat10,
  valoresPrat11,
  valoresPrat12,
  valoresPrat13,
  valoresPrat14,
  valoresPrat15,
  valoresPrat16,
  valoresPrat17,
  valoresPrat18,
  valoresPrat19,
  valoresPrat20,
  valoresPrat21,
  valoresPrat22,
  valoresPrat23,
  valoresPrat24,
  valoresPrat25,
  valoresPrat26,
  valoresPrat27,
  valoresPrat28,
  valoresPrat29,
  valoresPrat30,
  valoresPrat31,
  valoresPrat32,
  valoresPrat33,
  valoresPrat34,
  valoresPrat35,
  valoresPrat36,
  valoresPrat37,
  valoresPrat38,
  valoresPrat39,
  valoresPrat40,
  valoresPrat41,
  valoresPrat42,
  valoresPrat43,
  valoresPrat44

) => {
    const app = express();
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    app.get('/sensores/valoresPrat1', (_, response) => {
        return response.json(valoresPrat1);
    });
    app.get('/sensores/valoresPrat2', (_, response) => {
        return response.json(valoresPrat2);
    });
    app.get('/sensores/valoresPrat3', (_, response) => {
        return response.json(valoresPrat3);
    });
    app.get('/sensores/valoresPrat4', (_, response) => {
        return response.json(valoresPrat4);
    });
    app.get('/sensores/valoresPrat5', (_, response) => {
        return response.json(valoresPrat5);
    });
    app.get('/sensores/valoresPrat6', (_, response) => {
        return response.json(valoresPrat6);
    });
    app.get('/sensores/valoresPrat7', (_, response) => {
        return response.json(valoresPrat7);
    });
    app.get('/sensores/valoresPrat8', (_, response) => {
        return response.json(valoresPrat8);
    });
    app.get('/sensores/valoresPrat9', (_, response) => {
        return response.json(valoresPrat9);
    });
    app.get('/sensores/valoresPrat10', (_, response) => {
        return response.json(valoresPrat10);
    });
    app.get('/sensores/valoresPrat11', (_, response) => {
        return response.json(valoresPrat11);
    });
    app.get('/sensores/valoresPrat12', (_, response) => {
        return response.json(valoresPrat12);
    });
    app.get('/sensores/valoresPrat13', (_, response) => {
        return response.json(valoresPrat13);
    });
    app.get('/sensores/valoresPrat14', (_, response) => {
        return response.json(valoresPrat14);
    });
    app.get('/sensores/valoresPrat15', (_, response) => {
        return response.json(valoresPrat15);
    });
    app.get('/sensores/valoresPrat16', (_, response) => {
        return response.json(valoresPrat16);
    });
    app.get('/sensores/valoresPrat17', (_, response) => {
        return response.json(valoresPrat17);
    });
    app.get('/sensores/valoresPrat18', (_, response) => {
        return response.json(valoresPrat18);
    });
    app.get('/sensores/valoresPrat19', (_, response) => {
        return response.json(valoresPrat19);
    });
    app.get('/sensores/valoresPrat20', (_, response) => {
        return response.json(valoresPrat20);
    });
    app.get('/sensores/valoresPrat21', (_, response) => {
        return response.json(valoresPrat21);
    });
    app.get('/sensores/valoresPrat22', (_, response) => {
        return response.json(valoresPrat22);
    });
    app.get('/sensores/valoresPrat23', (_, response) => {
        return response.json(valoresPrat23);
    });
    app.get('/sensores/valoresPrat24', (_, response) => {
        return response.json(valoresPrat24);
    });
    app.get('/sensores/valoresPrat25', (_, response) => {
        return response.json(valoresPrat25);
    });
    app.get('/sensores/valoresPrat26', (_, response) => {
        return response.json(valoresPrat26);
    });
    app.get('/sensores/valoresPrat27', (_, response) => {
        return response.json(valoresPrat27);
    });
    app.get('/sensores/valoresPrat28', (_, response) => {
        return response.json(valoresPrat28);
    });
    app.get('/sensores/valoresPrat29', (_, response) => {
        return response.json(valoresPrat29);
    });
    app.get('/sensores/valoresPrat30', (_, response) => {
        return response.json(valoresPrat30);
    });
    app.get('/sensores/valoresPrat31', (_, response) => {
        return response.json(valoresPrat31);
    });
    app.get('/sensores/valoresPrat32', (_, response) => {
        return response.json(valoresPrat32);
    });
    app.get('/sensores/valoresPrat33', (_, response) => {
        return response.json(valoresPrat33);
    });
    app.get('/sensores/valoresPrat34', (_, response) => {
        return response.json(valoresPrat34);
    });
    app.get('/sensores/valoresPrat35', (_, response) => {
        return response.json(valoresPrat35);
    });
    app.get('/sensores/valoresPrat36', (_, response) => {
        return response.json(valoresPrat36);
    });
    app.get('/sensores/valoresPrat37', (_, response) => {
        return response.json(valoresPrat37);
    });
    app.get('/sensores/valoresPrat38', (_, response) => {
        return response.json(valoresPrat38);
    });
    app.get('/sensores/valoresPrat39', (_, response) => {
        return response.json(valoresPrat39);
    });
    app.get('/sensores/valoresPrat40', (_, response) => {
        return response.json(valoresPrat40);
    });
    app.get('/sensores/valoresPrat41', (_, response) => {
        return response.json(valoresPrat41);
    });
    app.get('/sensores/valoresPrat42', (_, response) => {
        return response.json(valoresPrat42);
    });
    app.get('/sensores/valoresPrat43', (_, response) => {
        return response.json(valoresPrat43);
    });
    app.get('/sensores/valoresPrat44', (_, response) => {
        return response.json(valoresPrat44);
    });
}

(async () => {
const valoresPrat1 = [];
const valoresPrat2 = [];
const valoresPrat3 = [];
const valoresPrat4 = [];
const valoresPrat5 = [];
const valoresPrat6 = [];
const valoresPrat7 = [];
const valoresPrat8 = [];
const valoresPrat9 = [];
const valoresPrat10 = [];
const valoresPrat11 = [];
const valoresPrat12 = [];
const valoresPrat13 = [];
const valoresPrat14 = [];
const valoresPrat15 = [];
const valoresPrat16 = [];
const valoresPrat17 = [];
const valoresPrat18 = [];
const valoresPrat19 = [];
const valoresPrat20 = [];
const valoresPrat21 = [];
const valoresPrat22 = [];
const valoresPrat23 = [];
const valoresPrat24 = [];
const valoresPrat25 = [];
const valoresPrat26 = [];
const valoresPrat27 = [];
const valoresPrat28 = [];
const valoresPrat29 = [];
const valoresPrat30 = [];
const valoresPrat31 = [];
const valoresPrat32 = [];
const valoresPrat33 = [];
const valoresPrat34 = [];
const valoresPrat35 = [];
const valoresPrat36 = [];
const valoresPrat37 = [];
const valoresPrat38 = [];
const valoresPrat39 = [];
const valoresPrat40 = [];
const valoresPrat41 = [];
const valoresPrat42 = [];
const valoresPrat43 = [];
const valoresPrat44 = [];

  await serial(
    valoresPrat1,
    valoresPrat2,
    valoresPrat3,
    valoresPrat4,
    valoresPrat5,
    valoresPrat6,
    valoresPrat7,
    valoresPrat8,
    valoresPrat9,
    valoresPrat10,
    valoresPrat11,
    valoresPrat12,
    valoresPrat13,
    valoresPrat14,
    valoresPrat15,
    valoresPrat16,
    valoresPrat17,
    valoresPrat18,
    valoresPrat19,
    valoresPrat20,
    valoresPrat21,
    valoresPrat22,
    valoresPrat23,
    valoresPrat24,
    valoresPrat25,
    valoresPrat26,
    valoresPrat27,
    valoresPrat28,
    valoresPrat29,
    valoresPrat30,
    valoresPrat31,
    valoresPrat32,
    valoresPrat33,
    valoresPrat34,
    valoresPrat35,
    valoresPrat36,
    valoresPrat37,
    valoresPrat38,
    valoresPrat39,
    valoresPrat40,
    valoresPrat41,
    valoresPrat42,
    valoresPrat43,
    valoresPrat44
  );
  servidor(
    valoresPrat1,
    valoresPrat2,
    valoresPrat3,
    valoresPrat4,
    valoresPrat5,
    valoresPrat6,
    valoresPrat7,
    valoresPrat8,
    valoresPrat9,
    valoresPrat10,
    valoresPrat11,
    valoresPrat12,
    valoresPrat13,
    valoresPrat14,
    valoresPrat15,
    valoresPrat16,
    valoresPrat17,
    valoresPrat18,
    valoresPrat19,
    valoresPrat20,
    valoresPrat21,
    valoresPrat22,
    valoresPrat23,
    valoresPrat24,
    valoresPrat25,
    valoresPrat26,
    valoresPrat27,
    valoresPrat28,
    valoresPrat29,
    valoresPrat30,
    valoresPrat31,
    valoresPrat32,
    valoresPrat33,
    valoresPrat34,
    valoresPrat35,
    valoresPrat36,
    valoresPrat37,
    valoresPrat38,
    valoresPrat39,
    valoresPrat40,
    valoresPrat41,
    valoresPrat42,
    valoresPrat43,
    valoresPrat44
);
})();
