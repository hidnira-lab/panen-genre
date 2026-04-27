// src/app/edukasi/[id]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';

export default async function ArticleDetail({ params }: { params: Promise<{ id: string }> }) {
    // Menunggu params (aturan baru di Next.js 15) dan mencari artikel yang cocok dengan URL
    const resolvedParams = await params;
    const article = articles.find((a) => a.id === resolvedParams.id);

    // Kalau ID di URL nggak ada di database kita, tampilkan halaman 404
    if (!article) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center px-6 pt-32 pb-20">

            <div className="w-full max-w-3xl bg-white rounded-[2rem] p-8 md:p-12 shadow-xl relative z-10 border-t-[8px] border-[#368A40]">

                {/* Tombol Kembali */}
                <Link
                    href="/edukasi"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#368A40] transition-colors mb-8"
                >
                    <span className="text-xl leading-none">←</span> Kembali ke Katalog
                </Link>

                {/* Header Artikel */}
                <div className="mb-10 border-b-2 border-gray-100 pb-8">
                    <div className="bg-[#E8F3EA] text-[#368A40] text-xs font-bold px-3 py-1.5 rounded-full w-max mb-4">
                        {article.category}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-abalone text-[#2C2727] tracking-wider mb-4 leading-tight">
                        {article.title}
                    </h1>
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <span>Oleh: Ahmad Azisman E. P.</span>
                        <span>•</span>
                        <span>{article.icon} Panen GenRe</span>
                    </div>
                </div>

                {/* Area Konten Artikel (Rich Text)
          Kita pakai Tailwind arbitrary variants [&>...] untuk memoles tag HTML (h2, p, b, i)
          agar desainnya tetap cantik dan konsisten dengan font yang kita set up!
        */}
                <article
                    className="
            text-gray-700 leading-relaxed space-y-6 text-lg
            [&>h2]:text-3xl [&>h2]:font-abalone [&>h2]:text-[#2C2727] [&>h2]:mt-10 [&>h2]:mb-4
            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#368A40] [&>h3]:mt-8 [&>h3]:mb-2
            [&>p]:mb-4
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-6
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:mb-6
            [&>b]:font-bold [&>b]:text-[#2C2727]
            [&>i]:italic [&>i]:text-gray-600
          "
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

            </div>
        </main>
    );
}