import { FooterWrapper } from "./FooterStyle";
import Image from "next/image";

function footer() {
  return (
    <FooterWrapper>
      <Image src="/logo.svg" alt="logo" width={185} height={120} />
    </FooterWrapper>
  );
}

export default footer;
