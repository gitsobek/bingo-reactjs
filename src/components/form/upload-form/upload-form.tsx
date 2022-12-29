import { UploadProps } from "./upload-form.types";

export default function Upload({ setFile }: UploadProps) {
  return (
    <>
      <p>Select image:</p>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
    </>
  );
}
