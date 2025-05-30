import { useDropzone } from "react-dropzone";

export default function FileUpload({ files, setFiles }: { files: any[]; setFiles: (files: any[]) => void }) {
  const onDrop = (acceptedFiles: any) => setFiles(acceptedFiles);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed border-[#a21caf] rounded-lg p-6 text-center cursor-pointer transition ${
        isDragActive ? "bg-[#a21caf]/20" : "bg-[#18181b]"
      }`}
      id="demo-upload"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-[#f472b6]">Drop the files here ...</p>
      ) : (
        <p className="text-[#f472b6]">Drag & drop files here, or click to select files</p>
      )}
      <ul className="mt-2 text-[#f472b6]">
        {files.map((file: any) => (
          <li key={file.path}>{file.path}</li>
        ))}
      </ul>
    </div>
  );
}