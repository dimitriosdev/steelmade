import React from "react"
import { Link } from "gatsby"
import { SectionHeading, TextImageSplit } from "../components/Sections"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { Container, CardSet } from "../components/Sections"
import Image from "../components/Image"
import { StaticImage } from "gatsby-plugin-image"

const IndexPageTemplate = ({
  heading,
  subheading,
  image,
  posts = [],
  about,
}) => {
  return (
    <div>
      {/* Header */}
      <div className="relative bg-steel overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:w-1/2 lg:pt-44 lg:pb-24 xl:pt-48 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-steel transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative z-20 mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <StaticImage
                  src="../img/steelmade-icon-text.png"
                  alt="Steel Made icon"
                  className="w-1/3 sm:w-1/5 md:w-2/12 lg:w-1/5 xl:w-1/4 2xl:w-1/4"
                  layout="constrained"
                  loading="eager"
                  backgroundColor="transparent"
                  placeholder="blurred"
                />
              </div>
              <div className="text-center max-w-md mx-auto lg:max-w-lg lg:mx-0 ">
                <h1 className="font-semiblack text-3xl text-grey-100">
                  {heading}
                </h1>
                <p className="text-grey-50 mt-2 sm:mt-4 lg:mt-6 lg:text-xl">
                  {subheading}
                </p>
                <PrimaryButton to="/contact" className="mt-6 lg:mt-10">
                  Contact us
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-92 lg:w-full lg:h-full"
            image={image}
            alt=""
          />
        </div>
      </div>

      {/* Featured projects */}
      <Container>
        <div className="flex justify-between items-baseline">
          <SectionHeading>Our projects</SectionHeading>

        </div>
        <div className="mt-8">
          <CardSet posts={posts} />
        </div>
        <div className="text-center">
          <Link className="text-grey-700 underline hover:text-grey-800" to="/projects">
            View all
          </Link>
        </div>

      </Container>

      {/* About section */}
      <TextImageSplit image={about.image}>
        <SectionHeading>{about.heading}</SectionHeading>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {about.description}
        </p>
        <SecondaryButton to={about.button.url} className="mt-6 lg:mt-10">
          {about.button.label}
        </SecondaryButton>
      </TextImageSplit>
    </div>
  )
}

export default IndexPageTemplate
