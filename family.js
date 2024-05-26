let petsImageUrls = {
  //  family: "https://res.cloudinary.com/dirndculx/image/upload/v1716691006/cvsn4zovzalm3zl15uho.jpg",
    appa: "https://res.cloudinary.com/dirndculx/image/upload/v1716690959/dllfoleo0dr9tgojvyxg.jpg",
    amma: "https://res.cloudinary.com/dirndculx/image/upload/v1716690959/ad4r2ziyyi3ytzldaece.jpg",
    thambi: "https://res.cloudinary.com/dirndculx/image/upload/v1716690995/ibkbradh4pnysqyq6npf.jpg",
    me: "https://res.cloudinary.com/dirndculx/image/upload/v1716690995/k8sxwv8npamb4uhhxncn.jpg"
};
let petSelect = document.getElementById("petSelect");
let petImg = document.getElementById("petImg");

petSelect.addEventListener("change", function(event) {
    let petValue = petSelect.value; //event.target.value
    let petUrl = petsImageUrls[petValue];
    petImg.src = petUrl;
});
