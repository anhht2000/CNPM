-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurant
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activetoken`
--

DROP TABLE IF EXISTS `activetoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activetoken` (
  `id` tinyint NOT NULL AUTO_INCREMENT,
  `token` varchar(50) NOT NULL,
  `userID` tinyint NOT NULL,
  `expiredDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  KEY `userID` (`userID`),
  CONSTRAINT `activetoken_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activetoken`
--

LOCK TABLES `activetoken` WRITE;
/*!40000 ALTER TABLE `activetoken` DISABLE KEYS */;
/*!40000 ALTER TABLE `activetoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `BillID` bigint NOT NULL AUTO_INCREMENT,
  `UserID` tinyint NOT NULL,
  `TotalPrice` double DEFAULT '0',
  `CreatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAat` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`BillID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES (1,11,0,'2021-11-14 09:26:58','2021-11-14 09:26:58'),(2,11,2120000,'2021-11-14 09:39:59','2021-11-14 09:39:59'),(3,11,0,'2021-11-14 09:52:13','2021-11-14 09:52:13'),(4,11,0,'2021-11-14 09:52:49','2021-11-14 09:52:49'),(5,11,980000,'2021-11-14 09:56:33','2021-11-14 09:56:33'),(6,1,2140000,'2021-11-19 07:22:14','2021-11-19 07:22:14');
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billdetail`
--

DROP TABLE IF EXISTS `billdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billdetail` (
  `BillID` bigint NOT NULL,
  `FoodID` tinyint NOT NULL,
  `Ammount` int DEFAULT '1',
  PRIMARY KEY (`BillID`,`FoodID`),
  KEY `FoodID` (`FoodID`),
  CONSTRAINT `billdetail_ibfk_1` FOREIGN KEY (`BillID`) REFERENCES `bill` (`BillID`),
  CONSTRAINT `billdetail_ibfk_2` FOREIGN KEY (`FoodID`) REFERENCES `food` (`FoodID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billdetail`
--

LOCK TABLES `billdetail` WRITE;
/*!40000 ALTER TABLE `billdetail` DISABLE KEYS */;
INSERT INTO `billdetail` VALUES (1,2,0),(1,3,0),(2,1,2),(2,3,2),(3,5,0),(4,1,0),(4,2,0),(4,3,0),(5,3,1),(5,26,1),(5,27,3),(6,2,1),(6,3,3);
/*!40000 ALTER TABLE `billdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `FoodID` tinyint NOT NULL AUTO_INCREMENT,
  `CategoryID` tinyint NOT NULL,
  `FoodName` varchar(50) NOT NULL,
  `Price` double NOT NULL,
  `Label` varchar(25) DEFAULT NULL,
  `Image` varchar(500) NOT NULL,
  `FoodAmount` int NOT NULL,
  PRIMARY KEY (`FoodID`),
  KEY `CategoryID` (`CategoryID`),
  CONSTRAINT `food_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `foodcategory` (`CategoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,3,'GÀ BÓ XÔI THANH LONG',540000,'popular','https://dashboard-api.flyfood.vn/system/assets/5723/file.jpg',10),(2,3,'GÀ HẤP NƯỚC MẮM - XÔI CUỘN 3 MÀU',580000,'new','https://dashboard-api.flyfood.vn/system/assets/5720/file.jpg',10),(3,3,'GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN',520000,'bestseller','https://dashboard-api.flyfood.vn/system/assets/1921/file.jpg',10),(4,3,'GÀ TA HẤP CÁCH THỦY',390000,'popular','https://dashboard-api.flyfood.vn/system/assets/5734/file.jpg',10),(5,3,'GÀ BÓ XÔI 2 MÀU ÔM TRỨNG NON HẠT SEN',515000,'popular','https://dashboard-api.flyfood.vn/system/assets/5720/file.jpg',10),(6,2,'CƠM GÀ LÁ SEN',200000,'popular','https://dashboard-api.flyfood.vn/system/assets/5777/file.jpg',10),(7,2,'CƠM CHIÊN CÁ MẶN',200000,'popular','https://dashboard-api.flyfood.vn/system/assets/5769/file.jpg',10),(8,2,'CƠM CHIÊN HẢI SẢN',220000,'popular','https://dashboard-api.flyfood.vn/system/assets/5890/file.png',10),(9,2,'CƠM CHIÊN DƯƠNG CHÂU',200000,'popular','https://dashboard-api.flyfood.vn/system/assets/5773/file.jpg',10),(10,2,'SÚP SÒ ĐIỆP TÓC TIÊN',250000,'popular','https://dashboard-api.flyfood.vn/system/assets/5785/file.jpg',10),(11,2,'SÚP ĐÔNG CÔ GÀ XÉ',180000,'popular','https://dashboard-api.flyfood.vn/system/assets/5781/file.jpg',10),(12,2,'SÚP HẢI SẢN',250000,'popular','https://dashboard-api.flyfood.vn/system/assets/5638/file.jpg',10),(13,3,'COMBO CƠM GÀ',150000,'popular','https://kfcvietnam.com.vn/uploads/combo/ef4c16337a38c42b59331d24749fbbf4.jpg',10),(14,5,'Fresh Fruit Tea',20000,'new','http://royaltea.vn/temp/uploaded-san%20pham_32974763_1198037793670751_2405859736541986816_n_thumbcr_364x271.png',10),(15,5,'Fresh Fruit Smoothie',25000,'new','http://royaltea.vn/temp/uploaded-san%20pham_33058655_1198037763670754_2207856225163411456_n_thumbcr_364x271.png',10),(16,5,'Coffee',18000,'new','http://royaltea.vn/temp/uploaded-san%20pham_33083909_1198037773670753_3116257398998695936_n_thumbcr_364x271.png',10),(17,5,'Cheese Tea',19000,'new','http://royaltea.vn/temp/uploaded-san%20pham_33081272_1198037760337421_3481262952676327424_n_thumbcr_364x271.png',10),(18,5,'Royal Cheese',30000,'new','http://royaltea.vn/temp/uploaded-san%20pham_33136425_1198037753670755_6011816456088453120_n_thumbcr_364x271.png',10),(19,5,'Hottea',35000,'new','http://royaltea.vn/temp/uploaded-san%20pham_33064447_1198037787004085_1830498504456273920_n_thumbcr_364x271.png',10),(20,5,'Topping',5000,'new','http://royaltea.vn/temp/uploaded-san%20pham_32978829_1198037757004088_5686036868789960704_n_thumbcr_364x271.png',10),(21,5,'Milk Tea',25000,'new','http://royaltea.vn/temp/uploaded-san%20pham_33038128_1198037780337419_1819453467773632512_n_thumbcr_364x271.png',10),(22,1,'Nạc Dăm Heo Kho Tiêu',99000,'new','https://image.cooky.vn/posproduct/g0/12932/s400x400/77ae7474-cfa0-4a48-a07a-24c4360a4d21.jpeg',10),(23,1,'Thịt Heo Xào Cải Ngọt',80000,'new','https://image.cooky.vn/posproduct/g0/12906/s400x400/259ca609-6761-4473-8be2-7b1447a79537.jpeg',10),(24,1,'Sườn Non Heo Kho Củ Cải Tàu Hũ',190000,'new','https://image.cooky.vn/posproduct/g0/4362/s400x400/33fd922a-4b05-4750-9c5b-f7e7cac18a76.jpeg',10),(25,1,'Ba Rọi Heo Chiên Da Giòn',100000,'new','https://image.cooky.vn/posproduct/g0/402/s400x400/a0dd4ed4-e063-4b20-a555-a86ddaa5a94e.jpeg',10),(26,1,'Ba Rọi Heo Kho Nước Dừa',100000,'bestseller','https://image.cooky.vn/posproduct/g0/13583/s400x400/d55d7f70-ae2d-4a49-ae6f-dce4f39ce769.jpeg',10),(27,1,'Ba Rọi Heo Rim Chao',120000,'bestseller','https://image.cooky.vn/posproduct/g0/11919/s400x400/83002841-adb9-4233-876c-92ae1b2be4c0.jpeg',10),(28,1,'Ba Rọi Heo Kho Măng',140000,'bestseller','https://image.cooky.vn/posproduct/g0/12953/s400x400/ca8516dc-ea80-416a-9bc6-c3a5fa5a7136.jpeg',10),(29,2,'Bắp Bò Sốt Me',160000,'bestseller','https://image.cooky.vn/posproduct/g0/411/s400x400/148df84f-7497-4b7b-85ad-e7e4c65e11c6.jpeg',10),(30,2,'Thăn Bò Xào Lá Lốt',175000,'bestseller','https://image.cooky.vn/posproduct/g0/13753/s400x400/e8d27bbc-a64a-4a0a-b95f-2763ccb52179.jpeg',10),(31,2,'Thăn Bò Xào Cải Ngọt',190000,'bestseller','https://image.cooky.vn/posproduct/g0/5837/s400x400/7eb6d980-4630-4ff8-923b-336617ad45b7.jpeg',10),(32,2,'Thăn Bò Xào Dọc Mùng',165000,'bestseller','https://image.cooky.vn/posproduct/g0/6966/s400x400/094d027d-21c6-4a50-b232-49cea4404279.jpeg',10),(33,2,'Thăn Bò Xào Nấm Thập Cẩm',155000,'bestseller','https://image.cooky.vn/posproduct/g0/13718/s400x400/c1b33fbd-a39d-4993-9d56-965136ff73ad.jpeg',10),(34,2,'Thăn Bò Xào Bông Cải Xanh',130000,'bestseller','https://image.cooky.vn/posproduct/g0/6982/s400x400/f2c4648e-a8fc-431f-9f5e-46bdd2fd1f5b.jpeg',10),(35,2,'Thăn Bò Xào Sa Tế 	',110000,'bestseller','https://image.cooky.vn/posproduct/g0/10284/s400x400/45790592-445b-4698-8a38-3dd9848e2521.jpeg',10),(36,2,'Bò Hầm Tiêu Xanh',98000,'bestseller','https://image.cooky.vn/posproduct/g0/33/s400x400/900ab1ce-4672-46cf-b9ed-a71cd6d1479d.jpeg',10),(37,2,'Bò Cuộn Phô Mai Đút Lò',200000,'bestseller','https://image.cooky.vn/posproduct/g0/13654/s400x400/bd84dfa9-776c-4a40-93c3-39fa61b20728.jpeg',10),(38,1,'Ba Rọi Heo Kho Mắm Ruốc',150000,'bestseller','https://image.cooky.vn/posproduct/g0/10180/s400x400/58c6f42f-6b5d-4d94-81cb-7f8d60cd63fc.jpeg',10);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foodcategory`
--

DROP TABLE IF EXISTS `foodcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foodcategory` (
  `CategoryID` tinyint NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(30) NOT NULL,
  PRIMARY KEY (`CategoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foodcategory`
--

LOCK TABLES `foodcategory` WRITE;
/*!40000 ALTER TABLE `foodcategory` DISABLE KEYS */;
INSERT INTO `foodcategory` VALUES (1,'Lợn'),(2,'Cơm'),(3,'Gà'),(4,'Bò'),(5,'Đồ Uống');
/*!40000 ALTER TABLE `foodcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resetpasstoken`
--

DROP TABLE IF EXISTS `resetpasstoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resetpasstoken` (
  `id` tinyint NOT NULL AUTO_INCREMENT,
  `token` varchar(50) NOT NULL,
  `userID` tinyint NOT NULL,
  `expiredDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  KEY `userID` (`userID`),
  CONSTRAINT `resetpasstoken_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resetpasstoken`
--

LOCK TABLES `resetpasstoken` WRITE;
/*!40000 ALTER TABLE `resetpasstoken` DISABLE KEYS */;
/*!40000 ALTER TABLE `resetpasstoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserID` tinyint NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) NOT NULL,
  `PhoneNumber` varchar(12) NOT NULL,
  `FirstName` varchar(35) NOT NULL,
  `LastName` varchar(15) NOT NULL,
  `PassWord` varchar(200) NOT NULL,
  `DateOfBirth` datetime DEFAULT NULL,
  `Gender` enum('Male','Female','Unknown') DEFAULT (_utf8mb4'Unknown'),
  `Address` varchar(100) NOT NULL,
  `Role` enum('User','Admin') DEFAULT (_utf8mb4'User'),
  `Status` enum('Active','NotActive','Block') DEFAULT (_utf8mb4'NotActive'),
  `CreatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `PhoneNumber` (`PhoneNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'JohnnyDang@gmail.com','0956320111','Johnny','Tuấn Đặng','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Male','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(2,'TommyTeo@gmail.com','0987654321','Tommy','Quang Tèo','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Male','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(3,'AnNguyen@gmail.com','0967299999','Nguyễn Văn','An','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Male','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(4,'AnhTuanTran@gmail.com','0956320333','Trần Tuấn','Anh','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Male','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(5,'NgaNgoNgan@gmail.com','0956320444','Nguyễn Thị','Nga','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Female','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(6,'HungLieuViet@gmail.com','0956320555','Liễu Việt',' Hùng','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Male','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(7,'TranDoan@gmail.com','0956777888','Trần Ngọc','Đoàn','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Male','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(8,'LeBao123@gmail.com','0956888888','Lê Ngọc','Bảo','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Male','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(9,'MrBaoBinhpro@gmail.com','0956320145','Lê Bảo','Bình','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Male','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(10,'TrungPhan3ke@gmail.com','0964421412','Phan Tấn','Trung','$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',NULL,'Male','20A ngõ 445 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà nội','User','Active','2021-11-14 09:12:14','2021-11-14 09:12:14'),(11,'tuananhcx2000@gmail.com','0984462820','Anh Quân','Hoàng','$2a$10$T2b7aKGItn1B1KJkzsJscuLxCYobTpEMIjIxnZ0AEGwi4tVzns1fe',NULL,'Unknown','Hà Nội','User','Active','2021-11-14 09:18:46','2021-11-14 09:18:46');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-23 14:26:50
