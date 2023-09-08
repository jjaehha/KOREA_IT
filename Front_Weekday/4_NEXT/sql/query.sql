CREATE TABLE tbl_users(
   id VARCHAR(50),
    pw VARCHAR(100) NOT NULL ,
    createdAt DATETIME DEFAULT now() NOT NULL,
    updatedAt DATETIME DEFAULT now() NOT NULL,
    userName VARCHAR(100) NOT NULL,
    CONSTRAINT tbl_users_pk PRIMARY KEY (id)
);

CREATE TABLE tbl_posts(
   id INT AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content VARCHAR(300) NOT NULL,
    createdAt DATETIME DEFAULT now() NOT NULL,
    updatedAt DATETIME DEFAULT now() NOT NULL,
    writerId VARCHAR(50) NOT NULL,
    CONSTRAINT tbl_posts_pk PRIMARY KEY (id),
    CONSTRAINT tbl_posts_writerId_fk FOREIGN KEY (writerId) REFERENCES tbl_users (id)
);

# 댓글 저장 테이블 생성
CREATE TABLE tbl_comments(
   id INT AUTO_INCREMENT,
    content VARCHAR(200) NOT NULL,
    createdAt DATETIME DEFAULT now() NOT NULL,
    updatedAt DATETIME DEFAULT now() NOT NULL,
    writerId VARCHAR(50) NOT NULL,
    postId INT NOT NULL,
    CONSTRAINT tbl_comments_pk PRIMARY KEY (id),
    CONSTRAINT tbl_comments_writerId_fk FOREIGN KEY (writerId) REFERENCES tbl_users (id),
    CONSTRAINT tbl_comments_postId_fk FOREIGN KEY (postId) REFERENCES tbl_posts (id)
);

###########################################################################################################################################

# 회원테이블(tbl_users)에 회원 데이터 추가하기
INSERT INTO tbl_users
(id, pw, userName)
VALUES
("aaa555", "1111", "김철수");

INSERT INTO tbl_users
SET id = "def111", pw = "1515", userName = "박영희";

#--------------------------------------------------------------#

INSERT INTO tbl_posts
(title, content, writerId)
VALUES
("제목", "내용", "abc123"),
("제목", "내용", "abc123"),
("제목", "내용", "abc123"),
("제목", "내용", "abc123"),
("제목", "내용", "abc123"),
("제목", "내용", "abc123"),
("제목", "내용", "abc123"),
("제목", "내용", "abc123"),
("제목", "내용", "abc123"),
("제목", "내용", "abc123");

#--------------------------------------------------------------#

INSERT INTO tbl_comments
(content, writerId, postId)
VALUES
("길동이가 작성한 댓글", "abc123", "1");

###########################################################################################################################################

SELECT *
FROM tbl_users;

SELECT *
FROM tbl_users
ORDER BY createdAt DESC;

#--------------------------------------------------------------#

SELECT *
FROM tbl_posts;

SELECT *
FROM tbl_posts
LIMIT 5 OFFSET 0;

SELECT *
FROM tbl_posts
ORDER BY createdAt DESC
LIMIT 5 OFFSET 3;

SELECT *
FROM tbl_posts
WHERE id BETWEEN 10 AND 20;

SELECT *
FROM tbl_posts
WHERE title LIKE '%제%'
ORDER BY id DESC
LIMIT 2 OFFSET 1;

#--------------------------------------------------------------#

SELECT *
FROM tbl_comments;

###########################################################################################################################################

SELECT count(*)
FROM tbl_posts;

###########################################################################################################################################

DROP TABLE tbl_users;

DROP TABLE tbl_posts;

DROP TABLE tbl_comments;