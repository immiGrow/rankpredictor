// lib/branchGroup.js
export function branchGroup(program) {
  const p = program.toLowerCase();

  if (p.includes("computer")) return 1;      // CSE
  if (p.includes("ai") || p.includes("data")) return 1.2;
  if (p.includes("electronics")) return 1.5; // ECE
  if (p.includes("electrical")) return 2;
  if (p.includes("mechanical")) return 3;
  if (p.includes("civil")) return 4;

  return 5;
}
