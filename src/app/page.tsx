import React from 'react';
import Image from "next/image";

import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  const cards = [
    {
      title: "Panen Rencana",
      description: "Buat perencanaan untuk dirimu!",
      icon: "/emoji/notebook.png",
      link: "#"
    },
    {
      title: "Panen Edukasi",
      description: "Tambah pengetahuan untuk dirimu!",
      icon: "/emoji/books.png",
      link: "#"
    },
    {
      title: "Panen Journey",
      description: "Kembangkan dirimu secara bertahap!",
      icon: "/emoji/seedling.png",
      link: "#"
    }
  ];

  return (
      <main className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center font-sans text-center z-0 pt-10">

        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[100px] -z-10"></div>


        <div className="mt-20 flex flex-col items-center px-4 max-w-4xl z-10">
          <div className="flex items-center gap-2 mb-6">
            <Image
                src="./panengenre.svg"
                alt="panengenre"
                width={120}
                height={20}
                className="object-contain"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#2C2727] leading-tight mb-4">
            <span className="text-[#2E8E37]">Perencanaan</span> Anak, Nutrisi,<br/>
            Edukasi, dan Kesiapan.
          </h1>

          <p className="text-2xl text-gray-700 font-medium mb-6">
            Siapkan Dirimu, <span className="font-bold text-[#2C2727]">Panen</span> Masa Depanmu! 🌾
          </p>

          <div className="bg-gradient-to-b from-[#2E8E37] to-[#31262A]
          text-white px-6 py-2 rounded-full text-md font-normal shadow-md">
            oleh <span className="font-medium">Ahmad Azisman Effendi Pratama</span>
          </div>
        </div>

        <div className="mt-16 mb-20 flex flex-col md:flex-row gap-8 px-4 z-10">
          {cards.map((card, index) => (
              <div
                  key={index}
                  className="bg-gradient-to-b from-[#2E8E37] to-[#31262A] rounded-[4rem] p-3 w-70 shadow-2xl transform transition hover:-translate-y-2 duration-300"
              >
                <div className="bg-[#31262A] py-4 px-4 flex flex-col items-center rounded-[3rem] h-full">
                  <div className="py-2 w-24 rounded-2xl flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                    <Image
                        src={card.icon}
                        alt={`${card.title} Icon`}
                        width={56}
                        height={56}
                        className="object-contain"
                    />
                  </div>

                  <h3 className="text-3xl font-bold font-abalone mb-3">
                    {card.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                  </h3>

                  <p className="text-gray-300 text-md mb-8 px-2">
                    {card.description}
                  </p>

                  <a
                      href={card.link}
                      className="mt-auto bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors"
                  >
                    Buka Fitur
                    <FiArrowUpRight className="text-lg" />
                  </a>
                </div>

              </div>
          ))}
        </div>
      </main>
  );
}