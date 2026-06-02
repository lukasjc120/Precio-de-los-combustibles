CREATE DATABASE precio_nafta;
USE precio_nafta;

CREATE TABLE estaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    empresa VARCHAR(50) NOT NULL,
    provincia VARCHAR(50) NOT NULL,
    localidad VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    latitud DECIMAL(10,7),
    longitud DECIMAL(10,7)
);

CREATE TABLE precios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estacion_id INT NOT NULL,
    combustible VARCHAR(50) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (estacion_id)
        REFERENCES estaciones(id)
        ON DELETE CASCADE
);