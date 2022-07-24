CREATE TABLE `user_like` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,

  `user_id` BIGINT(20) unsigned NOT NULL,
  `user_public_id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `activity_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`user_id`),
  KEY `aid` (`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

