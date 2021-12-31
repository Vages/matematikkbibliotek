function leggSammen(a, b) {
  return a + b
}

export function regnUtArealAvTrapes(
  topplengde,
  bunnlengde,
  hoeyde
) {
  let sum = leggSammen(topplengde, bunnlengde)
  return (sum * hoeyde) / 2
}
