DROP DATABASE IF EXISTS coder_kiosk_db;
CREATE DATABASE coder_kiosk_db;
USE coder_kiosk_db;
CREATE TABLE users
(
   user_id INT NOT NULL
   AUTO_INCREMENT PRIMARY KEY,
 f_name VARCHAR
   (100) NOT NULL,
 l_name VARCHAR
   (100) NOT NULL,
 email VARCHAR
   (255) NOT NULL,
 passphrase VARCHAR
   (255) NOT NULL,
);
   CREATE TABLE resources
   (
      id INT NOT NULL
      AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR
      (225) NOT NULL,
   date_made INT NOT NULL,
   website VARCHAR
      (5000) NOT NULL,
   r_description VARCHAR
      (500) NOT NULL
);
      CREATE TABLE notes
      (
         note_id INT NOT NULL
         auto_increment PRIMARY KEY,
   sub VARCHAR
         (225) NOT NULL,
   title VARCHAR
         (500) NOT NULL,
   body VARCHAR
         (500) NOT NULL,
   tags VARCHAR
         (225) NOT NULL,
   image VARCHAR
         (225) NOT NULL
);
         INSERT INTO users
            (f_name, l_name, email, passphrase,)
         VALUES("Jonathan", "Olson", "widespread.main@gmail.com", "DontBeSoMean$#@!");
         INSERT INTO users
            (f_name, l_name, email, passphrase,)
         VALUES("Mike", "Corey", "corey@gmail.com", "coreyMIKE3245");
         INSERT INTO users
            (f_name, l_name, email, passphrase,)
         VALUES("Stephanie", "Nolan", "steph@gmail.com", "ItsStephyYall!@#$%^");
         INSERT INTO users
            (f_name, l_name, email, passphrase,)
         VALUES("Mark", "Techson", "nunya@mail.com", "root");
         INSERT INTO users
            (f_name, l_name, email, passphrase,)
         VALUES("Roxy", "Milea", "roxy@gmail.com", "ShesAJudge!?");
         INSERT INTO users
            (f_name, l_name, email, passphrase,)
         VALUES("Daniel", "Santos", "sonosman@yahoo.com", "CPlus+IsEasy");
         INSERT INTO users
            (f_name, l_name, email, passphrase,)
         VALUES("firstName", "lastName", "email@email.com", "password");
         INSERT INTO resources
            (title, date_made, website, r_description)
         VALUES("name", "5", "site", "how it works");
         INSERT INTO resources
            (title, date_made, website, r_description)
         VALUES("name", "5", "site", "how it works");
         INSERT INTO resources
            (title, date_made, website, r_description)
         VALUES("name", "5", "site", "how it works");
         INSERT INTO resources
            (title, date_made, website, r_description)
         VALUES("name", "5", "site", "how it works");
         INSERT INTO resources
            (title, date_made, website, r_description)
         VALUES("name", "5", "site", "how it works");
         INSERT INTO resources
            (title, date_made, website, r_description)
         VALUES("name", "5", "site", "how it works");
         INSERT INTO resources
            (title, date_made, website, r_description)
         VALUES("name", "5", "site", "how it works");
         INSERT INTO notes
            (sub, title, body, tags, image)
         VALUES
            ("HTML", "What is HTML?", "HTML is a webpage", "HTML", "blahblahblah");
         INSERT INTO notes
            (sub, title, body, tags, image)
         VALUES("HTML", "What is HTML?", "HTML is a webpage", "HTML", "blahblahblah");
         INSERT INTO notes
            (sub, title, body, tags, image)
         VALUES("HTML", "What is HTML?", "HTML is a webpage", "HTML", "blahblahblah");
         INSERT INTO notes
            (sub, title, body, tags, image)
         VALUES("HTML", "What is HTML?", "HTML is a webpage", "HTML", "blahblahblah");
         INSERT INTO notes
            (sub, title, body, tags, image)
         VALUES("HTML", "What is HTML?", "HTML is a webpage", "HTML", "blahblahblah");
         INSERT INTO notes
            (sub, title, body, tags, image)
         VALUES("HTML", "What is HTML?", "HTML is a webpage", "HTML", "blahblahblah");
         INSERT INTO notes
            (sub, title, body, tags, image)
         VALUES("HTML", "What is HTML?", "HTML is a webpage", "HTML", "blahblahblah");
         SELECT *
         FROM users JOIN notes JOIN resources  ;
