// Shared self-contained MCQ quiz component. No network, no build step.
// Markup contract:
//   <div class="quiz" data-answer="0">
//     <p class="quiz-q">Question text</p>
//     <div class="quiz-options">
//       <button class="quiz-opt">Option text</button>
//       ...
//     </div>
//     <p class="quiz-feedback"></p>
//   </div>
// data-answer is the zero-based index of the correct .quiz-opt.
(function () {
  function initQuiz(quiz) {
    var correctIdx = parseInt(quiz.dataset.answer, 10);
    var opts = quiz.querySelectorAll(".quiz-opt");
    var feedback = quiz.querySelector(".quiz-feedback");
    var answered = false;

    opts.forEach(function (btn, idx) {
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        opts.forEach(function (b) { b.disabled = true; });
        if (idx === correctIdx) {
          btn.classList.add("quiz-correct");
          feedback.textContent = "Correct.";
          feedback.className = "quiz-feedback quiz-feedback-correct";
        } else {
          btn.classList.add("quiz-incorrect");
          opts[correctIdx].classList.add("quiz-correct");
          feedback.textContent = "Not quite — the highlighted option was correct.";
          feedback.className = "quiz-feedback quiz-feedback-incorrect";
        }
        feedback.hidden = false;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quiz").forEach(initQuiz);
  });
})();
