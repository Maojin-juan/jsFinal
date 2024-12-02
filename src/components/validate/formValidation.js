const form = document.querySelector(".orderInfo-form");
const inputs = document.querySelectorAll(
  "input[type=text], input[type=email], input[type=tel]",
);
const messages = document.querySelectorAll("[data-msg]");

const constraints = {
  姓名: {
    presence: { message: "是必填欄位" },
  },
  電話: {
    presence: { message: "是必填欄位" },
    length: { minimum: 8, message: "號碼需超過 8 碼" },
  },
  信箱: {
    presence: { message: "是必填欄位" },
    email: { message: "格式有誤" },
  },
  寄送地址: {
    presence: { message: "是必填欄位" },
  },
};

function displayValidationErrors(errors) {
  messages.forEach((item) => {
    const fieldName = item.dataset.msg;
    item.textContent = errors[fieldName] ? errors[fieldName][0] : "";
  });
}

/* 監控所有 input 的變更事件 */
inputs.forEach((item) => {
  item.addEventListener("input", function () {
    let errors = validate(form, constraints);
    const targetName = item.name;
    const errorMsg = errors ? errors[targetName] : null;
    document.querySelector(`[data-msg='${targetName}']`).textContent = errorMsg
      ? errorMsg
      : "";
  });
});

export { displayValidationErrors, form, constraints };
