import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Image from "./Image";

const MiddleAdd = () => {
  return (
    <div className="mt-2 md:mt-[130px]">
      <Container>
        <Link to="/">
          <Image imgsrc="images/addfooter.png" />
        </Link>
      </Container>
    </div>
  );
};

export default MiddleAdd;
