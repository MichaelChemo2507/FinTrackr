CREATE TABLE IF NOT EXISTS `users` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`user_name` varchar(255) NOT NULL UNIQUE,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`phone` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `categories` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`category_name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `transactions` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`description` varchar(255),
	`user_id` int NOT NULL,
	`account_id` int NOT NULL,
	`finantial_status_id` int NOT NULL,
	`amount` int NOT NULL,
	`date` int NOT NULL,
	`category_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `financial_goal` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`finantial_status_id` int NOT NULL,
	`target_date` datetime NOT NULL,
	`target_category_id` int,
	`target_user_id` int,
	`financial_target` int NOT NULL,
	`seccess` int NOT NULL,
	`description` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `accounts` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`account_name` varchar(250) NOT NULL,
	`amount` int NOT NULL,
	`goal_id` int NOT NULL,
	`budget_id` int NOT NULL,
	`date` datetime NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `authorization` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`role_name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `financial_status` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Budget` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`status_id` int NOT NULL,
	`amount` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users_to_account` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`account_id` int NOT NULL,
	`user_id` int NOT NULL,
	`role_id` int NOT NULL,
	PRIMARY KEY (`id`)
);



ALTER TABLE `transactions` ADD CONSTRAINT `transactions_fk2` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `transactions` ADD CONSTRAINT `transactions_fk3` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`);

ALTER TABLE `transactions` ADD CONSTRAINT `transactions_fk4` FOREIGN KEY (`finantial_status_id`) REFERENCES `financial_status`(`id`);

ALTER TABLE `transactions` ADD CONSTRAINT `transactions_fk7` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);
ALTER TABLE `financial_goal` ADD CONSTRAINT `financial_goal_fk1` FOREIGN KEY (`finantial_status_id`) REFERENCES `financial_status`(`id`);

ALTER TABLE `financial_goal` ADD CONSTRAINT `financial_goal_fk3` FOREIGN KEY (`target_category_id`) REFERENCES `categories`(`id`);

ALTER TABLE `financial_goal` ADD CONSTRAINT `financial_goal_fk4` FOREIGN KEY (`target_user_id`) REFERENCES `users`(`id`);
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_fk3` FOREIGN KEY (`goal_id`) REFERENCES `financial_goal`(`id`);

ALTER TABLE `accounts` ADD CONSTRAINT `accounts_fk4` FOREIGN KEY (`budget_id`) REFERENCES `Budget`(`id`);


ALTER TABLE `Budget` ADD CONSTRAINT `Budget_fk1` FOREIGN KEY (`status_id`) REFERENCES `financial_status`(`id`);
ALTER TABLE `users_to_account` ADD CONSTRAINT `users_to_account_fk1` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`);

ALTER TABLE `users_to_account` ADD CONSTRAINT `users_to_account_fk2` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `users_to_account` ADD CONSTRAINT `users_to_account_fk3` FOREIGN KEY (`role_id`) REFERENCES `authorization`(`id`);