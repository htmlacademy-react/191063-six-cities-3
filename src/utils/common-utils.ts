export function getCapitalizedString(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export function isEscapeKey(evt: KeyboardEvent): boolean {
  return evt.key === 'Escape';
}

export function getRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function pluralize(noun: string, count: number): string {
  if (count === 0 || count === 1) {
    return noun;
  } else if (noun.endsWith('y') && !/[aeiou]y$/i.test(noun)) {
    return `${noun.slice(0, -1)}ies`;
  } else if (
    noun.endsWith('s') ||
    noun.endsWith('ss') ||
    noun.endsWith('sh') ||
    noun.endsWith('ch') ||
    noun.endsWith('x') ||
    noun.endsWith('z')
  ) {
    return `${noun}es`;
  } else {
    return `${noun}s`;
  }
}
