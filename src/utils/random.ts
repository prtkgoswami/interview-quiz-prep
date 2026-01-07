export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function getRandomItems<T>(items: T[], count: number): T[] {
  const shuffled = shuffleArray(items);

  return shuffled.slice(0, count);
}

export function shuffleWithIndex<T>(
  items: T[],
  correctIndex: number
): { shuffled: T[]; newCorrectIndex: number } {
  const indexed = items.map((value, index) => ({ value, index }));
  const shuffled = shuffleArray(indexed)
  
  const newCorrectIndex = shuffled.findIndex(
    item => item.index === correctIndex
  );

  return {
    shuffled: shuffled.map(i => i.value),
    newCorrectIndex
  };
}