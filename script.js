document.addEventListener("DOMContentLoaded", function () {
  // --- Generate a random arithmetic sequence ---
  function generateSequence() {
    const start = Math.floor(Math.random() * 10) + 1;         // 1 to 10
    const diff = Math.floor(Math.random() * 5) + 1;           // +1 to +5
    return {
      sequence: [start, start + diff, start + 2 * diff],
      difference: diff,
    };
  }

  @@ -12,7 +12,7 @@ document.addEventListener("DOMContentLoaded", function () {
   let { sequence, difference } = generateSequence();

  const sequenceElement = document.getElementById("sequence");
  const input = document.getElementById("answer");
  const feedback = document.getElementById("feedback");
  const submitButton = document.getElementById("submitButton");

  // Show initial sequence
  function updateSequenceDisplay() {
    sequenceElement.innerText = sequence.join(", ");
  }

  updateSequenceDisplay();

  function checkAnswer() {
    const userAnswer = parseInt(input.value.trim(), 10);
    const correctAnswer = sequence[sequence.length - 1] + difference;

    if (userAnswer === correctAnswer) {
      sequence.push(correctAnswer);
      feedback.innerText = "✅ Correct!";
      feedback.style.color = "lightgreen";
      updateSequenceDisplay();
      input.value = "";
    } else {
      feedback.innerText = "❌ Try again.";
      feedback.style.color = "salmon";
    }
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checkAnswer();
    }
  });

  submitButton.addEventListener("click", checkAnswer);
});
