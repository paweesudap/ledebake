-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2022 at 03:24 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fname`, `lname`) VALUES
(9, 'nudeezanarak@gmail.com', '$2b$10$FNfpSkG20V22/X5PPKGJX.TI41aNWnMFW8LALV429O90/uwnwo1Lm', 'nd', 'psr'),
(10, 'yy@gmail.com', '$2b$10$6BpzB4GjvAnX0LVNSyHtS.4hk/eC1JlLhoR6gmuyadLNdFVJeyaOq', 'jade', 'jj'),
(12, 'nudeeza555+@gmail.com', '$2b$10$uIquUEvVLVtksHtxvr9F5ew/z82E7kjzJCt.y.7GxHkfTFgSBuzAm', 'a', 'a'),
(13, 'nudeeza555+@gmail.com', '$2b$10$SoxJVAeVd689f3rmEV.Ga.pQd4.WGH16SS2EY9RZ.Tak1CsfNmori', '', 'a'),
(14, 'nudeeza555+@gmail.com', '$2b$10$SuT/gZvTUCFFklBw09tdreZ0pKDtu21fNEdr9IDJSuipW5OswKAx.', '', 'a'),
(15, 'nudeeza555+@gmail.com', '$2b$10$t0Ef8qpbzVOgdRQIitjnC.YkLxknahUTFZUaTrdM2Cz5i6K34l1sS', '', 'a'),
(16, 'nudeeza555+@gmail.com', '$2b$10$iu1nSye4ZueI2V6e5pT/Iu6ducxM7Hw9w.3N4jM3mgrElTzOTpO5m', '', 'a'),
(17, 'nudeeza555+@gmail.com', '$2b$10$6vKGuJaEew1G2Z/BTRAlzu0WF55hqQTAeM0KTOvt8eV/9VBc.q9zu', '', 'a'),
(18, 'nudeeza555+@gmail.com', '$2b$10$OkKNQj.FRJkp8E4eGhlLluTh91QTsvt5P3.BnNg.Q0GdqTqd3hWh2', 'dgdd', 'a'),
(19, 'nudeeza555+@gmail.com', '$2b$10$hTuAfQwS5LWB5LB5bi/XtObWaqeyrdBjYWe33FE.L1O2XC13fFkzS', 'dgdd', 'a'),
(20, 'nudeeza555+@gmail.com', '$2b$10$ZsFIcSJ1Ee7hFtYUIVv8reo3tqE03k4JspPoKkKLC9UCzrp6RdgOq', 'dgdd', 'a'),
(21, 'k5@gmail.com', '$2b$10$KC2dbcryMJloT0rXWD/CWO2X/x.CpHtlLFbpW8g7Vj9NB9RegnuWq', 'dfa', 'fa'),
(22, 'tlow@gmail.com', '$2b$10$iN5NjvU2B5D/ceTV9giYeevN5yOjaHormeBNH3nT4ZabUcClH5M4u', 'das', 'daf'),
(23, 'tlow@gmail.com', '$2b$10$UMo2fijWAp1Py4YWA6Kv2uRR.9vStRn6DnZUcg/eVzqZKun7a7gdq', 'das', 'daf'),
(24, 'tlow@gmail.com', '$2b$10$..c5lhlssDduCHTzFGWsSel2PKIjRZ6aH6gGzErhbuyofu49fzbtW', 'das', 'daf'),
(25, '', '$2b$10$ZXFo31L.KL60jvu9fsjAdeuNIEj3szO3UiRMlR/dcYLMH23FFd3Ku', '', ''),
(26, 'fsdff@gmail.com', '$2b$10$8W/H2v9NBm4I2fV/Ol7oHeoK9ios9JOqpFy3JNSQyOAT4vH6z1yHi', 'ads', 'ff'),
(27, 'k55@gmail.com', '$2b$10$ephUPzJryUziiS8NjAL0IOgqyIlVsd8OzZcjDsSH6x9FrweCvYIq2', 'ui', 'sd'),
(28, 'da@gmail.com', '$2b$10$m27uq20UaoQZsjIfwmOouu6hlk4JLyt8drFkn8ZJhyzcxzmc7FnfO', '', ''),
(29, 'l@gmail.com', '$2b$10$04hTBsEMrZtHqrY3L.jU0.0WbPvVS7dQmG3j42vvpASAI7HJRvzLu', 'gh', 'ko'),
(30, '', '$2b$10$.C9wIErBIj8lgADTxdi8.uueTxQuE.4ZpIUMqmLAMc0IrxzzSWpcy', '', ''),
(31, '', '$2b$10$aYXl9tzQaJb1I7HBD/K6PuW/HVVkjO4kPtEA.pnVk9dnPDLK0gyGu', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
