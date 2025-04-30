CREATE DATABASE IF NOT EXISTS sistema_login;
USE sistema_login;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS autenticacion (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) UNIQUE NOT NULL,
    correo_electronico VARCHAR(100) UNIQUE NOT NULL,
    contraseña_hash VARCHAR(255) NOT NULL,
    token_recuperacion VARCHAR(255) DEFAULT NULL,
    expiracion_token TIMESTAMP NULL,
    intentos_fallidos TINYINT UNSIGNED DEFAULT 0,
    bloqueado_hasta TIMESTAMP NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultimo_acceso TIMESTAMP NULL,
    estado ENUM('activo', 'inactivo', 'suspendido') DEFAULT 'activo',
    actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


USE sistema_login;
INSERT INTO usuarios (nombre_completo) 
VALUES ('Ana López');

-- Insertar en autenticación (login)
INSERT INTO autenticacion (
    id_usuario, 
    nombre_usuario, 
    correo_electronico, 
    contraseña_hash
) VALUES (
    LAST_INSERT_ID(), -- Obtiene el ID del usuario recién creado
    'Jose Eduardo Fiqueroa', 
    'ana@cua.uam.com', 
    '$2y$10$4' 
);