import React from 'react';
import Link from 'next/link';
import { articles } from '@/data/articles';

export default function PanenEdukasi() {
    return (
        // Tambahkan pt-32 (padding-top) biar kontennya gak nabrak Navbar yang melayang
        <main className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center px-6 pt-32 pb-20 z-0">

            {/* --- BACKGROUND DECORATION (Biar senada dengan Landing Page) --- */}
            <div className="absolute top-20 -left-32 w-[400px] h-[400px] bg-green-200/30 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-[100px] -z-10"></div>

            {/* --- HEADER SECTION --- */}
            <div className="text-center mb-12 max-w-2xl z-10">
                <h1 className="text-5xl font-abalone text-[#2C2727] tracking-wider mb-4">
                    Katalog Edukasi
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                    Pilih dan baca artikel yang paling pas buat nambah *insight* kamu hari ini.
                    Siapkan dirimu, <span className="text-[#368A40] font-bold">Panen</span> pengetahuanmu! 🌾
                </p>
            </div>

            {/* --- CATALOG GRID --- */}
            {/* grid-cols-1 (HP) -> grid-cols-2 (Tablet) -> grid-cols-3 (Laptop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl z-10">
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className="bg-[#2C2727] rounded-[2rem] p-6 flex flex-col shadow-lg border-2 border-transparent hover:border-[#368A40] transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                        {/* Thumbnail / Icon Box */}
                        <div className="bg-[#3A3333] h-40 rounded-xl mb-5 flex items-center justify-center text-6xl shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                            {article.icon}
                        </div>

                        {/* Category Badge */}
                        <div className="bg-[#368A40] text-white text-xs font-bold px-3 py-1.5 rounded-full w-max mb-3">
                            {article.category}
                        </div>

                        {/* Title */}
                        <h2 className="font-abalone text-white text-2xl tracking-wide mb-2 leading-tight">
                            {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-300 text-sm mb-6 flex-grow">
                            {article.excerpt}
                        </p>

                        {/* Action Button */}
                        {/* 💡 Nanti kalau halaman isinya udah ada, kita arahkan href-nya ke /edukasi/${article.id} */}
                        <Link
                            href={`/edukasi/${article.id}`}
                            className="mt-auto bg-white text-black text-center py-2.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                        >
                            Baca Artikel <span className="text-lg leading-none">↗</span>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}