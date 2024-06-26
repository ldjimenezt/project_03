import Link from "next/link";

import 
{
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaTwitter />, path: "" },
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
