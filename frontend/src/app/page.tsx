"use client";
import Head from "next/head";
import { useState } from "react";
import UploadForm from "@/components/UploadForm";
import DatasetPreview from "@/components/DatasetPreview";
import { DatasetStats } from "@/types/dataset";

export default function Home() {
  const [previewData, setPreviewData] = useState<DatasetStats | null>(null);

  return (
    <>
      <Head>
        <title>SaaS IA</title>
      </Head>
      <main className="min-h-screen p-6 bg-black text-cyan-400">
        <div className="max-w-3xl mx-auto">
          {!previewData ? (
            <UploadForm onUploadSuccess={setPreviewData} />
          ) : (
            <DatasetPreview data={previewData} />
          )}
        </div>
      </main>
    </>
  );
}
