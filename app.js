document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const resultDiv = document.getElementById("result");

  searchBtn.addEventListener("click", () => {
    fetch("superheroes.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        // Exercise 2: show the raw response in an alert
        alert(data);
      })
      .catch((error) => {
        console.error("Error fetching superheroes:", error);
        alert("Sorry, something went wrong while fetching the superheroes.");
      });
  });
});