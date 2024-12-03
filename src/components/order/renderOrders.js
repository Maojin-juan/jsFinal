import { attachDeleteBtn } from "./handelDelOrders";
import { attachPutBtn } from "./handlePutOrders";

export default async function renderOrders(orderData) {
  const orderList = document.querySelector(".orderPage-table");
  if (!orderList) return;

  orderList.innerHTML = "";

  const orderItem = orderData.orders
    .map(
      (item) => `
      <tr>
        <td>${item.createdAt}</td>
        <td>
          <p>${item.user.name}</p>
          <p>${item.user.tel}</p>
        </td>
        <td>${item.user.address}</td>
        <td>${item.user.email}</td>
        <td>
          <p>
            ${item.products.map((product) => `${product.title} | 購入: ${product.quantity}`).join("<br>")}
          </p>
        </td>
        <td>${new Date(item.createdAt * 1000).toLocaleDateString("zh-TW")}</td>
        <td class="orderStatus">
          <a class=${item.paid ? "text-red-600" : "text-green-500"} data-id="${item.id}" href="#">${item.paid ? "未處理" : "已處理"}</a>
        </td>
        <td>
          <input type="button" class="delSingleOrder-Btn" data-id="${item.id}" value="刪除" />
        </td>
      </tr>
      `,
    )
    .join("");

  orderList.insertAdjacentHTML(
    "beforeend",
    `
    <thead>
      <tr>
        <th>訂單編號</th>
        <th>聯絡人</th>
        <th>聯絡地址</th>
        <th>電子郵件</th>
        <th>訂單品項</th>
        <th>訂單日期</th>
        <th>訂單狀態</th>
        <th>操作</th>
      </tr>
    </thead>
    ${orderItem}
    `,
  );

  attachDeleteBtn();
  attachPutBtn();
}
