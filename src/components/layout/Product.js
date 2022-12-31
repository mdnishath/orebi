import React from "react";
import Image from "./Image";
import { AiFillHeart } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { MdShoppingCart } from "react-icons/md";

const Product = ({ src, badge, title, productName, category, gap = false }) => {
  return (
    <div className="w-full sm:max-md:w-[310px] md:w-[310px] xl:w-[370px]">
      <div className="group relative overflow-y-hidden">
        <Image className="w-full" imgsrc={src} />
        {badge && (
          <span className="absolute top-5 left-5 bg-primary py-2 px-8 font-dm text-sm font-bold capitalize text-white">
            {title}
          </span>
        )}
        <div className=" !z-100 absolute bottom-[-44%] left-0 h-40 w-full bg-white py-6 px-7 duration-300 ease-in group-hover:bottom-0">
          <div>
            <div className=" flex items-center justify-end gap-x-2">
              <p className="font-dm text-base font-normal text-[#6D6D6D] sm:text-base">
                Add to Wish List
              </p>
              <AiFillHeart className="text-base" />
            </div>
          </div>
          <div className=" my-5">
            <div className=" flex items-center justify-end gap-x-2">
              <p className="font-dm text-base font-normal text-[#6D6D6D] sm:text-base">
                Compare
              </p>
              <TfiReload className="text-base" />
            </div>
          </div>
          <div>
            <div className=" flex items-center justify-end gap-x-2">
              <p className="font-dm text-base font-bold text-primary sm:text-base">
                Add to Cart
              </p>
              <MdShoppingCart className="text-base" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 md:mb-0">
        <div className="mt-4 flex items-center justify-between pb-0 md:pb-4 md:pt-6">
          <h5 className="font-dm text-lg font-bold text-primary md:text-xl">
            {productName}
          </h5>
          <span className="font-dm text-base font-normal text-secondery">
            $44.00
          </span>
        </div>
        <h6 className="font-dm text-base font-normal capitalize text-secondery">
          {category}
        </h6>
      </div>
    </div>
  );
};

export default Product;

{
  /* <div className={gap ? "sm:ml-5 sm:mr-5" : "md:ml-0 md:mr-0"}>
  <div className="group relative w-full overflow-y-hidden">
    <Image className="w-full" imgsrc={src} />
    {badge && (
      <span className="absolute top-5 left-5 bg-primary py-2 px-8 font-dm text-sm font-bold capitalize text-white">
        {title}
      </span>
    )}
    <div className=" !z-100 absolute bottom-[-44%] left-0 h-40 w-full bg-white py-6 px-7 duration-300 ease-in group-hover:bottom-0">
      <div>
        <div className=" flex items-center justify-end gap-x-2">
          <p className="font-dm text-base font-normal text-[#6D6D6D] sm:text-base">
            Add to Wish List
          </p>
          <AiFillHeart className="text-base" />
        </div>
      </div>
      <div className=" my-5">
        <div className=" flex items-center justify-end gap-x-2">
          <p className="font-dm text-base font-normal text-[#6D6D6D] sm:text-base">
            Compare
          </p>
          <TfiReload className="text-base" />
        </div>
      </div>
      <div>
        <div className=" flex items-center justify-end gap-x-2">
          <p className="font-dm text-base font-bold text-primary sm:text-base">
            Add to Cart
          </p>
          <MdShoppingCart className="text-base" />
        </div>
      </div>
    </div>
  </div>
  <div className="mb-5 md:mb-0">
    <div className="mt-4 flex items-center justify-between pb-0 md:pb-4 md:pt-6">
      <h5 className="font-dm text-lg font-bold text-primary md:text-xl">
        {productName}
      </h5>
      <span className="font-dm text-base font-normal text-secondery">
        $44.00
      </span>
    </div>
    <h6 className="font-dm text-base font-normal capitalize text-secondery">
      {category}
    </h6>
  </div>
</div>; */
}
