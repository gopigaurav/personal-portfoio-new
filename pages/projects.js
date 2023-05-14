import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import zostelimg from "../public/images/projects/ZOSTEL.png";
import fabimg from "../public/images/projects/Faballey.png";
import shopimg from "../public/images/projects/Shop.png";
import Transitions from "@/Components/Transitions";
import Portfolioimg from "../public/images/projects/Portfolio.png";
import project_details from "../features/project.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const FeatureProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="dark:bg-dark dark:border-light w-full flex-col flex relative items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 rounded-br-2xl lg:p-4 xs:rounded-2xl xs:rounded-br-3xl xs:p-2">
      <div className="overflow-hidden h-2/5 w-full">
        {img && (
          <Link
            href={link || ""}
            target="_blank"
            className=" w-1/2 cursor-pointer rounded-lg "
          >
            <Image
              loader={() => img}
              src={img}
              alt={title}
              fill
              className="object-contain !relative"
            />
          </Link>
        )}
      </div>
      <div className="w-full flex flex-col items-start justify-between pl-0 pt-3 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:hover:un"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, github, link }) => {
  return (
    <>
      <article className=" dark:bg-dark dark:border-light w-full flex relative shadow-2xl items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 xs:p-4">
        <div className="top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-primaryDark md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

        {img && (
          <Link
            href={link}
            target="_blank"
            className=" w-full cursor-pointer overflow-hidden rounded-lg"
          >
            <Image src={img || ""} alt={title} className="w-full h-auto" />
          </Link>
        )}

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full dark:text-light text-left text-3xl font-bold lg:text-xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-xs md: text-sm">
            {summary}
          </p>
          <div className="w-full justify-between mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10 md:w-6">
              {" "}
              <GithubIcon className={"dark:fill-light"} />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold md:text-base"
            >
              {" "}
              Visit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
  const data = project_details;
  return (
    <>
      <Head>
        <title>GOPI | Project Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="w-full flex flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Projects"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1,
              500: 2,
              750: 2,
              900: 2,
              1080: 3,
              1500: 4,
              1900: 5,
            }}
          >
            <Masonry>
              {project_details.map((key) => (
                <div className="m-2" key={key.project_name}>
                  <FeatureProject
                    type={"FEATURE PROJECT"}
                    title={key?.project_name}
                    link={key?.link}
                    github={key?.github_link}
                    img={key?.img_link}
                    summary={key?.description}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Layout>
      </main>
    </>
  );
};

export default projects;
