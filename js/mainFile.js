let TvSectionIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCh-f9dRRBB9ERszGJdoxkiZELlYSLzH-aMQ&s';
let MoviesSectionIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIMGFCxokq8Vhi27FmgyPQOqSuolbXVQDNA&s';
let SearchSectionIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-m5Tk-qMauFbYfVOggOL-fKJMc80C7xMIA&s';

let btn = document.querySelector(".buttonContainer");

btn.onclick = () => {
  // if (window.localStorage.getItem("mode") === "dark") {
  //   document.body.classList.add("DarkMode")
  //   document.body.classList.remove("LightMode");

  // } else {
  //   document.body.classList.add("LightMode")
  //   document.body.classList.remove("DarkMode");

  // }



  if (document.body.classList.contains("LightMode")) {
    document.body.classList.remove("LightMode");
    document.body.classList.add("DarkMode");
    document.querySelector(".cycle ").style.cssText =
      "right:0;left:calc(100% - 20px)";
    window.localStorage.setItem("mode", "DarkMode")

  } else {
    document.body.classList.remove("DarkMode");
    document.body.classList.add("LightMode");
    document.querySelector(".cycle ").style.cssText =
      "left:0;right:calc(100% - 20px)";
    window.localStorage.setItem("mode", "LightMode")

  }

};

setInterval(() => {
  if (document.body.classList.contains("DarkMode")) {
    document.querySelector(".sideBar").style.backgroundColor = "#050923";
    document.querySelector(".sideBar").style.Color = "white";
    document.querySelector(".sideBar").style.borderColor = "white";
    document.querySelector(".cycle i").classList.remove("fa-sun");
    document.querySelector(".cycle i").classList.add("fa-moon");
    document.querySelector(".cycle ").style.color = "#050923";
    document.querySelector(".cycle ").style.backgroundColor = "white";
    document.querySelector(".cycle ").style.cssText =
      "left:0;right:calc(100% - 20px)";
    document.documentElement.style.setProperty("--light-color", "#ffffff")
  } else {
    document.querySelector(".sideBar").style.backgroundColor = "white";
    document.querySelector(".sideBar").style.Color = "#050923";
    document.querySelector(".sideBar").style.borderColor = "#050923";
    document.querySelector(".cycle i").classList.add("fa-sun");
    document.querySelector(".cycle i").classList.remove("fa-moon");
    document.querySelector(".cycle ").style.color = "#050923";
    document.querySelector(".cycle ").style.backgroundColor = "black";
    document.querySelector(".cycle ").style.cssText =
      "right:0;left:calc(100% - 20px)";
    document.documentElement.style.setProperty("--light-color", "#050a3f")

  }
}, 0);



// let currentPosition = 0;
// const step = 400;
// const minLimit = -6000;
// const maxLimit = 0;
// let right = document.querySelector(".right");
// let left = document.querySelector(".left");
// let PopularRight = document.querySelector(".popular .right");
// let PopularLeft = document.querySelector(".popular .left");
// let UpcomingRight = document.querySelector(".Upcoming .right");
// let UpcomingLeft = document.querySelector(".Upcoming .left");
// let tvContent = document.querySelector(".containerContentBody");
// let PopularContent = document.querySelector(".PopularContent");
// let UpcomingContent = document.querySelector(".UpcomingContent");

// left.addEventListener("click", () => {
//   if (currentPosition + step <= maxLimit) {
//     currentPosition += step;
//   } else {
//     currentPosition = maxLimit;
//   }
//   tvContent.style.transform = `translateX(${currentPosition}px)`;
// });

// right.addEventListener("click", () => {
//   if (currentPosition - step >= minLimit) {
//     currentPosition -= step;
//   } else {
//     currentPosition = minLimit;
//   }
//   tvContent.style.transform = `translateX(${currentPosition}px)`;
// });


// PopularLeft.addEventListener("click", () => {
//   if (currentPosition + step <= maxLimit) {
//     currentPosition += step;
//   } else {
//     currentPosition = maxLimit;
//   }
//   PopularContent.style.transform = `translateX(${currentPosition}px)`;
// });

// PopularRight.addEventListener("click", () => {
//   if (currentPosition - step >= minLimit) {
//     currentPosition -= step;
//   } else {
//     currentPosition = minLimit;
//   }
//   PopularContent.style.transform = `translateX(${currentPosition}px)`;
// });


// UpcomingLeft.addEventListener("click", () => {
//   if (currentPosition + step <= maxLimit) {
//     currentPosition += step;
//   } else {
//     currentPosition = maxLimit;
//   }
//   UpcomingContent.style.transform = `translateX(${currentPosition}px)`;
// });

// UpcomingRight.addEventListener("click", () => {
//   if (currentPosition - step >= minLimit) {
//     currentPosition -= step;
//   } else {
//     currentPosition = minLimit;
//   }
//   UpcomingContent.style.transform = `translateX(${currentPosition}px)`;
// });

