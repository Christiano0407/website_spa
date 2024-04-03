//**TODO: === APP === */
const app = document.querySelector("#idApp");
const mobileLanding = document.querySelector("#mobileLanding");
const screenLanding = document.querySelector("#screenLanding");
const btnLanding = document.querySelector("#wrapperBtn"); 

//** === Transition Animation Landing ===  */

//** === Display */
document.addEventListener('DOMContentLoaded', () => {
  btnLanding.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("btn");
    try {
      const windows = window.location.href = "/src/html/home.html"; 
      const response = fetch(windows);

      if(!response.ok) {
        throw new Error(`Status HTTP Error, stats: ${(response).status}`);
      }

      const html = await response.text();
      const newPage = document.createElement("main"); 
      newPage.innerHTML = html;

      app.innerHTML = ""; 
      app.appendChild(newPage);

      if(app) {
        app.classList.add("none"); 
      } else {
        app.classList.remove("none");
      }


    }catch(err) {
      console.error("Error To Load your new Page", err);
      console.error(err.message); 
      console.error(response);
    }
  });
});