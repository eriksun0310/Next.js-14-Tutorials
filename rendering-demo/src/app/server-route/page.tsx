import ImageSlider from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  console.log("Server route rendered");
  const result = serverSideFunction();

  const clientResult = clientSideFunction();

  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      <p>{clientResult}</p>
      <ImageSlider />
    </>
  );
}
