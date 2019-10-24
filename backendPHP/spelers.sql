-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Gegenereerd op: 24 okt 2019 om 10:06
-- Serverversie: 5.7.28
-- PHP-versie: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hestiabi_modx1`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `ap_form_11559`
--

CREATE TABLE `ap_form_11559` (
  `id` int(11) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date_updated` datetime DEFAULT NULL,
  `ip_address` varchar(15) DEFAULT NULL,
  `status` int(4) UNSIGNED NOT NULL DEFAULT '1',
  `resume_key` varchar(10) DEFAULT NULL,
  `element_10_1` text COMMENT 'Normal Name - First',
  `element_10_2` text COMMENT 'Normal Name - Last',
  `element_4` text COMMENT 'Single Line Text',
  `element_2` date DEFAULT NULL COMMENT 'Date',
  `element_5` smallint(4) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Drop Down',
  `element_3_1` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 1',
  `element_3_2` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 2',
  `element_3_3` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 3',
  `element_3_4` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 4',
  `element_3_5` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 5',
  `element_3_6` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 6',
  `element_3_7` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 7',
  `element_3_9` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 9',
  `element_3_8` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 8',
  `element_7_1` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 1',
  `element_7_2` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 2',
  `element_7_3` tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Checkbox - 3',
  `element_6` text COMMENT 'Single Line Text',
  `element_9` text COMMENT 'Single Line Text',
  `element_11` text COMMENT 'File Upload'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `ap_form_11559`
--

INSERT INTO `ap_form_11559` (`id`, `date_created`, `date_updated`, `ip_address`, `status`, `resume_key`, `element_10_1`, `element_10_2`, `element_4`, `element_2`, `element_5`, `element_3_1`, `element_3_2`, `element_3_3`, `element_3_4`, `element_3_5`, `element_3_6`, `element_3_7`, `element_3_9`, `element_3_8`, `element_7_1`, `element_7_2`, `element_7_3`, `element_6`, `element_9`, `element_11`) VALUES
(43, '2017-05-13 10:05:00', '2018-12-03 12:45:25', '84.194.92.125', 1, NULL, 'Frank', 'Test', '63677', '1971-10-06', 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, '1m88', '', 'User.png');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `ap_form_11559`
--
ALTER TABLE `ap_form_11559`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ip_address` (`ip_address`),
  ADD KEY `date_created` (`date_created`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `ap_form_11559`
--
ALTER TABLE `ap_form_11559`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
