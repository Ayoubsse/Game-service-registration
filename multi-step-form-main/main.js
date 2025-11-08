let sects = document.querySelectorAll("section");
let next = document.querySelectorAll(".next");
let back = document.querySelectorAll(".back");
let slider = document.querySelector(".slider");
let yearly = document.querySelector(".yearly");
let monthly = document.querySelector(".monthly");
let month = document.querySelectorAll(".month");
let year = document.querySelectorAll(".year");
let free = document.querySelectorAll(".free");
let btnsTwo = document.querySelectorAll(".plans > button");
let num = document.querySelectorAll("aside ul li");
let one = document.querySelector(".one");
let name = document.querySelector(".name input");
let namel = document.querySelector(".name label span");
let namex = /[A-Za-z]\w+\s[A-Za-z]\w+/;
let mail = document.querySelector(".mail input");
let maill = document.querySelector(".mail label span");
let mailx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let phone = document.querySelector(".phone input");
let phonel = document.querySelector(".phone label span");
let phonex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,3}[-\s\./0-9]*$/;
let two = document.querySelector(".two");
let plan = "arcade";
let plant = "monthly";
let addons = document.querySelectorAll("main .three .addons > div");
let checkbox = document.querySelectorAll("main .three .addons > div input");
let addon = [];
let fplan = document.querySelector(".four .up .top .left h4");
let fplanp = document.querySelector(".four .up .top .price ");
let change = document.querySelector(".change");
let faddons = document.querySelector(".bottom");
let faddon;
let faddonps;
let title;
let price;
let totalp;
let total = document.querySelector(".total .total-price");
let totalh = document.querySelector(".total h5");
next.forEach((el, i) => {
  el.onclick = function () {
    if (i !== 3) {
      if (i === 2) {
        console.log("hi");
        fplan.textContent = `${plan[0].toUpperCase() + plan.slice(1)} (${
          plant[0].toUpperCase() + plant.slice(1)
        })`;
        if (plant == "monthly") {
          switch (plan) {
            case "arcade":
              fplanp.textContent = `$9/mo`;
              break;
            case "advanced":
              fplanp.textContent = `$12/mo`;
              break;
            case "pro":
              fplanp.textContent = `$15/mo`;
              break;
          }
          totalp = parseInt(fplanp.textContent.slice(1, 3));
          for (let i = 0; i < addon.length; i++) {
            let faddon = document.createElement("div");
            let title = document.createElement("h5");
            let price = document.createElement("div");
            price.classList.add("price");
            switch (addon[i]) {
              case "online":
                title.textContent = "Online service";
                price.textContent = "+1/mo";
                totalp += 1;
                break;
              case "storage":
                title.textContent = "Larger storage";
                price.textContent = "+2/mo";
                totalp += 2;
                break;
              case "profile":
                title.textContent = "Customizable profile";
                price.textContent = "+2/mo";
                totalp += 2;
                break;
            }
            faddon.append(title, price);
            faddons.append(faddon);
          }
          total.textContent = `$${totalp}/mo`;
          totalh.textContent = `Total ( per month )`;
        } else {
          switch (plan) {
            case "arcade":
              fplanp.textContent = `$90/yr`;
              break;
            case "advanced":
              fplanp.textContent = `$120/yr`;
              break;
            case "pro":
              fplanp.textContent = `$150/yr`;
              break;
          }
          totalp = parseInt(fplanp.textContent.slice(1, 4));
          for (let i = 0; i < addon.length; i++) {
            let faddon = document.createElement("div");
            let title = document.createElement("h5");
            let price = document.createElement("div");
            price.classList.add("price");
            switch (addon[i]) {
              case "online":
                title.textContent = "Online service";
                price.textContent = "+10/yr";
                totalp += 10;
                break;
              case "storage":
                title.textContent = "Larger storage";
                price.textContent = "+20/yr";
                totalp += 20;
                break;
              case "profile":
                title.textContent = "Customizable profile";
                price.textContent = "+20/yr";
                totalp += 20;
                break;
            }
            faddon.append(title, price);
            faddons.append(faddon);
          }
          total.textContent = `$${totalp}/yr`;
          totalh.textContent = `Total ( per year )`;
        }
      }
      console.log("Hello");
      for (let j = 0; j < sects.length; j++) {
        if (sects[j].classList.contains("now")) {
          if (
            namex.test(name.value) &&
            mailx.test(mail.value) &&
            phonex.test(phone.value)
          ) {
            for (let j = 0; j < num.length; j++) {
              if (num[j].classList.contains("active")) {
                num.forEach((el) => {
                  el.classList.remove("active");
                });
                num[j + 1].classList.add("active");
                break;
              }
            }
            sects.forEach((el) => {
              el.classList.remove("now");
            });
            sects[j + 1].classList.add("now");
            namel.style.display = "none";
            maill.style.display = "none";
            phonel.style.display = "none";
            break;
          } else {
            if (!namex.test(name.value)) {
              namel.style.display = "block";
              maill.style.display = "none";
              phonel.style.display = "none";
            } else if (!mailx.test(mail.value)) {
              namel.style.display = "none";
              maill.style.display = "block";
              phonel.style.display = "none";
            } else {
              namel.style.display = "none";
              maill.style.display = "none";
              phonel.style.display = "block";
            }
          }
        }
      }
    } else {
      sects[3].classList.remove("now");
      sects[4].classList.add("now");
    }
  };
});
back.forEach((el, i) => {
  el.onclick = function () {
    console.log("Hello");
    for (let j = 0; j < sects.length; j++) {
      if (sects[j].classList.contains("now")) {
        sects.forEach((el) => {
          el.classList.remove("now");
        });
        sects[j - 1].classList.add("now");
        break;
      }
    }
    for (let j = 0; j < num.length; j++) {
      if (num[j].classList.contains("active")) {
        num.forEach((el) => {
          el.classList.remove("active");
        });
        num[j - 1].classList.add("active");
        break;
      }
    }
  };
});

