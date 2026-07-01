import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadArea({ onFileSelect }) {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
  if (acceptedFiles.length > 0) {
    const selectedFile = acceptedFiles[0];

    setFile(selectedFile);

    if (onFileSelect) {
      onFileSelect(selectedFile);
    }
  }
}, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`rounded-3xl border-2 border-dashed p-16 text-center cursor-pointer transition ${
          isDragActive
            ? "border-blue-600 bg-blue-50"
            : "border-gray-300 bg-white"
        }`}
      >
        <input {...getInputProps()} />

        <div className="text-6xl mb-5">📄</div>

        <h2 className="text-2xl font-bold">
          Drag & Drop Floor Plan
        </h2>

        <p className="text-gray-500 mt-3">
          Supported: PDF • PNG • JPG
        </p>

        <button
          type="button"
          className="mt-8 bg-[#2F80ED] text-white px-8 py-3 rounded-xl"
        >
          Browse Files
        </button>
      </div>

      {file && (
        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-xl">
            Selected File
          </h3>

          <p className="mt-4">
            📄 {file.name}
          </p>

          <p className="text-gray-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>

          <button
            onClick={() => setFile(null)}
            className="mt-6 text-red-600 font-semibold"
          >
            Remove File
          </button>
        </div>
      )}
    </div>
  );
}