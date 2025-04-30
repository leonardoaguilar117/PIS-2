CREATE DATABASE Inventario;
USE Inventario;

CREATE TABLE IF NOT EXISTS ingredientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cantidad DECIMAL(10,2) NOT NULL DEFAULT 0.00, -- Soporta decimales (ej: 1.5 kg)
    unidad_medida ENUM('kg', 'litro', 'unidad', 'gramo', 'paquete') NOT NULL,
    categoria ENUM('lácteo', 'vegetal', 'proteína', 'granos', 'fruta', 'especia', 'bebida_base', 'panadería') NOT NULL,
    fecha_vencimiento DATE,
    proveedor VARCHAR(100), -- Nombre del proveedor directo (sin tabla separada)
    stock_minimo DECIMAL(10,2) NOT NULL, -- Alerta cuando se alcance este valor
    ubicacion_almacen VARCHAR(50), -- Ej: "Estante A3", "Refrigerador 1"
    disponible BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO ingredientes (
    nombre, 
    cantidad, 
    unidad_medida, 
    categoria, 
    fecha_vencimiento, 
    proveedor, 
    stock_minimo, 
    ubicacion_almacen
) VALUES (
    'Leche entera alpura',
    15.5,
    'litro',
    'lácteo',
    '2024-03-10',
    'Lácteos Frescos S.A.',
    5.0,
    'Refrigerador 2'
);


INSERT INTO ingredientes (
    nombre, 
    cantidad, 
    unidad_medida, 
    categoria, 
    proveedor, 
    stock_minimo, 
    ubicacion_almacen
) VALUES (
    'Arroz blanco',
    50.0,
    'kg',
    'granos',
    'Distribuidora Cereales',
    10.0,
    'Estante B2'
);




