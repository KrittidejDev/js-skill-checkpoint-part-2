const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const totalStudent50UpScore = (studentArr) => {
  let result = 0;
  result = studentArr
    .filter((e) => e.score > 50)
    .map((e) => (e.score += e.score * 0.1))
    .reduce((acc, curr) => acc + curr, 0);
  return result;
};

const sumTotalScore = totalStudent50UpScore(students);
console.log(sumTotalScore);
