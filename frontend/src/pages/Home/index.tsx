import { Carousel } from "components/Carousel";
import DestaqueHome from "components/DestaqueHome";
import SectionHome from "components/SectionHome";

export default function Home() {
  const images = [
    "/casa1.jpg",
    "/casa2.jpg",
    "/casa3.jpg",
  ];

  return (
    <>
      <DestaqueHome />
      <SectionHome />
    </>
  );
}
