let data = [];

fetch("dic_data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
  })
  .catch((error) => console.error("Error loading JSON data:", error));

function searchWord() {
  const input = document.getElementById("search-input").value.trim();
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error-message");

  // Reset lại thông báo lỗi và kết quả trước khi tìm kiếm
  errorDiv.textContent = "";
  resultDiv.innerHTML = "";

  // Kiểm tra xem người dùng có nhập dữ liệu không
  if (!input) {
    errorDiv.textContent = "Vui lòng nhập từ cần tra.";
    return;
  }

  const result = data.find((item) => item["Từ vựng"] === input);

  if (result) {
    resultDiv.innerHTML = `
      <strong>Từ vựng:</strong> ${result["Từ vựng"]}<br>
      <strong>Nghĩa:</strong> ${result["Nghĩa"]}<br>
      <strong>Âm Hán:</strong> ${result["Âm Hán"] || "Không có"}<br><br>
      
      <strong>Từ vựng 2:</strong> ${result["Từ vựng 2"] || "Không có"}<br>
      <strong>Nghĩa 2:</strong> ${result["Nghĩa 2"] || "Không có"}<br>
      <strong>Âm Hán 2:</strong> ${result["Âm Hán 2"] || "Không có"}
    `;
  } else {
    errorDiv.textContent = "Không tìm thấy từ này.";
  }
}
