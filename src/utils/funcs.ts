export function getLovePhrase(value: number) {
  if (value > 75) {
    return "Vocês foram feitos um para o outro!";
  } else if (value > 50) {
    return "Vocês possuem uma ótima química!";
  } else {
    return "Você deve procurar alguém melhor...";
  }
}
