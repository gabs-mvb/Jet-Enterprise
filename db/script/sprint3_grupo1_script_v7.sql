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
        descricao VARCHAR(45)
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
		idHistorico INT PRIMARY KEY IDENTITY(1,1),
		statusHistorico VARCHAR(45),
		dtHistorico DATETIME DEFAULT CURRENT_TIMESTAMP,
        titulo VARCHAR(45),
        setor VARCHAR(45),
        abastecimento int,
		estado VARCHAR(45),
        produto VARCHAR(45),
		fkDado INT FOREIGN KEY REFERENCES dado (idDado)
);
