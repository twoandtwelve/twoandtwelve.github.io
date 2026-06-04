import React from "react";
import uoa from "/public/images/uoa.jpg";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-8 py-8">
      <div className="py-4">
        <h2 className="mb-8 font-medium text-xl">my tech stack</h2>
        <div className="flex flex-col">
          <p>
            I have experience across the full stack — from building interfaces
            with <strong>React</strong>, <strong>Vite</strong>, and{" "}
            <strong>React Native</strong> to writing backend services and{" "}
            <strong>REST APIs</strong> with <strong>Node.js</strong>.
            Comfortable working with both relational and non-relational
            databases like <strong>SQL</strong> and <strong>MongoDB</strong>,
            and have worked with cloud and DevOps tools including{" "}
            <strong>Docker</strong>, <strong>Grafana</strong>, and{" "}
            <strong>Clerk</strong>.
            <br />
            <br />
            Languages I work in: <strong>Java</strong>, <strong>C/C#</strong>,{" "}
            <strong>Python</strong>, <strong>Go</strong>, and{" "}
            <strong>JavaScript</strong>.
          </p>
        </div>
      </div>
      <div className="py-4">
        <h2 className="mb-8 font-medium text-xl">education</h2>
        <div className="mb-16 flex flex-col sm:flex-row sm:items-start">
          <div className="px-0 sm:pr-12 sm:mt-0 mt-4 flex-1">
            <small className="italic">feb 2022 - nov 2025</small>
            <div className="mb-6 items-baseline gap-1">
              <h4 className="font-medium text-xl">
                Bachelor of Engineering (Honours)
              </h4>
              <small className="font-normal italic text-sm">
                University of Auckland
              </small>
            </div>
            <p className="mb-6">
              Specialising in{" "}
              <a
                href="https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/software-engineering/undergraduate.html"
                target="_blank"
                className="underline"
              >
                Software
              </a>{" "}
              under the department of Electrical, Computer Systems, and Software
              Engineering (ECSE).
            </p>
            <p>
              Club member: Software Engineering Students Association, Web
              Development & Consulting Club
            </p>
          </div>
          <img src={uoa} className="mx-0 max-w-32 max-h-32 mt-2 sm:ml-auto" />
        </div>
      </div>
      <div className="py-4">
        <h2 className="mb-8 font-medium text-xl">awards & honours</h2>
        <div className="mb-8 items-baseline gap-1">
          <small className="italic">2023</small>
          <h4 className="font-medium text-xl">First in Course - SOFTENG 281</h4>
          <small className="font-normal italic text-sm">
            Department of Electrical, Computer, and Software Engineering
          </small>
          <p>
            Recognises students who have obtained the highest overall mark in
            the taught course.
          </p>
        </div>
        <div className="items-baseline gap-1">
          <small className="italic">2022</small>
          <h4 className="font-medium text-xl">Dean's Honours List</h4>
          <small className="font-normal italic text-sm">
            Faculty of Engineering
          </small>
          <p>
            Recognises students who have demonstrated excellence in academic
            performance by being in the top 5% of their year of study.
          </p>
        </div>
      </div>
    </section>
  );
}
