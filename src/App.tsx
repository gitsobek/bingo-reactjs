import { useState } from "react";
import { toBase64 } from "./utils";
import { Phrases } from "./components/form/phrases-form";
import styles from "./App.module.css";
import Form from "./components/form";
import Clipboard from "./components/clipboard";

const initialPhrases: Phrases = Array.from({ length: 12 })
  .map((_, idx) => idx + 1)
  .reduce((acc, idx) => ({ ...acc, [idx]: "" }), {});

export default function App() {
  const [phrases, setPhrase] = useState<Phrases>(initialPhrases);
  const [image, setImage] = useState<string>("");
  const [clipboardDisplayed, setClipboardDisplayed] = useState<boolean>(false);

  const setText = (idx: number, text: string): void => {
    setPhrase((state) => ({
      ...state,
      [idx]: text,
    }));
  };

  const setFile = async (file: File | null): Promise<void> => {
    file && setImage("" + (await toBase64(file)));
  };

  return (
    <main className={styles.page}>
      {clipboardDisplayed ? (
        <Clipboard phrases={phrases} image={image} />
      ) : (
        <Form
          image={image}
          phrases={phrases}
          initialPhrases={initialPhrases}
          setFile={setFile}
          setText={setText}
          setClipboardDisplayed={setClipboardDisplayed}
        />
      )}
    </main>
  );
}
