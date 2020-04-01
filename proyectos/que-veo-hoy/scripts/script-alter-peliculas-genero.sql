USE QueVeoHoy;

ALTER TABLE pelicula
    ADD genero_id int not null;

ALTER TABLE pelicula
ADD FOREIGN KEY (genero_id) REFERENCES genero(id);