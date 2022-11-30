-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 30-11-2022 a las 18:29:17
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `casas_para_perros`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripcion_producto`
--

CREATE TABLE `descripcion_producto` (
  `id` int(11) NOT NULL,
  `id_descripcion` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `producto` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `linea` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `acabado` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `material` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `calibre` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `capacidad` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `colores` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `anclaje` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `vaciado` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `largoTotal` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `anchoTotal` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `altoTotal` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `diametroTotal` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `largoCont` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `anchoCont` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `altoCont` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `diametroCont` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `largoLetrero` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `altoLetrero` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `adicional` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `imagen` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `url_ml` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `url_amz` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `descripcion_producto`
--

INSERT INTO `descripcion_producto` (`id`, `id_descripcion`, `producto`, `descripcion`, `linea`, `acabado`, `material`, `calibre`, `capacidad`, `colores`, `anclaje`, `vaciado`, `largoTotal`, `anchoTotal`, `altoTotal`, `diametroTotal`, `largoCont`, `anchoCont`, `altoCont`, `diametroCont`, `largoLetrero`, `altoLetrero`, `adicional`, `imagen`, `url_ml`, `url_amz`) VALUES
(1, '07-CASAPEQUE-AV', 'CASA DE PLASTICO TERMICA PARA PERRO MINI MODELO PEQUE', 'FABRICADA EN POLIETILENO ROTOMOLDEADO CON DOBLE CAPA. TOLDO REMOVIBLE PARA FACILITAR LA LIMPIEZA TOTAL. FÁCIL DE DESARMAR Y DE LIMPIAR.', '', 'POLIETILENO ROTOMOLDEADO', 'POLIETILENO DE MEDIA DENSIDAD', '', '', 'AMPLIA VARIEDAD', 'DE PISO', '', '47', '33', '47', '', '', '', '', '', '', '', 'OPCIÓN DE COMBINAR COLORES DIFERENTES EN TECHO Y CUERPO DE CASA.', '07-CASAPEQUE-AV', NULL, NULL),
(2, '07-CASAPECAS-AV', 'CASA DE PLASTICO TERMICA PARA PERRO CHICO MODELO PECAS', 'FABRICADA EN POLIETILENO ROTOMOLDEADO CON DOBLE CAPA. TOLDO REMOVIBLE PARA FACILITAR LA LIMPIEZA TOTAL. FÁCIL DE DESARMAR Y DE LIMPIAR.', '', 'POLIETILENO ROTOMOLDEADO', 'POLIETILENO DE MEDIA DENSIDAD', '', '', 'AMPLIA VARIEDAD', 'DE PISO', '', '62', '41', '56', '', '', '', '', '', '', '', 'OPCIÓN DE COMBINAR COLORES DIFERENTES EN TECHO Y CUERPO DE CASA.', '07-CASAPECAS-AV', NULL, NULL),
(3, '07-CASAJIPPY-AV', 'CASA DE PLASTICO TERMICA PARA PERRO MEDIANO MODELO JIPPY', 'FABRICADA EN POLIETILENO ROTOMOLDEADO CON DOBLE CAPA. TOLDO REMOVIBLE PARA FACILITAR LA LIMPIEZA TOTAL. FÁCIL DE DESARMAR Y DE LIMPIAR.', '', 'POLIETILENO ROTOMOLDEADO', 'POLIETILENO DE MEDIA DENSIDAD', '', '', 'AMPLIA VARIEDAD', 'DE PISO', '', '76', '51', '68', '', '', '', '', '', '', '', 'OPCIÓN DE COMBINAR COLORES DIFERENTES EN TECHO Y CUERPO DE CASA.', '07-CASAJIPPY-AV', NULL, NULL),
(4, '07-CASACAMILA-AV', 'CASA DE PLASTICO TERMICA PARA PERRO GRANDE MODELO CAMILA', 'FABRICADA EN POLIETILENO ROTOMOLDEADO CON DOBLE CAPA. TOLDO REMOVIBLE PARA FACILITAR LA LIMPIEZA TOTAL. FÁCIL DE DESARMAR Y DE LIMPIAR.', '', 'POLIETILENO ROTOMOLDEADO', 'POLIETILENO DE MEDIA DENSIDAD', '', '', 'AMPLIA VARIEDAD', 'DE PISO', '', '102', '61', '89', '', '', '', '', '', '', '', 'OPCIÓN DE COMBINAR COLORES DIFERENTES EN TECHO Y CUERPO DE CASA.', '07-CASACAMILA-AV', NULL, NULL),
(5, '07-CASAGOOXY-AV', 'CASA DE PLASTICO TERMICA PARA PERRO GIGANTE MODELO GOOXY', 'FABRICADA EN POLIETILENO ROTOMOLDEADO CON DOBLE CAPA. TOLDO REMOVIBLE PARA FACILITAR LA LIMPIEZA TOTAL. FÁCIL DE DESARMAR Y DE LIMPIAR.', '', 'POLIETILENO ROTOMOLDEADO', 'POLIETILENO DE MEDIA DENSIDAD', '', '', 'AMPLIA VARIEDAD', 'DE PISO', '', '135', '93', '118', '', '', '', '', '', '', '', 'OPCIÓN DE COMBINAR COLORES DIFERENTES EN TECHO Y CUERPO DE CASA.', '07-CASAGOOXY-AV', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `descripcion_producto`
--
ALTER TABLE `descripcion_producto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `descripcion_producto`
--
ALTER TABLE `descripcion_producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
