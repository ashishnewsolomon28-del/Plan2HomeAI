import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import UploadArea from "../components/Upload/UploadArea";
import AIAnalysis from "../components/AI/AIAnalysis";

export default function ImportFloorPlan() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800">
          📄 Import Floor Plan
        </h1>

        <p className="text-gray-500 mt-3 mb-8">
          Upload your floor plan to begin AI analysis.
        </p>

        <UploadArea
          onFileSelect={setSelectedFile}
        />

        <AIAnalysis
          file={selectedFile}
        />

      </div>
    </MainLayout>
  );
}