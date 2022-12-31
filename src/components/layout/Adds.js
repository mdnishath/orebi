import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

const Adds = () => {
  return (
    <div className=" mt-5 md:mt-[140px]">
      <Container>
        <Flex className="flex h-full gap-x-5 md:gap-x-10">
          <div className="w-1/2">
            <Image className="h-full w-full" imgsrc="images/add1.png" />
          </div>
          <div className="w-1/2">
            <Flex className="flex w-full flex-col gap-y-5 md:gap-y-10">
              <Image className="w-full" imgsrc="images/add2.png" />
              <Image className="w-full object-cover" imgsrc="images/add3.png" />
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Adds;
