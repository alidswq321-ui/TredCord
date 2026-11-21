import "../style.css";

document.querySelector("#app").innerHTML = `
  <h1>TredCord</h1>
  <p>مرحباً بك في مشروعك</p>
  <button id="plugins">الإضافات</button>
  <button id="themes">الثيمات</button>
`;

document.querySelector("#plugins").onclick = () => {
  alert("قريباً: متجر الإضافات");
};

document.querySelector("#themes").onclick = () => {
  alert("قريباً: الثيمات");
};
