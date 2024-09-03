 let darkMode= false;

 function changerDarkMode() {
    if(darkMode) {

    darkMode= false;
    document.documentElement.style.setProperty("--text-color","black");
    document.documentElement.style.setProperty("--background-color","#efe7e5");
    document.getElementById("dark-light-mode").innerHTML = "Thème Sombre"; 
} else {
    darkMode= true;
    document.documentElement.style.setProperty("--text-color","white");
    document.documentElement.style.setProperty("--background-color","#464858");
    document.getElementById("dark-light-mode").innerHTML = "Thème Clair";
}
 }


 let livresTotal=500;
 livresTotal+=50;
 livresTotal
console.log