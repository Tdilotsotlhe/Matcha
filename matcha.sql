-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 11, 2018 at 06:29 AM
-- Server version: 5.7.23
-- PHP Version: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `matcha`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comms_id` int(255) NOT NULL,
  `friend_id` int(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `commtstamp` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `comimg_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comms_id`, `friend_id`, `comment`, `commtstamp`, `comimg_id`) VALUES
(3, 1, 'asdasd', '2018-11-17 12:01:09.177055', 50),
(4, 1, 'asdasdasfgasg', '2018-11-17 12:01:13.040570', 50),
(6, 1, 'zxvzxv', '2018-11-17 15:48:45.768209', 53),
(7, 1, 'fdfdhbfddfbbdf', '2018-11-17 16:02:32.677313', 50),
(8, 1, 'asdasdasd', '2018-11-17 16:11:02.855319', 63),
(9, 1, 'sfsfsfsf', '2018-11-17 16:11:09.005210', 62),
(10, 1, 'sddgd', '2018-11-17 16:11:13.445542', 61),
(11, 1, 'asfasfasfasfgfjtryuet', '2018-11-17 16:11:39.746182', 63),
(12, 18, 'dagdg', '2018-11-18 10:23:26.886451', 51),
(13, 18, 'cvvcvn', '2018-11-18 10:27:09.116303', 45),
(14, 18, 'sdgsdgsdg', '2018-11-18 10:27:32.507755', 36),
(15, 18, 'sdgsdgsdgdfh', '2018-11-18 10:29:19.020301', 36),
(16, 18, 'fgdfgss', '2018-11-18 10:30:04.251268', 60),
(17, 18, 'sdgsdg', '2018-11-18 10:30:47.666301', 61),
(18, 18, 'aaaaa', '2018-11-18 10:32:35.233795', 57),
(19, 1, 'ffffff', '2018-11-18 10:33:23.817121', 63),
(20, 1, 'kkkkkk', '2018-11-18 10:33:41.624716', 63),
(21, 18, 'dfhdfh', '2018-11-18 10:34:51.719809', 51),
(22, 1, 'asdasdasd', '2018-11-18 13:36:58.615809', 65),
(23, 1, 'asdasdasddfhdfhdfhdfhdfh', '2018-11-18 13:37:05.175585', 65),
(24, 1, 'dfhdfhdfh', '2018-11-18 13:38:53.565587', 67),
(25, 1, 'sfsfhfsh', '2018-11-19 06:56:22.956808', 69),
(26, 1, 'tjgfgjfjfg', '2018-11-19 06:56:30.837933', 68),
(27, 1, '', '2018-11-19 08:09:10.362775', 42),
(28, 1, 'rjfhj', '2018-11-19 08:11:13.481680', 67),
(29, 1, '', '2018-11-22 13:20:53.980329', 70),
(30, 1, 'sfasfas', '2018-11-22 13:21:05.754134', 70),
(31, 1, 'rdgfshsfdg', '2018-11-23 08:10:12.303418', 70);

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `img_id` int(255) NOT NULL,
  `img_name` varchar(255) NOT NULL,
  `users_id` int(255) NOT NULL,
  `uptime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`img_id`, `img_name`, `users_id`, `uptime`) VALUES