monthly.style.color = "hsl(213, 96%, 18%)";
year.forEach((el) => {
  el.style.display = "none";
});
free.forEach((el) => {
  el.style.display = "none";
});
slider.onclick = function () {
  if (slider.children[0].style.left !== "29px") {
    slider.children[0].style.left = "29px";
    yearly.style.color = "hsl(213, 96%, 18%)";
    monthly.style.color = "hsl(231, 9%, 57%)";
    month.forEach((el) => {
      el.style.display = "none";
    });
    year.forEach((el) => {
      el.style.display = "block";
    });
    free.forEach((el) => {
      el.style.display = "block";
    });
    plant = "yearly";
  } else {
    slider.children[0].style.left = "3px";
    monthly.style.color = "hsl(213, 96%, 18%)";
    yearly.style.color = "hsl(231, 9%, 57%)";
    month.forEach((el) => {
      el.style.display = "block";
    });
    year.forEach((el) => {
      el.style.display = "none";
    });
    free.forEach((el) => {
      el.style.display = "none";
    });
    plant = "monthly";
  }
};

btnsTwo.forEach((el) => {
  el.onclick = function () {
    btnsTwo.forEach((el) => {
      el.style.backgroundColor = "white";
      el.style.borderColor = "hsl(231, 9%, 57%)";
    });
    el.style.backgroundColor = "hsl(228, 100%, 84%)";
    el.style.borderColor = "hsl(243, 100%, 62%)";
    plan = el.className;
  };
});

addons.forEach((el, i) => {
  el.onclick = function () {
    if (!el.classList.contains("active")){ 
      el.classList.add("active");
      checkbox[i].checked = true;
      addon.push(el.classList[0]);
    } else {
      el.classList.remove("active");
      checkbox[i].checked = false;
      for (let i = 0; i < addon.length; i++) {
        if (addon[i] === el.classList[0]) {
          let a = [];
          a = addon.slice(0, i);
          a.push(...addon.slice(i + 1));
          addon = a.reverse();
          a = [];
        }
      }
    }
  };
});

change.onclick = function () {
  sects.forEach((el) => {
    el.classList.remove("now");
  });
  sects[1].classList.add("now");
  num.forEach((el) => {
    el.classList.remove("active");
  });
  num[1].classList.add("active");
  faddons.innerHTML = "";
  addon = Array.from(new Set(addon));
};


