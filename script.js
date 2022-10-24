window.addEventListener("load", () => {
  $.ajax({
    url: "https://63551d07da523ceadcfaa8a1.mockapi.io/data",
    success: (results) => {
      let datas = "";
      results.forEach((r) => {
        datas += `
                <div class="card" style="width: 18rem">
                <img src="${r.avatar}" class="card-img-top" alt="..." height="160px"/>
                <div class="card-body">
                  <h5 class="card-title">${r.judul}</h5>
                  <a href="${r.link}" class="btn btn-primary">Lihat Berita</a>
                </div>
              </div>
        `;
      });
      $(".news-container").html(datas);
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

// <div class="news" style="width:400px;display:flex;flex-direction:column;align-content:center; box-shadow:0 0 5px rgba(0,0,0,0.3); border-radius:20px; padding:5px;">
//     <div style="width:400px; height:200px;background-image:url(${r.avatar});background-size:cover;background-position:center;border-radius:20px;">
//     </div>
//     <h2 style="margin:5px 0;">${r.judul}<h2>
//     <a href="${r.link}">
//         <p style="font-size:18px;color:blue;">link berita lengkap<p>
//     <a>
// </div>
