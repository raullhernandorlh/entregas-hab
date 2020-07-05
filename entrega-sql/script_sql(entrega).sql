-- usuarios(#id,nombre,apellidos,contrasena,direccion,role,email)
-- reservas(#id,codigo_reserva,duracion_reserva,precio,fecha_reserva,-id_restaurante,-id_usuario)
-- restaurante(#id,nombre,direccion,capacidad_maxima)
-- usuario_reserva_acompaña(#id,-id_usuario,-id_reserva)


USE reservasantipandemia;

SET FOREIGN_KEY_CHECKS =0;

CREATE TABLE usuarios (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	apellidos VARCHAR(150) NOT NULL,
	contrasena VARCHAR(50) UNIQUE NOT NULL,
	direccion VARCHAR(200) NOT NULL,
	role VARCHAR(50),
	email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE reservas (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	codigo_reserva int(5) ,
	fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	duracion_reserva int(1),
	precio DECIMAL(7, 2) DEFAULT 0,
	validar BOOLEAN DEFAULT false,
	id_restaurante INT UNSIGNED,
	FOREIGN KEY (id_restaurante) REFERENCES restaurantes(id),
	id_usuario INT UNSIGNED,
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE restaurantes (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	direccion VARCHAR (200) NOT NULL,
	capacidad_maxima INT(3) NOT NULL
);

CREATE TABLE usuario_reserva (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	id_usuario INT UNSIGNED,
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
	id_reserva INT UNSIGNED,
	FOREIGN KEY (id_reserva) REFERENCES reservas(id)
);



