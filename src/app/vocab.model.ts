// export const vocabAttributesMapping = {
//   word: 'word',
//   reading: 'reading',
//   definition: 'definition',
//   timestamp: 'timestamp',
// };

export interface Vocab {
  word: string;
  reading: string;
  definition: string;
  timestamp: string;
}

export interface VocabList {
  name: string;
  youtube_id: string;
  vocab_list: Vocab[];
}