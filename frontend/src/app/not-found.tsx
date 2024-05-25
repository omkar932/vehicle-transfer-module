"use client";
import Link from "next/link";
import NotFoundImg from "../../public/images/notfound.jpg";
import Image from "next/image";
import CommonButton from "@/components/common/button.common";

export default function NotFound() {
  return (
    <div className="flex justify-center px-[200px] pb-10">
      <div>
        <div className="flex gap-5 items-center">
          <Image src={NotFoundImg} alt="Not found" />
          <div className="text-[#D8AE7E] text-[175px]">404</div>
        </div>
        <div className="text-[#F8C794] text-5xl mb-5">Oops!</div>
        <div className="text-[#6B7280] text-xl mb-5">
          The page you're looking for could not be found. It may have been
          removed or its name changed.
        </div>
        <Link href="/">
          <CommonButton onClick={() => {}}>Back to Home</CommonButton>
        </Link>
      </div>
    </div>
  );
}
