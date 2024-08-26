export function capitalize(word: string): string {
  const firstLetter = word.charAt(0).toUpperCase();
  const remLetters = word.slice(1);

  return firstLetter + remLetters;
}
