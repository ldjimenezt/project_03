import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import 
{
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaXTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
