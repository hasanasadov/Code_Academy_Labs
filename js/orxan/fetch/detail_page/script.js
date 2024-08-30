const BASE_URL = "https://northwind.vercel.app/api";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


async function fetchPostById(id) {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        const post = await response.json();
        return post;
    } catch (error) {
        console.error(error);
    }
}


//loading animation
const loading = document.querySelector(".loading");

fetchPostById(id)
    .then((post) => {
        const tbodyelement = document.querySelector("tbody");
        const trelement = document.createElement("tr");
        trelement.innerHTML = `
            <td>${post.id}</td>
            <td>${post.name}</td>
            <td>${post.supplier?.companyName ?? "-"}</td>
            <td>
                <button id="goBack">Go Back</button>
                
            </td>
            `;
        tbodyelement.append(trelement);

        trelement.querySelector("#goBack").addEventListener("click", () => {
            window.location.href = "../home/index.html";
        });
    })
    .catch((error) => {
        console.error(error);
    });
