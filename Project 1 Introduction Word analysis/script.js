document
  .getElementById("text-input")
  .addEventListener("input", function (event) {
    const inputFieldValue = event.target.value;

    const wordCount = inputFieldValue
      .trim()
      .split(/\s+/)
      .filter(function (word) {
        return word.length > 0;
      }).length;

    const chartCount = inputFieldValue.length;

    document.getElementById("word-count").textContent = wordCount;

    document.getElementById("char-count").textContent = chartCount;

    const twitterLimit = 200 - chartCount;
    const facebookLimit = 63206 - chartCount;

    document.getElementById("twitter-limit").textContent =
      twitterLimit >= 0 ? twitterLimit : 0;

    document.getElementById("facebook-limit").textContent =
      facebookLimit >= 0 ? facebookLimit : 0;
  });
