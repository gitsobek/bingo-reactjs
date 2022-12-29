import { Phrases } from "./phrases-form";

export interface FormProps {
  image: string;
  phrases: Phrases;
  initialPhrases: Phrases;
  setFile: (file: File | null) => void;
  setText: (idx: number, text: string) => void;
  setClipboardDisplayed: (status: boolean) => void;
}
