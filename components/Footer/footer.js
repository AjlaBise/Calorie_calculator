import { FooterWrapper } from "./index";
import Image from "next/image";

function footer() {
  return (
      <FooterWrapper>
        <Image
          src="/components/assets/logo.svg"
          alt="logo"
          height="100"
          width="100"
        />
      </FooterWrapper>
  );
}

export default footer;
