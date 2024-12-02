export const renderCahrt = async (data) => {
  if (!Array.isArray(data) || data.length === 0) {
    console.error("提供的數據無效，請提供有效的數組。");
    return; // 如果數據無效，則返回
  }

  // 使用 reduce 計算每個地區的數量
  const areaCount = data.reduce((acc, item) => {
    acc[item.area] = (acc[item.area] || 0) + 1; // 計算每個地區的數量
    return acc;
  }, {});

  // 將 areaCount 轉換為 c3.js 所需的格式
  const columns = Object.entries(areaCount).map(([area, count]) => [
    area,
    count,
  ]);

  const chartBlock = document.querySelector("#chart");
  if (!chartBlock) return null;

  let chart = c3.generate({
    bindto: "#chart",
    data: {
      type: "pie",
      pie: {
        padAngle: 0,
      },
      arc: {
        stroke: {
          width: 0,
        },
      },
      columns: [
        ["Louvre 雙人床架", 1],
        ["Antony 雙人床架", 2],
        ["Anty 雙人床架", 3],
        ["其他", 4],
      ],
      colors: {
        "Louvre 雙人床架": "#DACBFF",
        "Antony 雙人床架": "#9D7FEA",
        "Anty 雙人床架": "#5434A7",
        其他: "#301E5F",
      },
    },
  });
};

renderCahrt();
