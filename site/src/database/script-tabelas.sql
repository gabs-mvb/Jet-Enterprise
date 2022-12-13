-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);


/*
comando para sql server - banco remoto - ambiente de produção
*/

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';


/* 
INSERT INTO prateleira(setor,fkEmpresa) VALUES
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Frios e congelados', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Mercearia', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Hortifruti', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Cuidados Pessoais', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1),
('Bebidas', 1);

-- FRIOS E CONGELADOS	
INSERT INTO Produto (nomeProduto, descricao) VALUES
('Mussarela','Mussarela 500G'),
('Queijo Prado','Queijo Prado 300G'),
('BATATA FRITA','Presunto Sadia 400G'),
('SALADA','Manteiga 1KG'),
('Requeijão','Requeijão 400G'),
('Iogurte de Morango','Iogurte de Morango 500G'),
('Sorvete Tentação','Sorvete Tentação 1L'),
('Hot Pocket','Hot Pocket de carne');

-- MERCEARIA	
INSERT INTO Produto (nomeProduto, descricao) VALUES
('Cereal Sucrilhos Kelloggs',null),
('Cereal Muslix Quacker',null),
('Arroz Branco Camil',null),
('Feijão Preto Camil',null),
('Azeitona Galo',null),
('Ketchup',null),
('Maionese',null),
('Sal Lebre', null),
('Óleo vegetal Soya', null),
('Achocolatado Nescau', null);

-- HORTIFRUTI
INSERT INTO Produto (nomeProduto, descricao) VALUES
('Tomate Italiano orgânico Taeq',null),
('Batata Baroa orgânica Taeq',null),
('Cenoura orgânica Taeq',null),
('Cebola Amarela orgânica Taeq',null),
('Alho orgânico Taeq',null),
('Banana prata',null),
('Maçã fuji',null),
('Morango orgânico', null),
('Alface Americano', null);

-- CUIDADOS PESSOAIS	
INSERT INTO Produto (nomeProduto) VALUES
('Pasta de Dente Colgate'),
('Fio Dental OralB'),
('Sabonete Palmolive'),
('Sabonete Dove'),
('Shampoo Pantene'),
('Condicionador Pantene'),
('Desodorante Dove');

-- BEBIDAS
INSERT INTO Produto (nomeProduto) VALUES
('Refrigerante Coca-Cola'),
('Refrigerante Coca-Cola Zero'),
('Energético Redbull'),
('Energético Redbull Sem açucar'),
('Refrigerante Fanta Laranja'),
('Refrigerante Fanta Guaraná'),
('Cerveja Heineken'),
('Cerveja Original'),
('Cerveja Amster Lager'),
('Chá Matte Limão');

INSERT INTO Prateleira_Produto(fkPrateleira, fkProduto) values
(1,1),
(2,2),
(3,3),
(4,4),
(5,5),
(6,6),
(7,7),
(8,8),
(9,9),
(10,10),
(11,11),
(12,12),
(13,13),
(14,14),
(15,15),
(16,16),
(17,17),
(18,18),
(19,19),
(20,20),
(21,21),
(22,22),
(23,23),
(24,24),
(25,25),
(26,26),
(27,27),
(28,28),
(29,29),
(30,30),
(31,31),
(32,32),
(33,33),
(34,34),
(35,35),
(36,36),
(37,37),
(38,38),
(39,39),
(40,40),
(41,41),
(42,42),
(43,43),
(44,44);
*/

SELECT * from dados_sensor order by idDado desc;

