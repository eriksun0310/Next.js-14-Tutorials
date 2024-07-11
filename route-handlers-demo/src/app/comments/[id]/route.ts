import { redirect } from "next/navigation";
import { comments } from "../data";

//GET: http://localhost:3001/comments/1
// 獲取單一的id
export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
    //如果輸入不存在的id, 則會到導向到 http://localhost:3001/comments
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );

  return Response.json(comment);
}


// 更新單一id 的text
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  comments[index].text = text;

  return Response.json(comments[index]);
}

//刪除單一id
export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}
