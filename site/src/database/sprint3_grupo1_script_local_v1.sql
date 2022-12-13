-- Active: 1663369181228@@127.0.0.1@3306@empresajet
drop DATABASE empresaJet;
CREATE DATABASE empresajet;
USE empresajet;

CREATE TABLE
    empresa (
        idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
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
        idPerfil INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(45) NOT NULL,
        senha VARCHAR(45) NOT NULL,
        nome VARCHAR(60) NOT NULL,
        email VARCHAR(50) NOT NULL,
        telefone VARCHAR(11),
        funcao VARCHAR(45) DEFAULT 'Administrador', CONSTRAINT chkFuncao CHECK (funcao in('Administrador','Usuario')),
        fkEmpresa INT,
        FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
    urlImagem LONGTEXT DEFAULT null 
    );
alter table perfil MODIFY column urlImagem LONGTEXT DEFAULT null;

-- PersonID int FOREIGN KEY REFERENCES Persons(PersonID)


    CREATE TABLE 
    prateleira (
        idPrateleira INT PRIMARY KEY AUTO_INCREMENT,
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
        fkEmpresa INT,  
        FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

CREATE TABLE
    produto (
        idProduto INT PRIMARY KEY AUTO_INCREMENT,
        nomeProduto VARCHAR(45) NOT NULL,
    );
    
CREATE TABLE 
	prateleira_produto (
		id INT AUTO_INCREMENT,
        fkPrateleira INT,
        FOREIGN KEY (fkPrateleira) REFERENCES prateleira (idPrateleira),
        fkProduto INT,
        FOREIGN KEY (fkProduto) REFERENCES produto (idProduto),
        PRIMARY KEY (id, fkPrateleira, fkProduto)
    );
   
CREATE TABLE
    dados_sensor(
        idDado INT PRIMARY KEY AUTO_INCREMENT,
        statusPrateleira INT,
        dtPrateleira DATETIME DEFAULT CURRENT_TIMESTAMP,
        fkPrateleira INT,
        FOREIGN KEY (fkPrateleira) REFERENCES prateleira (idPrateleira)
    );        
     
CREATE TABLE 
	historico_alerta (
		idHistorico INT PRIMARY KEY AUTO_INCREMENT,
		dtHistorico DATETIME DEFAULT CURRENT_TIMESTAMP,
		fkDado INT,
        FOREIGN KEY (fkPrateleira) REFERENCES Prateleira(idPrateleira)

);


   
    INSERT INTO dados_sensor (statusPrateleira, fkPrateleira) VALUES
    (3, 1),
    (3, 2),
    (2, 3),
    (3, 4),
    (3, 5),
    (2, 6),
    (3, 7),
    (3, 8),
    (2, 9),
    (3, 10),
    (3, 11),
    (2, 12),
    (3, 13),
    (3, 14),
    (2, 15),
    (3, 16),
    (3, 17),
    (2, 18),
    (3, 19),
    (3, 20),
    (2, 21),
    (2, 22),
    (3, 23),
    (2, 24),
    (3, 25),
    (2, 26),
    (3, 27),
    (3, 28),
    (3, 29),
    (2, 30),
    (3, 31),
    (3, 32),
    (3, 33),
    (2, 34),
    (2, 35),
    (3, 36),
    (3, 37),
    (3, 38),
    (2, 39),
    (3, 40),
    (3, 41),
    (2, 42),
    (3, 43),
    (3, 44);
    

      INSERT INTO dados_sensor (statusPrateleira, fkPrateleira) VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (3, 4),
    (1, 5),
    (2, 6),
    (3, 7),
    (3, 8),
    (2, 9),
    (3, 10),
    (1, 11),
    (2, 12),
    (3, 13),
    (1, 14),
    (2, 15),
    (3, 16),
    (3, 17),
    (1, 18),
    (3, 19),
    (1, 20),
    (2, 21),
    (2, 22),
    (3, 23),
    (2, 24),
    (1, 25),
    (2, 26),
    (3, 27),
    (3, 28),
    (3, 29),
    (2, 30),
    (1, 31),
    (3, 32),
    (3, 33),
    (1, 34),
    (2, 35),
    (3, 36),
    (3, 37),
    (1, 38),
    (2, 39),
    (1, 40),
    (3, 41),
    (1, 42),
    (3, 43),
    (1, 44);

        
        
INSERT INTO dados_sensor(statusPrateleira,fkPrateleira,dtPrateleira) VALUES
('0', 43,'2022-07-23 21:10:15'),
('1', 40,'2022-07-23 23:10:15');


INSERT INTO dados_sensor(statusPrateleira,fkPrateleira,dtPrateleira) VALUES
('2', 44,'2022-07-23 21:10:15');

INSERT INTO dados_sensor(statusPrateleira,fkPrateleira,dtPrateleira) VALUES
('3', 40,'2022-07-23 21:10:15');


INSERT INTO dados_sensor(statusPrateleira,fkPrateleira,dtPrateleira) VALUES
('2', 40,'2022-07-23 00:30:15');

INSERT INTO dados_sensor(statusPrateleira,fkPrateleira,dtPrateleira) VALUES
('1', 40,'2022-07-23 03:30:15');