const step = 400; // المسافة التي يتحرك بها المحتوى في كل مرة

const sliders = [
  { left: ".left", right: ".right", content: ".containerContentBody" },
  { left: ".popular .left", right: ".popular .right", content: ".PopularContent" },
  { left: ".Upcoming .left", right: ".Upcoming .right", content: ".UpcomingContent" }
];

// دالة عامة لتحريك أي شريط تمرير
function setupSlider({ left, right, content }) {
  let currentPosition = 0;
  const container = document.querySelector(content);
  const maxLimit = 0;
  const minLimit = -container.scrollWidth + container.parentElement.clientWidth;

  document.querySelector(left).addEventListener("click", () => {
    currentPosition = Math.min(currentPosition + step, maxLimit);
    container.style.transform = `translateX(${currentPosition}px)`;
  });

  document.querySelector(right).addEventListener("click", () => {
    currentPosition = Math.max(currentPosition - step, minLimit);
    container.style.transform = `translateX(${currentPosition}px)`;
  });
}

// تطبيق دالة التمرير على جميع الأقسام
sliders.forEach(setupSlider);

// document.querySelector(".left").onclick = () => {

//   document.querySelector(".TvContentBody").style.transform = `translateX(-${numbers + 100}px)`
// }
let lis = document.querySelectorAll(".sideBar ul li a");
lis.forEach((li) => {
  li.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active")
    li.classList.add("active")
  })

})


let MovieIcon = document.querySelectorAll(".movie");
let HomeIcon = document.querySelector(".home");
let TvIcon = document.querySelectorAll(".tv");
let SearchIcon = document.querySelector("i.search");
HomeIcon.onclick = () => {
  document.querySelector("aside").style.display = "flex"
  document.querySelector(".movieList").style.display = "none"
  document.querySelector(".SearchBar").style.display = "none"
  document.querySelector(".TvList").style.display = "none"
  window.document.title = "Tawfik Movies";
  document.head.querySelector("link:last-child").setAttribute("href", "../images/icon.png")
}

MovieIcon.forEach((Movie) => {
  Movie.addEventListener("click", () => {
    document.querySelector("aside").style.display = "none"
    document.querySelector(".movieList").style.display = "flex"
    document.querySelector(".SearchBar").style.display = "none"
    document.querySelector(".TvList").style.display = "none"
    document.querySelector(".active").classList.remove("active")
    document.querySelector(".fa-film").classList.add("active")
    window.document.title = "Movies ";
    document.head.querySelector("link:last-child").setAttribute("href", `${MoviesSectionIcon}`)


  })
})


TvIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    document.querySelector("aside").style.display = "none"
    document.querySelector(".TvList").style.display = "flex"
    document.querySelector(".SearchBar").style.display = "none"
    document.querySelector(".movieList").style.display = "none"
    document.querySelector(".active").classList.remove("active")
    document.querySelector(".fa-tv").classList.add("active")
    window.document.title = "TV series";
    document.head.querySelector("link:last-child").setAttribute("href", `${TvSectionIcon}`)



  })
})
SearchIcon.onclick = () => {
  document.querySelector("aside").style.display = "none";
  document.querySelector(".TvList").style.display = "none";
  document.querySelector(".movieList").style.display = "none";
  document.querySelector(".SearchBar").style.display = "flex";
  document.querySelector(".search").style.display = "flex";
  window.document.title = "Search";
  document.head.querySelector("link:last-child").setAttribute("href", `${SearchSectionIcon}`)

}

// function search() {
//   let filter = document.querySelector("#search").ariaValueMax.toUpperCase()
//   let item = document.querySelectorAll(".card");
//   let l = document.getElementsByClassName("CardTitle");
//   for (let i = 0; i < l.length; i++) {
//     let a = item[i].getElementsByClassName("card")[0];
//     let value = a.innerHTML || a.innerText || a.textContent;
//     if (value.toUpperCase().indexOf(filter) > -1) {
//       item[i].style.display = '';
//     } else {
//       item[i].style.display = 'none';

//     }

//   }
// }

const searchInput = document.querySelector("#searchInput"); // حقل البحث
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll(".Card").forEach(card => {
    const title = card.querySelector(".CardTitle").innerText.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});



// const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// if (userPrefersDark) {

//   document.body.classList.add("DarkMode");
//   window.localStorage.setItem("mode", "dark");
// } else {
//   document.body.classList.add("LightMode");
//   window.localStorage.setItem("mode", "light");
// }

if (window.localStorage.getItem("mode") === "dark") {
  document.body.classList.add("DarkMode")
  document.body.classList.remove("LightMode");

} else {
  document.body.classList.add("LightMode")
  document.body.classList.remove("DarkMode");

}



if (window.localStorage.getItem("mode") === "DarkMode") {
  document.body.classList.remove("LightMode");
  document.body.classList.add("DarkMode");


} else {
  document.body.classList.remove("DarkMode");
  document.body.classList.add("LightMode");

};
