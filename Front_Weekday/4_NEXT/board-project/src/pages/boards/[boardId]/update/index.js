import BoardWrite from "@/components/board/boardWrite/boardWrite.container";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoardUpdatePage = () => {
    const router = useRouter();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (!router.isReady) return;
        axios
            .get(`https://koreanjson.com/posts/${router.query.boardId}`)
            .then((res) => setPost(res.data))
            .catch((err) => console.log(err));
    }, [router.isReady]);

    return <BoardWrite post={post} isUpdate />;
};

export default BoardUpdatePage;
