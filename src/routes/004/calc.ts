export type Operation = keyof typeof operations;

export const operations = {
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b,
  "%": (a: number, b: number) => a % b,
} as const satisfies Record<string, (a: number, b: number) => number>;

export type State = (typeof states)[number];

export const states = ["a", "b"] as const;

export function nextState(state: State): State {
  const index = states.indexOf(state);
  return states[(index + 1) % states.length];
}

export function calc(op: Operation, a: number, b: number): number {
  return operations[op](a, b);
}
