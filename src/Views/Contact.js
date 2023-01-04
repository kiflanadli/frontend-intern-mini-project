import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Check my profile</h1>
      <ul className="list-none">
        <li>
          <a href="https://github.com/kiflanadli" target="_blank">
            <span className="mr-2 text-xl">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <span className="text-blue-500">kiflanadli</span>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/kiflanadli" target="_blank">
            <span className="mr-2 text-xl">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
            <span className="text-blue-500">in/kiflanadli</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
