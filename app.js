let data = [];

// Tải dữ liệu từ dic_data.json
fetch("dic_data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
    console.log("Dữ liệu đã được tải:", data); // Kiểm tra dữ liệu có được tải không
  })
  .catch((error) => console.error("Lỗi khi tải dữ liệu JSON:", error));

function searchWord() {
  const input = document.getElementById("search-input").value.trim();
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error-message");

  // Reset lại thông báo lỗi và kết quả trước khi tìm kiếm
  errorDiv.textContent = "";
  resultDiv.innerHTML = "";

  // Kiểm tra xem người dùng có nhập từ hay không
  if (!input) {
    errorDiv.textContent = "Vui lòng nhập từ cần tra.";
    return;
  }

  // Tìm kiếm từ trong dữ liệu JSON
  const result = data.find((item) => item["Từ vựng"].trim() === input);

  if (result) {
    // Hiển thị thông tin khi tìm thấy từ
    resultDiv.innerHTML = `
      <strong>Từ vựng:</strong> ${result["Từ vựng"]}<br>
      <strong>Nghĩa:</strong> ${result["Nghĩa"]}<br>
      <strong>Âm Hán:</strong> ${result["Âm Hán"] || "Không có"}<br><br>
      
      <strong>Từ vựng 2:</strong> ${result["Từ vựng 2"] || "Không có"}<br>
      <strong>Nghĩa 2:</strong> ${result["Nghĩa 2"] || "Không có"}<br>
      <strong>Âm Hán 2:</strong> ${result["Âm Hán 2"] || "Không có"}
    `;
  } else {
    // Nếu không tìm thấy từ
    errorDiv.textContent = "Không tìm thấy từ này.";
  }
}
