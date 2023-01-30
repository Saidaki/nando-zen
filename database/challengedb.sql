
CREATE TABLE `custumers` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `custumers` (`id`, `name`) VALUES
(1, 'Custumer 1'),
(2, 'Custumer 2'),
(3, 'Custumer 3');

CREATE TABLE `custumer_professional_book` (
  `id` int(11) NOT NULL,
  `fk_professional_book` int(11) NOT NULL,
  `fk_custumer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `professionals` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `professionals` (`id`, `name`) VALUES
(1, 'Professional 1'),
(2, 'Professional 2'),
(3, 'Professional 3');

CREATE TABLE `professional_book` (
  `id` int(11) NOT NULL,
  `fk_professional` int(11) NOT NULL,
  `slot` varchar(10) NOT NULL,
  `is_available` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



ALTER TABLE `custumers`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `custumer_professional_book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_professional_book` (`fk_professional_book`),
  ADD KEY `fk_custumer` (`fk_custumer`);

ALTER TABLE `professionals`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `professional_book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_professional` (`fk_professional`);


ALTER TABLE `custumers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `custumer_professional_book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

ALTER TABLE `professionals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `professional_book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

ALTER TABLE `custumer_professional_book`
  ADD CONSTRAINT `fk_custumer` FOREIGN KEY (`fk_custumer`) REFERENCES `custumers` (`id`),
  ADD CONSTRAINT `fk_professional_book` FOREIGN KEY (`fk_professional_book`) REFERENCES `professional_book` (`id`);


ALTER TABLE `professional_book`
  ADD CONSTRAINT `fk_professional_book_professional` FOREIGN KEY (`fk_professional`) REFERENCES `professionals` (`id`) ON UPDATE NO ACTION;
  
COMMIT;
