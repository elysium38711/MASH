/**
 * Simulates rolling a 20-sided die
 * Returns integer between 1 and 20 (inclusive)
 */
export function rollD20(): number {
  return Math.floor(Math.random() * 20) + 1;
}

/**
 * Animated dice roll that shows intermediate values
 * Returns final value after animation completes
 */
export async function animatedDiceRoll(
  onTick: (value: number) => void,
  duration: number = 1500
): Promise<number> {
  const tickInterval = 100;
  const tickCount = duration / tickInterval;

  return new Promise((resolve) => {
    let count = 0;
    const interval = setInterval(() => {
      const intermediateValue = rollD20();
      onTick(intermediateValue);
      count++;

      if (count >= tickCount) {
        clearInterval(interval);
        const finalValue = rollD20();
        onTick(finalValue);
        resolve(finalValue);
      }
    }, tickInterval);
  });
}
