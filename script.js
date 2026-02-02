function saveVideo(){
    const val = document.getElementById("videoInput").value;
    localStorage.setItem("video", val);
    alert("Video saqlandi");
}

function saveImage(){
    const val = document.getElementById("imageInput").value;
    localStorage.setItem("image", val);
    alert("Rasm saqlandi");
}

function saveTelegram(){
    const val = document.getElementById("telegramInput").value;
    localStorage.setItem("telegram", val);
    alert("Telegram link saqlandi");
}

function showPage(page){

    let html = "";

    const video = localStorage.getItem("video");
    const image = localStorage.getItem("image");
    const telegram = localStorage.getItem("telegram");

    if(page === "home"){
        html += "<h3>Bosh sahifa</h3>";

        if(video){
            html += `<iframe width="100%" height="215" src="${video}" frameborder="0" allowfullscreen></iframe>`;
        }

        if(image){
            html += `<img src="${image}">`;
        }

        if(telegram){
            html += `<p><a href="${telegram}" target="_blank">Telegram kanalga o‘tish</a></p>`;
        }
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
        html = `
            <h3>Xizmatlar</h3>
            <ul>
                <li>Video xizmatlari</li>
                <li>Reklama joylash</li>
                <li>Telegram reklama</li>
            </ul>
        `;
    }

    document.getElementById("content").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", ()=>{
    if(document.getElementById("content")){
        showPage("home");
    }
});