document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search");
  const resultDiv = document.getElementById("result");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    const url = "superheroes.php?query=" + encodeURIComponent(query);

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.text();
      })
      .then((data) => {
        resultDiv.innerHTML = data;
      })
      .catch((err) => {
        console.error(err);
        resultDiv.innerHTML = "<p>Sorry, something went wrong.</p>";
      });
  });
});