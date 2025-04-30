USE sistema_login;

CREATE TABLE IF NOT EXISTS horarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('barra_fria', 'menu_convencional') NOT NULL,
    grupo_usuario ENUM('alumno', 'profesor', 'administrativo', 'publico_general') NOT NULL,
    dias SET('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo') NOT NULL,
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
    'Acceso exclusivo para profesores'
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
    'Servicio estándar para estudiantes'
);

-- Horario fin de semana (público general)
INSERT INTO horarios (
    tipo,
    grupo_usuario,
    dias,
    hora_inicio,
    hora_fin,
    descripcion
) VALUES (
    'menu_convencional',
    'publico_general',
    'Sábado,Domingo',
    '09:00:00',
    '15:00:00',
    'Menú familiar los fines de semana'
);

-- Eliminar horario de domingo (si no aplica)
DELETE FROM horarios 
WHERE dias LIKE '%Domingo%' AND tipo = 'menu_convencional';

-- Eliminar todos los horarios de un grupo específico
DELETE FROM horarios 
WHERE grupo_usuario = 'publico_general';