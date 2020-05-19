export default function Thousands({ numberString }) {
  // Returns a string with a language sensitive representation 
  // (Example: 20000 -> 20,000)
  return numberString.toLocaleString();
}
