import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export function Logo() {
    return (
        <Link className="flex items-center gap-1" to="/">
            <StaticImage
              src="../img/steelmade-icon.png"
              alt="Steel Made icon"
              className="w-8 h-8 sm:w-10 sm:h-10"
              layout="constrained"
              width={40}
              height={40}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <div className="text-xl font-black tracking-wide lg:text-2xl">
              <span className="text-gray-800 font-semiblack">steel </span>
              <span className="text-grey-700">made</span>
            </div>
          </Link>
    );
}