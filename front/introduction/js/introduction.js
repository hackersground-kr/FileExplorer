fetch("https://www.daegu.go.kr/icms/rss/feed.do?id=BBS_02086")
  .then((res) => res.text())
  .then((data) => {
    let xml = new DOMParser().parseFromString(data, "text/xml");

    const offices = xml.querySelectorAll("item");
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";
    offices.forEach((i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${i.querySelector("title").innerHTML}</td>
      <td><a href="${i.querySelector("link").innerHTML}">상세보기</a></td>`;
      tbody.appendChild(tr);
    });
  });
