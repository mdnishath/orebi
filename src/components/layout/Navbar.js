import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Image from "./Image";
import Container from "./Container";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  return (
    <nav>
      <Container className=" py-8">
        <Flex className="items-center lg:flex">
          <div className="lg:w-3/12">
            <Image imgsrc="images/logo.png" />
          </div>

          <div className="w-full lg:w-9/12">
            <RiBarChartHorizontalFill
              onClick={() => setShow(!show)}
              className="absolute top-6 right-2.5 ml-auto block cursor-pointer lg:hidden"
            />
            {show && (
              <List className="font-sm mt-5 gap-x-10 font-dm font-bold text-secondery lg:mt-0 lg:flex lg:justify-end">
                <ListItem
                  className=" mt-2.5 hover:font-bold hover:text-black lg:mt-0"
                  itemName="Home"
                />
                <ListItem
                  className=" mt-2.5 hover:font-bold hover:text-black lg:mt-0"
                  itemName="Shop"
                />
                <ListItem
                  className=" mt-2.5 hover:font-bold hover:text-black lg:mt-0"
                  itemName="About"
                />
                <ListItem
                  className=" mt-2.5 hover:font-bold hover:text-black lg:mt-0"
                  itemName="Contacts"
                />
                <ListItem
                  className=" mt-2.5 hover:font-bold hover:text-black lg:mt-0"
                  itemName="Journal"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
