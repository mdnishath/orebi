import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { VscThreeBars } from "react-icons/vsc";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { RxTriangleDown, RxCross2 } from "react-icons/rx";
import { BsFillCartFill } from "react-icons/bs";
import Image from "./Image";

const Header = () => {
  const [categoryshow, setCategory] = useState(false);
  const [usershow, setUsershow] = useState(false);
  const [cartshow, setCartshow] = useState(false);
  const categoryRef = useRef();
  const userRef = useRef();
  const cartRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(ref.current);
      if (categoryRef.current.contains(e.target)) {
        setCategory(true);
      } else {
        setCategory(false);
      }
      if (userRef.current.contains(e.target)) {
        setUsershow(true);
      } else {
        setUsershow(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCartshow(true);
      } else {
        setCartshow(false);
      }
    });
  }, []);
  return (
    <div className="z-100 bg-gray py-6">
      <Container>
        <Flex className="flex items-center justify-between">
          <div>
            <Dropdown
              className="relative z-50 cursor-pointer"
              dropRef={categoryRef}
            >
              <p className="flex items-center gap-x-2.5 font-dm text-sm font-normal">
                <VscThreeBars className="text-xl" />
                <span className="hidden lg:inline-block">Shop by Category</span>
              </p>
              {categoryshow && (
                <List className="absolute top-[40px] left-0 w-[263px] divide-y divide-divid bg-primary font-dm text-white-off">
                  <ListItem
                    className=" py-4 px-5 duration-200 ease-linear hover:pl-7 hover:text-white"
                    itemName="Accesories"
                  />
                  <ListItem
                    className=" py-4 px-5 duration-200 ease-linear hover:pl-7 hover:text-white"
                    itemName="Furniture"
                  />
                  <ListItem
                    className=" py-4 px-5 duration-200 ease-linear hover:pl-7 hover:text-white"
                    itemName="Electronics"
                  />
                  <ListItem
                    className=" py-4 px-5 duration-200 ease-linear hover:pl-7 hover:text-white"
                    itemName="Clothes"
                  />
                  <ListItem
                    className=" py-4 px-5 duration-200 ease-linear hover:pl-7 hover:text-white"
                    itemName="Bags"
                  />
                  <ListItem
                    className=" py-4 px-5 duration-200 ease-linear hover:pl-7 hover:text-white"
                    itemName="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-auto lg:w-[600px]">
            <Search
              className=" w-full py-4 px-5 font-dm font-normal placeholder:text-sm placeholder:text-secondery "
              placeholder="Search Products"
            />
            <div className=" absolute top-1/2 right-0 -translate-y-1/2 pr-5">
              <IoSearch className=" text-xl" />
            </div>
          </div>
          <div>
            <div className="flex gap-x-3 md:gap-x-10">
              <Dropdown
                className=" relative z-50 cursor-pointer"
                dropRef={userRef}
              >
                <div className="flex gap-x-3">
                  <FaUserAlt className="text-xl" />
                  <RxTriangleDown className="text-xl" />
                </div>
                {usershow && (
                  <List className="absolute top-[40px] right-0 w-[200px] divide-y divide-[#F0F0F0] border border-[#F0F0F0] bg-white font-dm text-primary">
                    <ListItem
                      className=" py-4 px-5 duration-200 ease-linear hover:bg-primary hover:text-white"
                      itemName="My Account"
                    />
                    <ListItem
                      className=" py-4 px-5 duration-200 ease-linear hover:bg-primary  hover:text-white"
                      itemName="Log Out"
                    />
                  </List>
                )}
              </Dropdown>
              <div>
                <Dropdown
                  className=" relative z-50 cursor-pointer"
                  dropRef={cartRef}
                >
                  <BsFillCartFill className="text-xl" />
                  {cartshow && (
                    <div className="absolute top-[40px] right-0 w-[360px] divide-[#F0F0F0] border border-[#F0F0F0]">
                      <div className=" flex items-center gap-x-5 bg-gray p-5">
                        <Image imgsrc="images/cart.png" />
                        <div className="flex flex-col gap-y-5">
                          <h3 className="font-dm text-sm font-bold">
                            Black Smart Watch
                          </h3>
                          <p className="font-dm text-sm font-bold">$44.00</p>
                        </div>
                        <div className="ml-auto">
                          <RxCross2 className="text-xl text-primary" />
                        </div>
                      </div>
                      <div className="bg-white p-5">
                        <div className=" mb-3">
                          <p className=" font-dm text-base font-bold text-[#767676]">
                            Subtotal:
                            <span className="ml-3 font-dm text-base text-primary">
                              $44.00
                            </span>
                          </p>
                        </div>
                        <div className="flex gap-x-5">
                          <button className=" border border-primary px-10 py-4 font-dm text-sm font-bold text-primary">
                            View Cart
                          </button>
                          <button className=" border border-primary bg-primary px-10 py-4 font-dm text-sm font-bold text-white">
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>

                    // <List className="absolute top-[40px] right-0 w-[200px] divide-y divide-[#F0F0F0] border border-[#F0F0F0] bg-white font-dm text-primary">
                    //   <ListItem
                    //     className=" py-4 px-5 duration-200 ease-linear hover:bg-primary hover:text-white"
                    //     itemName="Cart"
                    //   />
                    //   <ListItem
                    //     className=" py-4 px-5 duration-200 ease-linear hover:bg-primary  hover:text-white"
                    //     itemName="CTR"
                    //   />
                    // </List>
                  )}
                </Dropdown>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
