-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2019 a las 22:15:46
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clandestinobd`
--
CREATE DATABASE IF NOT EXISTS `clandestinobd` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `clandestinobd`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id_admin` int(10) UNSIGNED NOT NULL,
  `usuario` varchar(15) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `root` int(1) NOT NULL,
  `habilitado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id_admin`, `usuario`, `contraseña`, `root`, `habilitado`) VALUES
(1, 'root', 'dc76e9f0c0006e8f919e0c515c66dbba3982f785', 1, 1),
(2, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bebestibles`
--

CREATE TABLE `bebestibles` (
  `id_bebestible` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `precio` int(10) NOT NULL,
  `cc` int(10) NOT NULL,
  `imagen` varchar(40) NOT NULL,
  `disponible` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `bebestibles`
--

INSERT INTO `bebestibles` (`id_bebestible`, `nombre`, `categoria`, `precio`, `cc`, `imagen`, `disponible`) VALUES
(1, 'Chimbombo', 'Vinos', 2500, 300, 'chim.jpg', 1),
(2, 'Johnnie Walker', 'Whisky', 40000, 750, 'walker.jpg', 1),
(3, 'Jim Beam', 'Whisky', 30000, 700, 'jim.jpg', 1),
(5, 'Cabernet Sauvignon Gran 120', 'Vinos', 1290, 750, '120.jpg', 1),
(8, 'Martini Blanco', 'Destilados', 5000, 1503, 'martiniblanco.jpg', 0),
(9, 'Lalala', 'Cervezas', 100, 200, 'asd12', 0),
(10, 'Kem Piña', 'Bebidas', 1250, 1500, 'kem.jpg', 1),
(11, 'Fanta', 'Bebidas', 690, 250, 'fanta.jpg', 1),
(12, 'Bilz', 'Bebidas', 1100, 1000, 'bilz.jpg', 1),
(13, 'Royal Guard', 'Cervezas', 1290, 500, 'royal.png', 1),
(14, 'Kunstmann', 'Cervezas', 1290, 500, 'kunst.jpg', 1),
(15, 'Heineken', 'Cervezas', 1290, 750, 'heineken.jpg', 1),
(16, 'Sol', 'Cervezas', 1290, 750, 'sol.jpg', 1),
(17, 'Escudo Lata', 'Cervezas', 990, 750, 'escudo.jpg', 1),
(18, 'Royal Guard', 'Cervezas', 990, 750, 'royalguard.jpg', 1),
(19, 'Cortes', 'Cervezas', 990, 750, 'cortes.jpg', 1),
(20, 'Martensg', 'Cervezas', 990, 500, 'martensg.jpg', 1),
(21, 'Absolut Limon', 'Destilados', 1490, 700, 'absolutcitron.jpg', 1),
(22, 'Absolut Cherry', 'Destilados', 1490, 700, 'absolutcherry.jpg', 1),
(23, 'Absolut', 'Destilados', 1490, 700, 'absolut.jpg', 1),
(24, 'Wybroroka', 'Destilados', 1590, 1250, 'wyboroka.jpg', 1),
(25, 'Hoegaa', 'Cervezas', 1200, 700, 'hoegaa.jpg', 1),
(26, 'Kross', 'Cervezas', 1000, 700, 'kross.jpg', 1),
(27, 'Bear Beer', 'Cervezas', 750, 500, 'bearbeer.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `otros`
--

CREATE TABLE `otros` (
  `id_otro` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `precio` int(10) NOT NULL,
  `imagen` varchar(40) NOT NULL,
  `disponible` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `otros`
--

INSERT INTO `otros` (`id_otro`, `nombre`, `precio`, `imagen`, `disponible`) VALUES
(1, 'Vasos Plasticos', 1000, 'vasos.jpg', 1),
(2, 'Hielo Bolsa', 2000, 'hielo.jpg', 0),
(3, 'Quaker ', 9999, 'quaker.jpg', 1),
(4, 'Vaso de mega Plastico', 12000, 'hielo.jpg', 0),
(7, 'RedBull 0 Azucar', 1490, 'bullceleste.jpg', 1),
(8, 'Espumante Valdivieso', 2190, 'espumante.jpg', 1),
(9, 'Gatored Roja 500 Ml', 1200, 'gatorade.jpg', 1),
(10, 'RedBull', 1490, 'redbull.jpg', 1),
(11, 'Pack Bebidas CCU', 4990, 'bebidas15.jpg', 1),
(12, 'Pack Coronas', 4990, 'packcorona.jpg', 1),
(13, 'Promocion Alto del Carmen + Bebida', 3490, 'promoalto.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promocion`
--

CREATE TABLE `promocion` (
  `id_promocion` int(10) UNSIGNED NOT NULL,
  `descripcion` varchar(25) NOT NULL,
  `precio_anterior` int(10) NOT NULL,
  `precio_actual` int(10) NOT NULL,
  `imagen` varchar(40) NOT NULL,
  `disponible` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `promocion`
--

INSERT INTO `promocion` (`id_promocion`, `descripcion`, `precio_anterior`, `precio_actual`, `imagen`, `disponible`) VALUES
(1, 'Coca Cola ', 3500, 2990, 'cocacola.jpg', 1),
(2, 'Mentholatum', 10000, 5000, 'mentolathum.jpg', 1),
(3, 'Ron Dorado + Coca Cola', 5000, 3490, 'dorado.jpg', 1),
(4, 'Coca cola + Coca cola', 9000, 8000, 'cocacola.jpg', 0),
(9, 'Pack Bebidas CCU', 4990, 3490, 'bebidas15.jpg', 1),
(11, 'Pack Coronas', 5990, 4990, 'packcorona.jpg', 0),
(13, 'Promocion Alto del Carmen', 5990, 3490, 'promoalto.jpg', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indices de la tabla `bebestibles`
--
ALTER TABLE `bebestibles`
  ADD PRIMARY KEY (`id_bebestible`);

--
-- Indices de la tabla `otros`
--
ALTER TABLE `otros`
  ADD PRIMARY KEY (`id_otro`);

--
-- Indices de la tabla `promocion`
--
ALTER TABLE `promocion`
  ADD PRIMARY KEY (`id_promocion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id_admin` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `bebestibles`
--
ALTER TABLE `bebestibles`
  MODIFY `id_bebestible` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `otros`
--
ALTER TABLE `otros`
  MODIFY `id_otro` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `promocion`
--
ALTER TABLE `promocion`
  MODIFY `id_promocion` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
