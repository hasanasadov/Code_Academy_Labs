const BASE_URL = "https://northwind.vercel.app/api";
const tbody = document.querySelector("#table-body");

async function fetchPosts() {
    const loading = document.querySelector(".loading");
    try {
        const response = await fetch(`${BASE_URL}/products`);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error(error);
    }
}

async function fillTable() {
    const posts = await fetchPosts();
    tbody.innerHTML = "";
    posts.forEach((post) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${post.id}</td>
            <td class="loading"></td>
            <td>${post.name}</td>            
            <td class="loading"></td>
            <td>${post.supplier?.companyName ?? "-"}</td>
            <td class="loading"></td>
            <td>
                <button id="editBtn">Edit</button>
                <button id="deleteBtn">Delete</button>
                <button id="detailBtn">Detail</button>
            </td>
            `;
        tbody.append(tr);

        tr.querySelector("#deleteBtn").addEventListener("click", async () => {
            if (!confirm("Are you sure?")) return;
            if ((await deletePost(post.id)) === true) {
                tr.remove();
            }
        });

        tr.querySelector("#editBtn").addEventListener("click", async () => {
            const name = prompt("Enter new name", post.name);
            if (!name) return;
            if ((await updatePost(post.id, { name })) === true) {
                post.name = name;
                tr.querySelector("td:nth-child(2)").textContent = name;
                fillTable();
            }
        });

        tr.querySelector("#detailBtn").addEventListener("click", async () => {
            window.location.href = `../detail_page/index.html?id=${post.id}`;
        });
    });
}

async function deletePost(id) {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: "DELETE",
        });
        return response.status === 200;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function updatePost(id, data) {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.status === 200;
    } catch (error) {
        console.error(error);
        return false;
    }
}

fillTable();

