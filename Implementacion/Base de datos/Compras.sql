USE sistema_login;

CREATE TABLE IF NOT EXISTS compras (
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL, -- Relación con la tabla usuarios/autenticación
    fecha_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_compra DECIMAL(10,2) NOT NULL, -- Total en dinero
    metodo_pago ENUM('efectivo', 'tarjeta', 'app_universidad', 'beca_comedor') NOT NULL,
    comprobante VARCHAR(50) UNIQUE, -- Número de ticket o transacción
    estado ENUM('completado', 'cancelado', 'reembolsado') DEFAULT 'completado' 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS detalle_compras (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_compra INT NOT NULL,
    producto_id INT NOT NULL, -- Relación con productos_cafeteria
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(8,2) NOT NULL, -- Precio al momento de la compra (histórico)
    FOREIGN KEY (id_compra) REFERENCES compras(id_compra) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos_cafeteria(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

