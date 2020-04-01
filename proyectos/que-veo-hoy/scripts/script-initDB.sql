CREATE DATABASE QueVeoHoy;
USE QueVeoHoy;
CREATE TABLE pelicula (
    id int not null,
    titulo varchar(50),
    anio int,
    duracion int(5),
    director varchar(400),
    fecha_lanzamiento date,
    puntuacion int(2),
    poster varchar(300),
    trama varchar(700),
    PRIMARY KEY (id)
)