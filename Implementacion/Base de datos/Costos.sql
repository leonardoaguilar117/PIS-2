USE sistema_login;

CREATE TABLE IF NOT EXISTS productos_cafeteria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo ENUM('barra_fria', 'menu_convencional') NOT NULL,
    costo_porcion DECIMAL(8,2) NOT NULL,  -- Costo de producción (ej: $2.50)
    precio_venta DECIMAL(8,2) NOT NULL,   -- Precio al público (ej: $5.00)
    componentes TEXT,  -- Ingredientes o descripción de la comida completa
    fecha_disponibilidad DATE,  -- Fecha de validez para menús aleatorios
    disponible BOOLEAN DEFAULT TRUE,
    ultima_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO productos_cafeteria (
    nombre, 
    tipo, 
    costo_porcion, 
    precio_venta, 
    componentes
) VALUES (
    'Sandwich Jamón y Queso', 
    'barra_fria', 
    10.50, 
    12, 
    'Pan integral, jamón de pavo, queso cheddar, lechuga'
);

INSERT INTO productos_cafeteria (
    nombre, 
    tipo, 
    costo_porcion, 
    precio_venta, 
    componentes, 
    fecha_disponibilidad
) VALUES (
    'Menú del Día 10/24', 
    'menu_convencional', 
    2.75, 
    6.00, 
    'Pollo asado, arroz , ensalada , flan', 
    '2025-10-24'  -- Solo disponible en esta fecha
);


