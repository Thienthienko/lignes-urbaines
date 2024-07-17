CREATE TABLE user(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  pseudo VARCHAR(30) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'user'
);

-- CREATE TABLE creation(
--   id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   title VARCHAR(155) NOT NULL,
--   DESCRIPTION TEXT NOT NULL,
--   img VARCHAR(255) NOT NULL,
--   dancer_name VARCHAR(155) NOT NULL,
--   user_id INT UNSIGNED NOT NULL,
--   FOREIGN KEY (user_id) REFERENCES user(id)
-- )

-- CREATE TABLE medias(
--   id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   title VARCHAR(155) NOT NULL,
--   img VARCHAR(255) NOT NULL,
--   user_id INT UNSIGNED NOT NULL,
--   FOREIGN KEY (user_id) REFERENCES user(id)
-- )