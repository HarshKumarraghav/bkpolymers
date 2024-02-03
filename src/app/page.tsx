import WhoWeAre from "@/components/WhoWeAre";
import Hero from "../components/Hero";
import GetInTouch from "@/components/GetInTouch";
import Contact from "@/components/Contact";
import Products from "@/components/Products";
import Wrapper from "@/components/Container/Wrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <Wrapper>
        <WhoWeAre />
      </Wrapper>
      <GetInTouch />
      <Wrapper>
        <h1 className="text-primary py-16 text-center text-3xl font-extrabold uppercase">
          B.K Polymers Products
        </h1>
        <Products />
        <Contact />
      </Wrapper>
    </>
  );
}
