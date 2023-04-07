CREATE TABLE libros (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  anio_publicacion INTEGER NOT NULL,
  editorial VARCHAR(255) NOT NULL,
  disponible BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE prestamos (
  id SERIAL PRIMARY KEY,
  libro_id INTEGER NOT NULL,
  usuario_id INTEGER NOT NULL,
  fecha_prestamo TIMESTAMP NOT NULL DEFAULT NOW(),
  fecha_devolucion TIMESTAMP,
  FOREIGN KEY (libro_id) REFERENCES libros(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
