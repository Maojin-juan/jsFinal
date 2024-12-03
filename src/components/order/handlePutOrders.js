import { getOrders, putOrders } from "../../services/orderServices";
import renderOrders from "./renderOrders";

export function attachPutBtn() {
  const orderTable = document.querySelectorAll(".orderStatus");

  orderTable.forEach((item) => {
    item.addEventListener("click", async (event) => {
      const linkElement = event.target.closest("a");
      if (linkElement) {
        event.preventDefault();
        const orderId = linkElement.getAttribute("data-id");
        const currentStatus = linkElement.textContent === "未處理";
        const newStatus = !currentStatus;

        const paidStatus = newStatus;

        await putOrders(orderId, paidStatus);
        linkElement.textContent = newStatus ? "未處理" : "已處理";

        await renderOrders(await getOrders());
      }
    });
  });
}
