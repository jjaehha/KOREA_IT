// localhost:3000/api/posts 경로로 요청을 했을때 실행되는 부분
// api 폴더 안에다가는 handler(다루는) 함수를 만들어야 한다
//localhost:3000/api/posts --> GET / POST / PUT ...

import pool from "../../../../db";

// 해당 함수는 localhost:3000/api/posts 로 요청이 왔을때 응답을 해주는 함수
// 반드시 매개변수는 두개가 있어야 하며, 순서대로 요청, 응답 객체가 들어있다
// res : 응답할 때 사용하는 객체
// 요청을 받고 응답을 처리할때 요청자에게 어떠한 데이터를 넘겨줄지 설정해줄 수 있다
// req : 요청받은 데이터가 들어있는 객체
//      지금 이 주소로 요청한 방법(GET POST ...) --> req.method
//      req.body 안에는 요청할때 넘겨준 데이터(게시글 제목 내용 ...)

// localhost:3000/api/posts GET --> 전체 게시글 조회
// localhost:3000/api/posts POST --> 새롭게 게시글 추가
//localhost:3000/api/posts/1 GET --> 1번게시글조회
// query 사용을 위해서 connection pool 만들기
// pool 에는 커넥션 여러개가 들어있다

const handler = async (req, res) => {
  // console.log(process.env);
  // console.log(req.method);
  // console.log(req.query);
  // console.log(req.body);

  // GET 요청이면 결과로 게시글 목록 응답하기
  if (req.method === "GET") {
    // 데이터베이스 속에있는 게시글 목록 조회
    // pool에서 커넥션 한개를 꺼내와 conn에 저장
    //let {page, limit} = req.query;
    let conn = null;
    try {
      let page = Number(req.query.page || 1);
      let limit = Number(req.query.limit || 10);
      let search = req.query.search || "";
      search = "%" + search + "%";

      let offset = (page - 1) * limit;
      let sql = `
        SELECT *
        FROM tbl_posts
        WHERE title LIKE ?
        ORDER BY createdAt DESC
        LIMIT ? OFFSET ?
    `;

      conn = await pool.getConnection();
      let [result] = await conn.query(sql, [search, limit, offset]);
      if (result.length === 0) {
        res.status(404).json({ message: "게시물 찾기 실패" });
        return;
      }
      // console.log(result);
      // 전체 게시글의 갯수 조회하기
      let [a] = await conn.query(
        `SELECT count(*) FROM tbl_posts WHERE title LIKE ?`,
        search
      );
      console.log(a[0]["count(*)"]);

      res
        .status(200)
        .json({ totalLength: a[0]["count(*)"], fetchBoards: result });
      return;
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "오류발생함!" });
      return;
    } finally {
      // 무조건 실행이 되는 영역
      if (conn !== null) conn.release(); // 커넥션 반납
    }
  }
  // POST 요청이면 새로운 게시글 데이터베이스에 추가하기
  if (req.method === "POST") {
    // 데이터베이스 속에 게시글 새롭게 추가
    let conn = null;
    try {
      let sql = `
                INSERT INTO tbl_posts
                (title, content, writerId)
                VALUES
                (?, ?, ?)
            `;
      conn = await pool.getConnection();
      let [result] = await conn.query(sql, [
        req.body.title,
        req.body.content,
        req.body.writerId,
      ]);
      // console.log(result.insertId);
      let [result2] = await conn.query(
        "SELECT * FROM tbl_posts WHERE id = ?",
        result.insertId
      );
      // console.log(result2[0])
      res.status(201).json(result2[0]);
      return;
    } catch (err) {
      res.status(500).json({ message: "서버 오류 발생" });
      return;
    } finally {
      if (conn !== null) conn.release();
    }
  }

  // GET 도 아니고 POST도 아닌 요청이 들어왔을때 실행
  res.status(405).json({ message: "허용되지 않는 메소드 사용" });
};

export default handler;
