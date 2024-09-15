import { ApplestoreIcon } from "../../../public/appstore-icon";
import { GoogleplayIcon } from "../../../public/googleplay-icon";
import { FaHome } from "react-icons/fa";
import { MdCategory, MdShoppingCart } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white h-[71px] md:h-[268px]">
      {/* Upper part for desktop */}
      <div className="hidden lg:flex lg:container lg:p-[50px] gap-[115px]">
        <ul>
          <Link href="/">
            <img className="w-[160px] mb-5" src="logo.svg" alt="Mobilux Logo" />
          </Link>
          <li className="font-secondFamily text-[23px]">Mobilux © 2022</li>
          <li className="font-fontFamily mt-1">Barcha huquqlar kafolatlangan</li>
          <ul className="flex gap-1 mt-4">
            <a
              className="cursor-pointer"
              href="https://play.google.com/store/apps?hl=ru"
            >
              <GoogleplayIcon />
            </a>
            <a href="https://www.apple.com/app-store/">
              <ApplestoreIcon />
            </a>
          </ul>
        </ul>
        <ul>
          <p className="w-[168px] text-[20px] font-fontRoboto text-left text-[#0d1136]">
            Foydali havolalar
          </p>
          <li className="font-fontFamily text-[16px] text-left text-[#0d1136]">
            Bosh sahifa
          </li>
          <li className="font-fontFamily text-[16px] text-left text-[#0d1136]">
            Yordam kerakmi?
          </li>
          <li className="font-fontFamily text-[16px] text-left text-[#0d1136]">
            Foydalanish shartlari
          </li>
          <li className="font-fontFamily text-[16px] text-left text-[#0d1136]">
            Maxfiylik siyosati
          </li>
        </ul>
        <ul>
          <p className="w-[168px] text-[20px] font-fontRoboto text-left text-[#0d1136]">
            Biz haqimizda
          </p>
          <li className="w-[538px] text-[16px] text-left text-[#0d1136]">
            Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul,
            03113, Crescent Trade ltd
          </li>
          <li className="w-[559px] text-[16px] text-left text-[#0d1136]">
            Korxona nomi: Mobilux trade
          </li>
          <li className="w-[559px] text-[16px] text-left text-[#0d1136]">
            Korxona rahbari: HASANBOY TURSUNOV
          </li>
          <li className="w-[559px] text-[16px] text-left text-[#0d1136]">
            Registratsiya raqami: 433-62-00377
          </li>
          <li className="w-[559px] text-[16px] text-left text-[#0d1136]">
            Telefon raqam: 93 000 66-44 97 000 66-44
          </li>
        </ul>
      </div>
      
      {/* Mobile version */}
      <div className="flex justify-around items-center md:hidden p-2 gap-8 mt-4">
        <Link href="/">
          <FaHome className="text-[30px]" />
          <p className="text-black text-xs">Home</p>
        </Link>
        <Link href="/">
          <MdCategory className="text-[30px]" />
          <p className="text-black text-xs">Catalog</p>
        </Link>
        <Link href="/">
          <FaCirclePlus className="text-[30px]" />
          <p className="text-black text-xs">Buyurtma</p>
        </Link>
        <Link href="/">
          <MdShoppingCart className="text-[30px]" />
          <p className="text-black text-xs">Savat</p>
        </Link>
        <Link href="/">
          <RiAccountCircleFill className="text-[30px]" />
          <p className="text-black text-xs">Profil</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
