Use QueVeoHoy;
CReATE TABLE IF NOT EXISTS actor (
    id int(10) NOT NULL auto_increment,
    nombre varchar(70),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS actor_pelicula (
    id int(10) NOT NULL auto_increment,
    id_actor int (10),
    id_pelicula int(10),
    PRIMARY KEY (id)
);

ALTER TABLE actor_pelicula
ADD FOREIGN KEY (id_pelicula) REFERENCES pelicula(id);

ALTER TABLE actor_pelicula
ADD FOREIGN KEY (id_actor) REFERENCES actor(id);