import pool from "../../../../../db";

const handler = async (req, res) => {
  // GET 일떄
  if (req.method === "GET") {
    let conn = null;
    try {
      let sql = `
            SELECT *
            FROM tbl_posts
            WHERE id = ?
        `;
      conn = await pool.getConnection();
      let [result] = await conn.query(sql, Number(req.query.boardId));
      if (result.length === 0) {
        res.status(404).json({ message: "해당 게시글 찾을 수 없음" });
      }
      res.status(200).json(result[0]);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "서버 오류 발생" });
    } finally {
      if (conn !== null) conn.release();
    }
    return;
  }

  // PUT 일떄
  if (req.method === "PUT") {
    return;
  }

  // DELETE 일때
  if (req.method === "DELETE") {
    return;
  }

  // GET, PUT, DELETE 모두 아닐때
  res.status(405).json({ message: "허용되지 않는 메소드 사용" });
};

export default handler;
