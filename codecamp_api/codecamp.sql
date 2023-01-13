-- Active: 1665067073469@@127.0.0.1@3306@codecamp

DROP SCHEMA IF EXISTS `codecamp` ;
CREATE SCHEMA IF NOT EXISTS `codecamp` DEFAULT CHARACTER SET utf8 ;
USE `codecamp` ;
CREATE TABLE IF NOT EXISTS `codecamp`.`melee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(1000) NULL,
  `melee_name` VARCHAR(100) NULL,
  `dateStart` DATETIME NOT NULL,
  `dateEnd` DATETIME NOT NULL,
  `createdAt` DATETIME,
  `updatedAt` DATETIME,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `codecamp`.`tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tag_name` VARCHAR(100) NULL,
  `createdAt` DATETIME,
  `updatedAt` DATETIME,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `codecamp`.`tagmelee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tag_id` INT NULL,
  `melee_id` INT NULL,
  `createdAt` DATETIME,
  `updatedAt` DATETIME,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `codecamp`.`usermelee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(1000) NULL,
  `melee_id` INT NULL,
  `comment` VARCHAR(1000) NULL,
  `createdAt` DATETIME,
  `updatedAt` DATETIME,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `codecamp`.`planning` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `planning_name` VARCHAR(1000) NULL,
  `dateStart` DATETIME,
  `dateEnd` DATETIME,
  `comment` VARCHAR(1000) NULL,
  `createdAt` DATETIME,
  `updatedAt` DATETIME,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `codecamp`.`planning` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(1000) NULL,
  `password` VARCHAR(1000) NULL,
  `createdAt` DATETIME,
  `updatedAt` DATETIME,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;




