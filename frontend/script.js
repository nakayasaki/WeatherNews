const cityInput = document.getElementById("cityInput");
const forecastBtn = document.getElementById("forecastBtn");
const resultDiv = document.getElementById("weatherResult");

forecastBtn.addEventListener("click", () => {
  
const city = document.querySelector('input[name="city"]:checked').value;
    fetch(`http://weathernews-4jac.onrender.com/forecast?city=${city}`)
    .then(res => res.json())
    .then(data => {
      resultDiv.innerHTML = ""; // 前の結果をクリア

      for (const date in data.forecast) {
        const dayDiv = document.createElement("div");
        dayDiv.style.border = "1px solid #ccc";
        dayDiv.style.padding = "10px";
        dayDiv.style.margin = "10px 0";
        dayDiv.style.borderRadius = "5px";
        dayDiv.innerHTML = `<h3>${date}の天気（${data.city}）</h3>`;

        const f = data.forecast[date];

        if (f.morning) {
          dayDiv.innerHTML += `<p>🌅 朝: ${f.morning.weather[0].description}, ${f.morning.main.temp}℃</p>`;
        }
        if (f.noon) {
          dayDiv.innerHTML += `<p>☀️ 昼: ${f.noon.weather[0].description}, ${f.noon.main.temp}℃</p>`;
        }
        if (f.evening) {
          dayDiv.innerHTML += `<p>🌙 晩: ${f.evening.weather[0].description}, ${f.evening.main.temp}℃</p>`;
        }

        resultDiv.appendChild(dayDiv);
      }
    })
    .catch(err => {
      console.error(err);
      alert("天気情報の取得に失敗しました。");
    })

    //DOGAPI(しばいぬか秋田犬)
    const breeds = ["shiba", "akita"];
    const selectedBreed = breeds[Math.floor(Math.random() * breeds.length)];

  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    .then(res => res.json())
    .then(data => {
      dogImg.innerHTML = ""; // 前の画像クリア

const title = document.createElement("div");
    title.textContent = "きょうのわんこ";
    title.style.fontWeight = "bold";
    title.style.fontSize = "1.2em";
    title.style.marginBottom = "6px";
    dogImg.appendChild(title);

      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Random Dog";
      img.style.maxWidth = "300px";
      img.style.borderRadius = "8px";

    
      dogImg.appendChild(img);
    })
    .catch(err => {
      console.error(err);
      alert("犬画像の取得に失敗しました。");
    });
  }
)