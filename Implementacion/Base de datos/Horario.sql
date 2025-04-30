USE sistema_login;

CREATE TABLE IF NOT EXISTS horarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('barra_fria', 'menu_convencional') NOT NULL,
    grupo_usuario ENUM('alumno', 'profesor', 'administrativo') NOT NULL,
    dias SET('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes') NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    descripcion VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Horario prioritario para profesores (menú convencional)
INSERT INTO horarios (
    tipo,
    grupo_usuario,
    dias,
    hora_inicio,
    hora_fin,
    descripcion
) VALUES (
    'menu_convencional',
    'profesor',
    'Lunes,Martes,Miércoles,Jueves,Viernes',
    '11:00:00',
    '11:45:00',
    'DIA CON SERVICIO'
);

-- Horario general alumnos (barra fría)
INSERT INTO horarios (
    tipo,
    grupo_usuario,
    dias,
    hora_inicio,
    hora_fin,
    descripcion
) VALUES (
    'barra_fria',
    'alumno',
    'Lunes,Martes,Miércoles,Jueves,Viernes',
    '12:00:00',
    '14:30:00',
    'DIA SIN SERVICIO'
);



-- Eliminar horario de domingo (si no aplica)
DELETE FROM horarios 
WHERE dias LIKE '%Domingo%' AND tipo = 'menu_convencional';

-- Eliminar todos los horarios de un grupo específico
DELETE FROM horarios 
WHERE grupo_usuario = 'publico_general';