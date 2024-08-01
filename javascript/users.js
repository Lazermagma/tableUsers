fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const students = Array.from(Object.entries(data));
    const tableBody = document.querySelector("#table1 tbody");

    students.forEach(([key, student]) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td scope="row">${student?.Id}</td>
        <td>${student?.Name}</td>
        <td>${student?.Address}</td>
        <td>${student?.Telephone}</td>
        <td><img src="${student?.Image}" class="rounded-circle images"  /></td>
        <td>${student?.Age}</td>
        <td>${student?.Location}</td>
        <td>${student?.Gender}</td>
      `;
      tableBody.appendChild(row);
    });
  });

//searching table

function tableSearch() {
  const input = document.getElementById("tableSearch").value.toUpperCase();
  const rows = document.querySelectorAll("#table1 tr");

  rows.forEach((row, index) => {
    if (index === 0) return; // Skip the header row
    const cells = Array.from(row.getElementsByTagName("td"));
    const matchFound = cells.some(cell => cell.textContent.toUpperCase().includes(input));
    row.style.display = matchFound ? "" : "none";
  });
}


