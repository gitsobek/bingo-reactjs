import PhrasesForm from "./phrases-form";
import Upload from "./upload-form";
import styles from "./form.module.css";
import { FormProps } from "./form.types";

export default function Form({
  image,
  phrases,
  initialPhrases,
  setFile,
  setText,
  setClipboardDisplayed,
}: FormProps) {
  const isFormValid = (): boolean => {
    return Object.values(phrases).every((text) => !!text) && !!image;
  };

  const generate = (): void => {
    isFormValid() && setClipboardDisplayed(true);
  };

  return (
    <>
      <h1 className={styles.header}>Create your Bingo clipboard</h1>
      <h2 className={`${styles.header} ${styles.subtitle}`}>
        Fill all twelve text fields and add an image.
      </h2>
      <section className={styles.container}>
        <div className={styles.forms}>
          <div className={styles.form}>
            <PhrasesForm
              initialPhrases={initialPhrases}
              setText={setText}
            ></PhrasesForm>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.form}>
            <Upload setFile={setFile}></Upload>
          </div>
        </div>
        <button
          className={`btn ${styles.generate}`}
          disabled={!isFormValid()}
          onClick={generate}
        >
          Generate!
        </button>
      </section>
    </>
  );
}
