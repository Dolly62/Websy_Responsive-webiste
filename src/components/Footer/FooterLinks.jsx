import React from "react";

const FooterLinks = (props) => {
  return (
    <>
      {props.Links.map((link) => (
        <li
          key={link.id}
          className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
        >
          <a href="">{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default FooterLinks;
