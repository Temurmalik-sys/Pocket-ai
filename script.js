function getItems(){
    return JSON.parse(localStorage.getItem("items") || "[]");
}

function saveItems(items){
    localStorage.setItem("items", JSON.stringify(items));
}

function addItem(){

    const type = document.getElementById("type").value;
    const place = document.getElementById("place").value;
    const value = document.getElementById("value").value;

    if(!value){
        alert("Link kiriting");
        return;
    }

    const items = getItems();

    items.push({
        type: type,
        place: place,
        value: value
    });

    saveItems(items);

    document.getElementById("value").value = "";

    alert("Saqlandi");
}

function renderItems(page){

    const items = getItems();
    let html = "";

    items.forEach(item => {

        let show = false;

        if(item.place === "home" && page === "home"){
            show = true;
        }

        if(item.place === "home_services" && (page === "home" || page === "services")){
            show = true;
        }

        if(!show) return;

        if(item.type === "video"){
            html += `
                <iframe width="100%" height="220"
                src="${item.value}"
                frameborder="0" allowfullscreen></iframe>
            `;
        }

        if(item.type === "image"){
            html += `
                <img src="${item.value}">
            `;
        }

    });

    return html;
}

function showPage(page){

    let html = "";

    if(page === "home"){
        html = "<h3>Bosh sahifa</h3>";
        html += renderItems("home");
    }

    if(page === "search"){
        html = `
            <h3>Qidiruv</h3>
            <input type="text" placeholder="Qidirish..." style="width:100%;padding:10px;">
        `;
    }

    if(page === "news"){
        html = `
            <h3>Yangiliklar</h3>
            <p>Hozircha yangiliklar yo‘q.</p>
        `;
    }

    if(page === "services"){
    html = "<h3>Xizmatlar</h3>";
    html += renderItems("services");
    html += renderServices();
}
    }

    document.getElementById("content").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", ()=>{
    if(document.getElementById("content")){
        showPage("home");
    }
});
function getServices(){
    return JSON.parse(localStorage.getItem("services") || "[]");
}

function saveServices(list){
    localStorage.setItem("services", JSON.stringify(list));
}

function addService(){

    const title = document.getElementById("serviceTitle").value;
    const desc = document.getElementById("serviceDesc").value;
    const tg = document.getElementById("serviceTelegram").value;

    if(!title || !tg){
        alert("Xizmat nomi va telegram link kiriting");
        return;
    }

    const services = getServices();

    services.push({
        title:title,
        desc:desc,
        telegram:tg
    });

    saveServices(services);

    document.getElementById("serviceTitle").value="";
    document.getElementById("serviceDesc").value="";
    document.getElementById("serviceTelegram").value="";

    alert("Xizmat saqlandi");
}