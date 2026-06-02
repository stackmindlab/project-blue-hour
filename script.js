const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", showMessage);

function showHome() {
    location.reload();
}

function showMessage() {
    document.querySelector(".welcome").innerHTML = `
        <h1>💌 Feliz Cumpleaños</h1>

        <p>
            Hoy quería regalarte algo diferente.
            Un pequeño espacio con música, recuerdos
            y algunos detalles que me hicieron pensar en ti.
        </p>

        <button onclick="showHome()" class="back-btn">⬅ Inicio</button>
        <button id="continueBtn">Continuar ✨</button>
    `;

    document.getElementById("continueBtn").addEventListener("click", showPhoto1);
}

function showPhoto1() {
    document.querySelector(".welcome").innerHTML = `
        <h1>🎮 Recuerdo #1</h1>

        <img src="images/photo1.jpeg" class="memory-photo">

        <p>
            Siempre me llamó la atención este fondo que hiciste.
            Tenía tu estilo, tus gustos y algo muy tuyo
            que siempre me hacía pensar en ti cuando lo veía.
        </p>

        <button onclick="showMessage()" class="back-btn">⬅ Atrás</button>
        <button id="next1">Continuar ➜</button>
    `;

    document.getElementById("next1").addEventListener("click", showPhoto2);
}

function showPhoto2() {
    document.querySelector(".welcome").innerHTML = `
        <h1>🎯 Recuerdo #2</h1>

        <img src="images/photo2.jpeg" class="memory-photo">

        <p>
            De todas las partidas que vi,
            esta terminó quedándose en mi memoria.
            Tal vez por el momento...
            o tal vez por esa arma morada que siempre me gustó.
        </p>

        <button onclick="showPhoto1()" class="back-btn">⬅ Atrás</button>
        <button id="next2">Continuar ➜</button>
    `;

    document.getElementById("next2").addEventListener("click", showPhoto3);
}

function showPhoto3() {
    document.querySelector(".welcome").innerHTML = `
        <h1>👍 Recuerdo #3</h1>

        <img src="images/photo3.jpeg" class="memory-photo">

        <p>
            Y por supuesto...
            el famoso pulgar arriba.

            Una pequeña señal que siempre reconocería.
        </p>

        <button onclick="showPhoto2()" class="back-btn">⬅ Atrás</button>
        <button id="musicBtn">Ir a la Música 🎵</button>
    `;

    document.getElementById("musicBtn").addEventListener("click", showMusic);
}

function showMusic() {
    document.querySelector(".welcome").innerHTML = `
        <h1>🎵 Música</h1>

        <p>
            Tres canciones para acompañar este pequeño detalle.
        </p>

        <div class="music-list">
            <a href="https://www.youtube.com/watch?v=GwNs4Vy4H4o" target="_blank">
                Banda MS - Las Mañanitas
            </a>

            <a href="https://youtu.be/5ar42kauTd8?si=Kco1D-I2iuaprFGX" target="_blank">
                Vicente Fernández - Las Mañanitas
            </a>

            <a href="https://youtu.be/MP1G8wnLpSM?si=OEnEQ7eIXlT8CGWj" target="_blank">
                This Song - Conan Gray
            </a>
        </div>

        <button onclick="showPhoto3()" class="back-btn">⬅ Atrás</button>
        <button id="finalBtn">Final 🌙</button>
    `;

    document.getElementById("finalBtn").addEventListener("click", showFinal);
}

function showFinal() {
    document.querySelector(".welcome").innerHTML = `
        <h1>🎂 Feliz Cumpleaños</h1>

        <p>
            Espero que este día te traiga alegría,
            paz y momentos bonitos.
        </p>

        <p>
            Gracias por los recuerdos, las risas,
            las partidas y esos pequeños detalles
            que se quedaron conmigo.
        </p>

        <p>
            Que este nuevo año de vida te regale cosas buenas. Te mando un fuerte abrazo en este dia, bendiciones. 
            🌙💙
        </p>

        <button onclick="showMusic()" class="back-btn">⬅ Atrás</button>
        <button onclick="showHome()">Inicio 🌙</button>
    `;
}