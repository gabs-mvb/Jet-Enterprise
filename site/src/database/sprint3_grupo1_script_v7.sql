-- Active: 1663369181228@@127.0.0.1@3306@empresajet
CREATE DATABASE empresajet;
USE empresajet;

CREATE TABLE
    empresa (
        idEmpresa INT PRIMARY KEY IDENTITY(1,1),
        nomeEmpresa VARCHAR(45) NOT NULL,
        estado CHAR(2) NOT NULL,
        cidade VARCHAR(45) NOT NULL,
        bairro VARCHAR(45),
        logradouro VARCHAR(80) NOT NULL,
        cep CHAR(8) NOT NULL,
        complemento VARCHAR(45),
        cnpj CHAR(14) NOT NULL
    );


CREATE TABLE
    perfil (
        idPerfil INT PRIMARY KEY IDENTITY(1,1),
        username VARCHAR(45) NOT NULL,
        senha VARCHAR(45) NOT NULL,
        nome VARCHAR(60) NOT NULL,
        email VARCHAR(50) NOT NULL,
        telefone VARCHAR(11),
        funcao VARCHAR(45) DEFAULT 'Administrador', CONSTRAINT chkFuncao CHECK (funcao in('Administrador','Usuário')),
        fkEmpresa INT FOREIGN KEY REFERENCES Empresa(idEmpresa)
    );

-- PersonID int FOREIGN KEY REFERENCES Persons(PersonID)


    CREATE TABLE 
    prateleira (
        idPrateleira INT PRIMARY KEY IDENTITY(1,1),
        setor VARCHAR(45) NOT NULL,CONSTRAINT chkSetor CHECK 
            (setor in(
                'Frios e congelados',
                'Mercearia',
                'Bebidas',
                'Doces e lanches',
                'Cuidados pessoais',
                'Hortifruti',
                'Carnes',
                'Limpeza',
                'Infantil',
                'Pets',
                'Outros'
            )),
        fkEmpresa INT FOREIGN KEY REFERENCES Empresa(idEmpresa)
);

CREATE TABLE
    produto (
        idProduto INT PRIMARY KEY IDENTITY(1,1),
        nomeProduto VARCHAR(45) NOT NULL,
    );
    
CREATE TABLE 
	prateleira_produto (
		id INT IDENTITY(1,1),
        fkPrateleira INT FOREIGN KEY REFERENCES prateleira (idPrateleira),
        fkProduto INT FOREIGN KEY REFERENCES produto (idProduto),
        PRIMARY KEY (id, fkPrateleira, fkProduto)
    );
   
CREATE TABLE
    dados_sensor(
        idDado INT PRIMARY KEY IDENTITY(1,1),
        statusPrateleira INT,
        dtPrateleira DATETIME DEFAULT CURRENT_TIMESTAMP,
        fkPrateleira INT FOREIGN KEY REFERENCES prateleira (idPrateleira)
    );        
     
CREATE TABLE 
	historico_alerta (
		idHistorico INT PRIMARY KEY AUTO_INCREMENT,
		statusHistorico VARCHAR(45),
		dtHistorico DATETIME DEFAULT CURRENT_TIMESTAMP,
        titulo VARCHAR(45),
        setor VARCHAR(45),
        abastecimento int,
		estado VARCHAR(45),
		fkPrateleira INT, FOREIGN KEY (fkPrateleira) REFERENCES prateleira (idPrateleira)
);
insert into historico_alerta(statusHistorico,titulo,setor,abastecimento,estado,produto) VALUES
('n sei oque vai aqui','Falta de estoque em tal lugar','Congelados',65,'Alerta','Coca-Cola Congelada'),
('n sei oque vai aqui','Falta de estoque em tal lugar','Assados',25,'Critico','Frango');
drop table historico_alerta;
DESC Sensor;
	
-- Exibir dados das tabelas
SELECT * FROM Perfil;

SELECT * FROM historico_alerta ha
    JOIN prateleira prat ON ha.`fkPrateleira` = prat.`idPrateleira`
        JOIN prateleira_produto pp ON pp.`fkPrateleira` = prat.`idPrateleira`
            JOIN produto prod ON prod.`idProduto` = pp.`fkProduto`
                ;

desc historico_alerta;
SELECT * FROM Empresa;
SELECT * FROM Dado;
SELECT * FROM Produto;
SELECT * FROM Sensor;
SELECT * FROM Prateleira;
SELECT * FROM Historico_Alerta;


SELECT idHistorico, produto, setor, abastecimento, estado, dtHistorico FROM historico_alerta
    JOIN dados_sensor on fkPrateleira = idPrateleira
        JOIN empresa on fkEmpresa = idEmpresa where idEmpresa = ${ID_EMPRESA};