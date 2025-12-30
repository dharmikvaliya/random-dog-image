let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getImage();
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
  img.classList.add("show");
});

async function getImage() {
  try {
    let response = await axios.get(url);
    return response.data.message;
  } catch (error) {
    console.log("Error:", error);
    return "/";
  }
}
