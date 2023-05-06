create database if not exists Test;

use test;

CREATE TABLE docentes (
  id_docente int not null AUTO_INCREMENT,
  nombre VARCHAR(80),
  usuario VARCHAR(45),
  escuela VARCHAR(75),
  correo VARCHAR(45),
  contra VARCHAR(40),
  PRIMARY KEY(id_docente)
);

ALTER TABLE docentes AUTO_INCREMENT=100

CREATE TABLE alumnos (
  id_alumno INT NOT NULL AUTO_INCREMENT,
  id_docente INT,
  nombre VARCHAR(80),
  FOREIGN KEY (id_docente) REFERENCES docentes(id_docente),
  PRIMARY KEY (id_alumno)
);


insert into docentes values 
(null, 'Gonzalito Gomez Pineda', 'gonzalito3000', 'ENUFC', 'gonzalito@gmail.com', 'gonzalito123');

insert into alumnos values (1112, 'asdfasd');


select * from docentes, alumnos where docentes.id_docente = alumnos.id_docente