(5, '1$memes-face-png-2.png', 1, '2018-11-07 08:16:23.678027'),
(6, '1$Screen Shot 2018-11-03 at 14.06.40.png', 1, '2018-11-07 08:16:29.470490'),
(7, '1$herpderp.png', 1, '2018-11-07 08:16:41.717686'),
(8, '1$photo-1533467915241-eac02e856653.jpeg', 1, '2018-11-09 06:11:05.491937'),
(34, '1$252.png', 1, '2018-11-09 07:32:18.585583'),
(36, '1$cxncn.jpeg', 1, '2018-11-11 12:22:58.579997'),
(38, '1$qq.jpeg', 1, '2018-11-11 12:24:25.339209'),
(41, '1$penguin.png', 1, '2018-11-11 13:53:49.198904'),
(42, '1$fgfgj.jpeg', 1, '2018-11-12 08:33:14.964764'),
(43, '1$humb3.png', 1, '2018-11-12 08:34:33.738064'),
(44, '1$qwrrrr.jpeg', 1, '2018-11-12 08:40:20.595940'),
(45, '1$herpderp.png', 1, '2018-11-12 08:44:00.168454'),
(46, '1$896.png', 1, '2018-11-12 08:58:56.106535'),
(47, '1$796.png', 1, '2018-11-16 12:01:42.482771'),
(48, '1$697.png', 1, '2018-11-16 12:02:52.000300'),
(49, '1$736.png', 1, '2018-11-16 12:21:29.641423'),
(50, '1$thumb2.png', 1, '2018-11-16 12:48:33.143507'),
(51, '1$7.png', 1, '2018-11-16 12:49:22.567953'),
(52, '1$691.png', 1, '2018-11-16 12:50:21.822799'),
(53, '1$7.png', 1, '2018-11-16 13:30:20.312155'),
(55, '1$humb3.png', 1, '2018-11-17 12:52:08.704332'),
(57, '1$free-png-image-39401-991.png', 1, '2018-11-17 12:54:09.930223'),
(60, '18$312.png', 18, '2018-11-17 16:03:33.691215'),
(61, '18$899.png', 18, '2018-11-17 16:03:40.731184'),
(62, '18$155.png', 18, '2018-11-17 16:03:47.904944'),
(63, '18$167.png', 18, '2018-11-17 16:03:54.902728'),
(64, '1$645.png', 1, '2018-11-18 10:36:49.786486'),
(65, '1$942.png', 1, '2018-11-18 10:38:58.657163'),
(66, '1$116.png', 1, '2018-11-18 13:38:35.371691'),
(67, '1$thumb4.png', 1, '2018-11-18 13:38:44.688669'),
(68, '1$cxncn.jpeg', 1, '2018-11-19 05:59:06.883976'),
(69, '1$497.png', 1, '2018-11-19 05:59:51.415922'),
(70, '1$587.png', 1, '2018-11-19 06:57:07.466662'),
(71, '1$219.png', 1, '2018-11-23 08:11:04.134048'),
(72, '1$free-png-image-39401-991.png', 1, '2018-11-23 15:21:29.345616');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `theimg_id` int(255) NOT NULL,
  `likers_id` int(255) NOT NULL,
  `likestatus` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `passw` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `active` int(255) NOT NULL DEFAULT '0',
  `notification` int(1) NOT NULL DEFAULT '1',
  `acthash` varchar(255) NOT NULL DEFAULT '0',
  `profile` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `username`, `passw`, `email`, `active`, `notification`, `acthash`, `profile`) VALUES
(31, 'admin', 'admin', 'admin', 'admin', 'admin', 0, 1, 'ef4e3b775c934dada217712d76f3d51f', '\"empty prilfe : empty\"'),
(35, 'admin1', 'admin1', 'admin1', 'admin1', 'admin1', 0, 1, 'a733fa9b25f33689e2adbe72199f0e62', '\"empty prilfe : empty\"'),
(36, 'admin2', 'admin2', 'admin2', 'admin2', 'admin2', 0, 1, '26408ffa703a72e8ac0117e74ad46f33', '\"empty prilfe : empty\"'),
(37, 'JSON', 'JSON', 'JSON', 'JSON', 'JSON', 0, 1, '670e8a43b246801ca1eaca97b3e19189', '\"empty prilfe : empty\"'),
(39, 'Admin123', 'Admin123', 'Admin123', 'Admin123', 'Admin123', 0, 1, '2f885d0fbe2e131bfc9d98363e55d1d4', '{\"friends\": \"none\", \"Profiletype\": \"NewProfile\"}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comms_id`),
  ADD KEY `comimg_id` (`comimg_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`img_id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD UNIQUE KEY `likesindex` (`theimg_id`,`likers_id`),
  ADD KEY `likelink` (`likers_id`),
  ADD KEY `likedim` (`theimg_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `ugroup` (`notification`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comms_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `img_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comimglink` FOREIGN KEY (`comimg_id`) REFERENCES `gallery` (`img_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likedim` FOREIGN KEY (`theimg_id`) REFERENCES `gallery` (`img_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `likelink` FOREIGN KEY (`likers_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
