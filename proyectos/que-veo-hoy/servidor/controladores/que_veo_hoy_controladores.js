var con = require("../lib/conexionbd");

function retrievePeliculas(req, res) {
    var sql = "SELECT SQL_CALC_FOUND_ROWS * FROM pelicula";
    var filtros = Object.keys(req.query);
    let whereCriteria = [];
    filtros = filtros.filter(filtro => !['pagina','cantidad','columna_orden','tipo_orden'].includes(filtro));
    filtros.forEach(filtro => {
        if (filtro=='titulo') {
            whereCriteria.push(filtro+' like \'%'+req.query[filtro]+'%\'');
        } else if (filtro=='genero') {
            whereCriteria.push('genero_id = '+req.query[filtro]);
        } else {
            whereCriteria.push(filtro+' = \''+req.query[filtro]+'\'');
        }
    });
    if (whereCriteria.length > 0) {
        sql += ' WHERE ' + whereCriteria.join(' AND ');
    }
    var queryColumnaOrden = req.query.columna_orden;
    var queryTipoOrden = req.query.tipo_orden;
    var queryCantidad = req.query.cantidad;
    var queryPagina = req.query.pagina;
    if (queryColumnaOrden) {
        
        sql += ' ORDER BY ' + queryColumnaOrden + ' ' + queryTipoOrden;
    }
    let offset = ((queryPagina-1) * queryCantidad);
    sql += ' LIMIT '+ offset + ', ' + queryCantidad;
    sql += ';';
    console.log('sql: ' + sql);
    con.query(sql, function (error, resultado) {
        con.query('SELECT FOUND_ROWS();', function(e, r) {
            if (error) {
                return res.status(500).send('Error del server ejecutando la query: ' + sql);
            }
            let jsonResponse = {
                'peliculas': resultado,
                'total': r[0]['FOUND_ROWS()']
            }
            return res.status(200).json(jsonResponse);
        })
    });
}

function retrieveGeneros(req, res) {
    var sql = "SELECT * FROM genero;"
    con.query(sql, function (error, resultado) {
        if (error) {
            return res.status(500).send('Error del server ejecutando la query: ' + sql);
        }
        return res.status(200).json({'generos': resultado});
    });
}

function obtenerInformacionDePelicula (req, res) {
    debugger;
    var queryPeliculas = 'SELECT p.* FROM pelicula p where p.id='+req.params.id+';';
    var queryActores = 'SELECT a.* FROM pelicula p INNER JOIN actor_pelicula ap ON ap.id_pelicula = p.id INNER JOIN actor a ON ap.id_actor = a.id where p.id='+req.params.id+';';
    var queryGenero = 'SELECT g.* FROM pelicula p INNER JOIN genero g ON p.genero_id=g.id where p.id='+req.params.id+';';
    con.query(queryPeliculas, function (errorPeliculas, resultadoPeliculas) {
        con.query(queryActores, function(errorActores, resultadoActores) {
            con.query(queryGenero, function(errorGenero, resultadoGenero) {
                if (errorGenero) {
                    return res.status(500).send('Error del server ejecutando la query: ' + queryGenero);
                }
                return res.status(200).json({
                    'pelicula': resultadoPeliculas[0],
                    'actores': resultadoActores,
                    'genero': resultadoGenero[0]
                });
            });
            if (errorActores) {
                return res.status(500).send('Error del server ejecutando la query: ' + queryActores);
            }
        });
        if (errorPeliculas) {
            return res.status(500).send('Error del server ejecutando la query: ' + queryPeliculas);
        }
        
        // pelicula = data.pelicula;
        //         actores = data.actores;
        //         genero = data.pelicula.nombre;
    });
};

function obtenerRecomendacion (req, res) {
    var genero = req.query.genero;
    var anioInicio = req.query.anio_inicio;
    var anioFin = req.query.anio_fin;
    var puntuacion = req.query.puntuacion;
    var filtros = [];
    debugger;
    var query = 'SELECT * FROM pelicula p';
    if (genero) {
        query += ' inner join genero g on p.genero_id=g.id'
        filtros.push(`g.nombre = '${genero}'`);
    }
    if (anioInicio && anioFin) {
        filtros.push(`p.anio BETWEEN '${anioInicio}' AND '${anioFin}'`)
    }
    if (puntuacion) {
        filtros.push(`p.puntuacion = ${puntuacion}`)
    }
    if (filtros.length > 0) {
        query += ' where ' + filtros.join(' and ');
    }
    con.query(query, function(error, resultados) {
        if (error) {
            return res.status(500).send('Error del server ejecutando la query: ' + queryPeliculas);
        }
        return res.status(200).json({
            'peliculas': resultados
        });
    });
}

module.exports = {
    retrievePeliculas,
    retrieveGeneros,
    obtenerInformacionDePelicula,
    obtenerRecomendacion
}