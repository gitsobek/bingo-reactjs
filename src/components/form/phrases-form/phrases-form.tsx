import { PhrasesFormProps } from "./phrases-form.types";
import styles from "./phrases-form.module.css";

export default function PhrasesForm({
  initialPhrases,
  setText,
}: PhrasesFormProps) {
  return (
    <>
      {Object.keys(initialPhrases).map((id) => (
        <div key={id}>
          <label className={styles.label}>#{id}</label>
          <input onChange={(e) => setText(Number(id), e.target.value)} />
        </div>
      ))}
    </>
  );
}
