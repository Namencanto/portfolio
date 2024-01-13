import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../../public/assets/contact.jpg";
import {
  githubAccountLink,
  linkedInAccountLink,
  formHostingLink,
} from "@/links";

interface ContactLanguageProps {
  languageData: {
    "above-text": string;
    title: string;
    "full-name": string;
    position: string;
    "job-status": string;
    "contact-description": string;
    form: {
      name: string;
      phone: string;
      email: string;
      subject: string;
      message: string;
      "button-text": string;
    };
  };
  language: "en" | "pl";
}

const Contact: React.FC<ContactLanguageProps> = ({
  languageData,
  language,
}) => {
  return (
    <section
      aria-label={language === "en" ? "A contact section" : "Sekcja kontaktu"}
      id="contact"
      className="w-full lg:h-screen"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-color-text-primary">
          {languageData["above-text"]}
        </p>
        <h2 className="py-4">{languageData.title}</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <section
            aria-label={
              language === "en"
                ? "General description of the contact section"
                : "Generalny opis sekcji kontaktu"
            }
            className="col-span-3 lg:col-span-2 w-full h-full shadow-default-xl rounded-xl p-4"
          >
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt={
                    language === "en" ? "Photo of laptop" : "Zdjęcie laptopa"
                  }
                />
              </div>
              <div>
                <h2 className="py-2">{languageData["full-name"]}</h2>
                <p>{languageData.position}</p>
                <p
                  className="py-4"
                  dangerouslySetInnerHTML={{
                    __html: languageData["job-status"],
                  }}
                ></p>
              </div>
              <div>
                <p className="uppercase pt-8">
                  {languageData["contact-description"]}
                </p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href={linkedInAccountLink}
                    target="_blank"
                    rel="noreferrer"
                    title={
                      language === "en"
                        ? "Go to my LinkedIn"
                        : "Przejdź do mojego Linkedina"
                    }
                  >
                    <div className="rounded-full shadow-default-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href={githubAccountLink}
                    target="_blank"
                    rel="noreferrer"
                    title={
                      language === "en"
                        ? "Go to my Github"
                        : "Przejdź do mojego Githuba"
                    }
                  >
                    <div className="rounded-full shadow-default-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-default-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link
                    href="/cv"
                    title={
                      language === "en" ? "Go to my CV" : "Przejdź do mojego CV"
                    }
                  >
                    <div className="rounded-full shadow-default-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* right */}
          <section
            aria-label={
              language === "en"
                ? "Section with contact form"
                : "Sekcja z formularzem kontaktowym"
            }
            className="col-span-3 w-full h-auto shadow-default-xl rounded-xl lg:p-4"
          >
            <div className="p-4">
              <form
                action={formHostingLink}
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      {languageData.form.name}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      {languageData.form.phone}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {languageData.form.email}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {languageData.form.subject}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {languageData.form.message}
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"
                  ></textarea>
                </div>
                <button className="shadow-default-xl w-full p-4 text-gray-100 mt-4">
                  {languageData.form["button-text"]}
                </button>
              </form>
            </div>
          </section>
        </div>
        <div className="flex justify-center py-12">
          <Link
            href="/"
            title={
              language === "en" ? "Go to top of page" : "Przejdź na góre strony"
            }
          >
            <div className="rounded-full shadow-default-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-color-text-primary"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
