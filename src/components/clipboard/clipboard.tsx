import { useRef } from "react";
import { downloadCanvas } from "../../utils";
import { ClipboardProps } from "./clipboard.types";
import styles from "./clipboard.module.css";
import html2canvas from "html2canvas";

export default function Clipboard({ phrases, image }: ClipboardProps) {
  const exportRef = useRef<HTMLElement>(null);

  const download = async (el: HTMLElement): Promise<void> => {
    const canvas = await html2canvas(el);
    downloadCanvas(canvas, `bingo-${new Date().toISOString()}.png`);
  };

  return (
    <>
      <h2 className={styles.subtitle}>Here is your Bingo clipboard...</h2>
      <section ref={exportRef} className={styles.clipboard}>
        {Object.values(phrases).map((phrase, idx) => (
          <div key={idx} className={styles.box}>
            {phrase}
          </div>
        ))}
        <img src={image} className={styles.image}></img>
      </section>
      <button
        className={`btn ${styles.download}`}
        onClick={() => download(exportRef.current!)}
      >
        Download as .png
      </button>
    </>
  );
}
