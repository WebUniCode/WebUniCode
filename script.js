document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("logo").style.opacity = "1";
        document.getElementById("icon").style.opacity = "1";
    }, 3000);
    
    document.getElementById("logo").addEventListener("click", redirectToMainPage);
    document.getElementById("icon").addEventListener("click", redirectToMainPage);
});

function redirectToMainPage() {
    // Desvanecer el video, el texto y el icono gradualmente
    var video = document.getElementById("background-video");
    var logo = document.getElementById("logo");
    var icon = document.getElementById("icon");
    video.style.opacity = "0";
    logo.style.opacity = "0";
    icon.style.opacity = "0";
    video.style.transition = "opacity 1s ease-in-out";
    logo.style.transition = "opacity 1s ease-in-out";
    icon.style.transition = "opacity 1s ease-in-out";
    
    // Redireccionar a la página principal después de desvanecer el video, el texto y el icono
    setTimeout(function() {
        window.location.href = "//Pprincipal/index.html";
    }, 1000); // Esperar 1 segundo antes de redireccionar
}
