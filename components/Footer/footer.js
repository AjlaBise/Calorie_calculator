import { FooterWrapper } from "./index";
import Image from "next/image";

function footer() {
  return (
    <FooterWrapper>
      <img
        src="https://res.cloudinary.com/dioxrnste/image/upload/v1622144476/logo/logo_3_qfn2w0.png"
        alt="logo"
        style={{ width: "80px", position: "absolute", left: "10%" }}
      />
    </FooterWrapper>
  );
}

export default footer;
