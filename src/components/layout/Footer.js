import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] py-[55px]">
      <Container>
        <Flex className="flex">
          <div className="flex w-full sm:w-3/5">
            <div className="w-1/2 sm:mr-[141px]">
              <h3 className="font-dm text-base font-bold uppercase text-primary">
                MENU
              </h3>
              <div className="mt-4 ">
                <List>
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Home"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Shop"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="About"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Contact"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Journal"
                  />
                </List>
              </div>
            </div>
            <div className="sm:mr-[141px]">
              <h3 className="font-dm text-base font-bold uppercase text-primary">
                SHOP
              </h3>
              <div className="mt-4 ">
                <List>
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Category 1"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Category 2"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Category 3"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Category 4"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Category 5"
                  />
                </List>
              </div>
            </div>
            <div className="sm:mr-[145px]">
              <h3 className="font-dm text-base font-bold uppercase text-primary">
                HELP
              </h3>
              <div className="mt-4 ">
                <List>
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Privacy Policy"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Terms & Conditions"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Special E-shop"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Shipping"
                  />
                  <ListItem
                    className="mb-2 font-dm text-sm font-normal text-[#6D6D6D]"
                    itemName="Secure Payments"
                  />
                </List>
              </div>
            </div>
            <div>
              <h3 className="font-dm text-base font-bold uppercase text-primary">
                (052) 611-5711
              </h3>
              <h4 className="font-dm text-base font-bold uppercase text-primary">
                company@domain.com
              </h4>
              <div className="mt-4 ">
                <p className="font-dm text-sm font-normal text-[#6D6D6D]">
                  575 Crescent Ave. Quakertown, PA 18951
                </p>
              </div>
            </div>
          </div>
          <div className="w-full pl-[256px] sm:w-2/5">
            <Image imgsrc="images/logo.png" />
          </div>
        </Flex>
        <Flex className="mt-4 flex items-center justify-between sm:mt-16">
          <div className="mr-4 flex items-center gap-x-3 sm:gap-x-6">
            <FaFacebookF className="text-sm" />
            <FaLinkedinIn className="text-sm" />
            <FaInstagram className="text-sm" />
          </div>
          <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
