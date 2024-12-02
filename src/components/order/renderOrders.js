import { getOrders } from "../../services/orderServices";

export const renderOrders = async (orderData) => {
  const orderList = document.querySelector(".orderPage-table");
  console.log(orderData.orders);

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
          <p>${item.products.map((product) => product.title).join(" ")}</p>
        </td>
        <td>2021/03/08</td>
        <td class="orderStatus">
          <a href="#">未處理</a>
        </td>
        <td>
          <input type="button" class="delSingleOrder-Btn" value="刪除" />
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
};

export default renderOrders;
