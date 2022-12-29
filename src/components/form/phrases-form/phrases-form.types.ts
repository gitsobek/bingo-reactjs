export interface PhrasesFormProps {
  initialPhrases: Phrases;
  setText: (idx: number, text: string) => void;
}

export type Phrases = Record<number, string>;
