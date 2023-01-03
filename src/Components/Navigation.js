import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  let menu, menuMask;

  if (showMenu) {
    menu = (
      <div className="h-full w-4/5 bg-white fixed top-0 left-0 z-50 shadow">
        The menu
      </div>
    );
    menuMask = (
      <div
        className="w-full h-full bg-black-t-50 fixed top-0 left-0 z-50"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {menuMask}
      {menu}
    </nav>
  );
}

export default Navigation;
