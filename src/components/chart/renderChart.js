import { getOrders } from "../../services/orderServices";

export const renderChart = async () => {
  const data = await getOrders();

  const chart = document.querySelector("#chart");
  if (!chart) return;

  const productCounts = data.orders.reduce((acc, order) => {
    order.products.forEach((product) => {
      const productName = product.title;
      const productQuantity = product.quantity;
      const productPrice = product.price;

      const revenue = productQuantity * productPrice;

      if (acc[productName]) {
        acc[productName] += revenue;
      } else {
        acc[productName] = revenue;
      }
    });
    return acc;
  }, {});

  const productArray = Object.entries(productCounts).sort(
    ([, revenueA], [, revenueB]) => revenueB - revenueA,
  );

  const topProducts = productArray.slice(0, 3);
  const otherRevenue = productArray
    .slice(3)
    .reduce((acc, [, value]) => acc + value, 0);

  if (otherRevenue > 0) {
    topProducts.push(["其他", otherRevenue]);
  }

  const finalProductArray = topProducts;

  if (productArray.length > 0) {
    const chart = c3.generate({
      bindto: "#chart",
      data: {
        columns: finalProductArray,
        type: "pie",
      },
      color: {
        pattern: [
          "#DACBFF",
          "#9D7FEA",
          "#00509E",
          "#0073E6",
          "#99CCFF",
          "#66B3FF",
          "#3399FF",
          "#004080",
        ],
      },
      pie: {
        label: {
          format: (value, id, ratio) => {
            return `${Math.round(id * 100)}%`;
          },
        },
      },
    });
  } else {
    chart.innerHTML = "";

    chart.insertAdjacentHTML(
      "beforeend",
      "<p class='text-center text-gray-500'>目前沒有任何訂單</p>",
    );
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderChart();
});

export const updateChartData = async () => {
  await renderChart();
};
