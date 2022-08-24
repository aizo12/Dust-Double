const Btn1 = document.querySelector(".heads");
const Btn2 = document.querySelector(".tails");

Btn1.addEventListener("click", ()=>{
    Btn1.classList.add("active");
    Btn2.classList.remove("active");
});

Btn2.addEventListener("click", ()=>{
    Btn2.classList.add("active");
    Btn1.classList.remove("active");
});

const Sol1 = document.querySelector(".sol1");
const Sol2 = document.querySelector(".sol2");
const Sol3 = document.querySelector(".sol3");
const Sol4 = document.querySelector(".sol4");
const Sol5 = document.querySelector(".sol5");
const Sol = document.querySelector(".sol span");

Sol1.addEventListener("click", ()=>{
    Sol2.classList.remove("active2");
    Sol3.classList.remove("active2")
    Sol4.classList.remove("active2")
    Sol5.classList.remove("active2")
    Sol1.classList.add("active2");
});
Sol2.addEventListener("click", ()=>{
    Sol1.classList.remove("active2");
    Sol3.classList.remove("active2")
    Sol4.classList.remove("active2")
    Sol5.classList.remove("active2")
    Sol2.classList.add("active2");
});
Sol3.addEventListener("click", ()=>{
    Sol1.classList.remove("active2");
    Sol2.classList.remove("active2")
    Sol4.classList.remove("active2")
    Sol5.classList.remove("active2")
    Sol3.classList.add("active2");
});
Sol4.addEventListener("click", ()=>{
    Sol1.classList.remove("active2");
    Sol2.classList.remove("active2")
    Sol3.classList.remove("active2")
    Sol5.classList.remove("active2")
    Sol4.classList.add("active2");
});
Sol5.addEventListener("click", ()=>{
    Sol1.classList.remove("active2");
    Sol2.classList.remove("active2")
    Sol3.classList.remove("active2")
    Sol4.classList.remove("active2")
    Sol5.classList.add("active2");
});

//sideBar
const sideBar = document.querySelector(".sideBar");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const aTag = document.querySelectorAll(".sideBar a");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", ()=>{
  sideBar.classList.toggle("open");
  overlay.style.display = 'block';

});

closeBtn.addEventListener("click", ()=>{
  sideBar.classList.toggle("open");
  overlay.style.display = 'none';
});

aTag.forEach((anchor)=>{
  anchor.addEventListener("click", ()=>{
    sideBar.classList.remove("open");
    overlay.style.display = 'none';
  });
})