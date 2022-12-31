import React from "react";
import Container from "./Container";
import Product from "./Product";
import Heading from "./Heading";
import Flex from "./Flex";

const SpecialOffers = () => {
  return (
    <Container>
      <div className="mb-4 mt-5 md:mb-7 md:mt-[128px]">
        <Heading title="Special Offers" />
      </div>
      <Flex className="sm:flex sm:flex-wrap sm:justify-between sm:gap-y-10 lg:flex lg:gap-x-5">
        <Product
          src="images/product1.png"
          productName="Basic Crew Neck Tee"
          title="50%"
          badge={true}
          category="black"
        />
        <Product
          src="images/product1.png"
          productName="Basic Crew Neck Tee"
          title="Old"
          badge={true}
          category="black"
        />
        <Product
          src="images/product1.png"
          productName="Basic Crew Neck Tee"
          title="20%"
          badge={true}
          category="black"
        />
        <Product
          src="images/product1.png"
          productName="Basic Crew Neck Tee"
          title="New"
          badge={true}
          category="black"
        />
      </Flex>
    </Container>
  );
};

export default SpecialOffers;
