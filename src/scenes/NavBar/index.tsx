import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {}

const NavBar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              <img src={Logo} alt="logo image" />
              {/*------------------RIGHT SIDE---------------*/}
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <p>Home</p>
                  <p>Benefits</p>
                  <p>Our Classes</p>
                  <p>Contact Us</p>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <button type="button">Become a member</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default NavBar;