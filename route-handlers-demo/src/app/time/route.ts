//GET 對象默認被緩存, 再下一次指令(npm run build -> npm run dev)
// 如果要清除緩存, 要設定 dynamic,再下一次指令(npm run build -> npm run dev)
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
