-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2024 at 08:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pungutan_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `headers`
--

CREATE TABLE `headers` (
  `id` int(11) NOT NULL,
  `incoterms` varchar(50) NOT NULL,
  `valuta` varchar(50) NOT NULL,
  `kurs` decimal(12,4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `headers`
--

INSERT INTO `headers` (`id`, `incoterms`, `valuta`, `kurs`, `created_at`) VALUES
(1, 'Free on Board', 'US Dollar', 16232.0000, '2024-10-16 22:45:25'),
(4, 'Paid on Board', 'IDR', 15000.0000, '2024-10-17 06:49:53');

-- --------------------------------------------------------

--
-- Table structure for table `pungutan`
--

CREATE TABLE `pungutan` (
  `id` int(11) NOT NULL,
  `header_id` int(11) NOT NULL,
  `nilai` decimal(12,2) NOT NULL,
  `biaya_tambahan` decimal(12,2) DEFAULT 0.00,
  `biaya_pengurangan` decimal(12,2) DEFAULT 0.00,
  `voluntary_declaration` decimal(12,2) DEFAULT 0.00,
  `nilai_fob` decimal(12,2) DEFAULT NULL,
  `asuransi_di` enum('Luar Negeri','Dalam Negeri') DEFAULT NULL,
  `asuransi` decimal(12,2) DEFAULT 0.00,
  `freight` decimal(12,2) DEFAULT 0.00,
  `cif` decimal(12,2) DEFAULT NULL,
  `cif_rp` decimal(12,2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pungutan`
--

INSERT INTO `pungutan` (`id`, `header_id`, `nilai`, `biaya_tambahan`, `biaya_pengurangan`, `voluntary_declaration`, `nilai_fob`, `asuransi_di`, `asuransi`, `freight`, `cif`, `cif_rp`, `created_at`) VALUES
(2, 1, 119600.00, 0.00, 2850.00, 0.00, 116750.00, 'Luar Negeri', 637.14, 4978.00, 122365.14, 1986230952.48, '2024-10-16 23:43:26'),
(3, 1, 120000.00, 0.00, 3000.00, 0.00, 117000.00, 'Dalam Negeri', 637.14, 4978.00, 122615.14, 1990288952.48, '2024-10-17 06:19:16'),
(4, 1, 119600.00, 0.00, 2850.00, 0.00, 116750.00, 'Luar Negeri', 637.14, 4978.00, 122365.14, 1986230952.48, '2024-10-17 06:22:26'),
(5, 4, 119600.00, 0.00, 2850.00, 0.00, 116750.00, 'Luar Negeri', 637.14, 4978.00, 122365.14, 1835477100.00, '2024-10-17 06:50:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `headers`
--
ALTER TABLE `headers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pungutan`
--
ALTER TABLE `pungutan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `header_id` (`header_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `headers`
--
ALTER TABLE `headers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pungutan`
--
ALTER TABLE `pungutan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pungutan`
--
ALTER TABLE `pungutan`
  ADD CONSTRAINT `pungutan_ibfk_1` FOREIGN KEY (`header_id`) REFERENCES `headers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
