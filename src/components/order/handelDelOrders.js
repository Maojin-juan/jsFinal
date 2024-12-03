import {
  getOrders,
  deleteOrderItem,
  deleteAllOrderItem,
} from "../../services/orderServices";
import renderOrders from "./renderOrders";
import { updateChartData } from "../chart/renderChart";

export function attachDeleteBtn() {
  const delSingleOrderBtn = document.querySelectorAll(".delSingleOrder-Btn");
  const delAllOrderBtn = document.querySelector(".discardAllBtn");

  delSingleOrderBtn.forEach((item) => {
    item.addEventListener("click", async (event) => {
      const orderId = event.target.getAttribute("data-id");

      await deleteOrderItem(orderId);
      await renderOrders(await getOrders());
      await updateChartData();
    });
  });

  delAllOrderBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    await deleteAllOrderItem();
    await renderOrders(await getOrders());
    await updateChartData();
  });
}
