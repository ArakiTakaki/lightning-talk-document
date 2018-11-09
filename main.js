// アニメーション
function type1() {
  var element = document.getElementById("type-1");
  var text = new ShuffleText(element);
  text.duration = 1000;
  text.start();
}
function type2_1() {
  var element = document.getElementById("type-2-1");
  var text = new ShuffleText(element);
  text.duration = 500;
  text.start();
}
function type2_2() {
  var element = document.getElementById("type-2-2");
  var text = new ShuffleText(element);
  text.duration = 1000;
  text.start();
}

// 実行
setTimeout(function () {
  type1();
}, 1200);
setTimeout(function () {
  type2_1();
  type2_2();
}, 1900);

function getId(name) {
  return document.getElementById(name);
}
let count = 0;
function _timer(skip) {
  count += skip;
  return 1 * count;
}
function action(callback, timer) {
  setTimeout(callback, _timer(timer))
}
function timerReset() {
  count = 0;
}
// elements
var phase1 = getId("phase1");
var phase2 = getId("phase2");
var phase2_count = 4;
let phase2_list = [];
let phase2_list_child = [];
for (var i = 1; i <= phase2_count; i++) {
  phase2_list.push(getId(`phase2-${i}`));
  phase2_list_child.push(getId(`phase2-${i}-child`));
  console.log(phase2_list_child);
}

function phase2Events() {
  phase2.classList.add("fadein");
  action(function () {
    phase2_list[0].style.animation = "type_1 300ms ease 0 1 forwards";
  }, 1000);
  action(function () {
    phase2_list_child[0].style.opacity = 1;
    phase2_list[0].classList.add("show_bar");
  }, 500);

  // list1
  action(function () {
    phase2_list[1].style.animation = "type_1 300ms ease 0 1 forwards";
  }, 300);
  action(function () {
    phase2_list_child[1].style.opacity = 1;
    phase2_list[1].classList.add("show_bar");
  }, 500);
  // list2
  action(function () {
    phase2_list[2].style.animation = "type_1 300ms ease 0 1 forwards";
  }, 300);
  action(function () {
    phase2_list_child[2].style.opacity = 1;
    phase2_list[2].classList.add("show_bar");
  }, 700);

  // list3
  action(function () {
    phase2_list[3].style.animation = "type_1 300ms ease 0 1 forwards";
  }, 300);
  action(function () {
    phase2_list_child[3].style.opacity = 1;
    phase2_list[3].classList.add("show_bar");
  }, 700);
}

// events
var keypressCount = 0;
document.body.addEventListener("keypress", function () {
  keypressCount++;
  switch (keypressCount) {
    case 1:
      phase1.classList.add("fadeout");
      document.body.style.animation = "phase2 1s ease 0 1 forwards";
      phase2Events();
      break;
    case 2:
      phase2.classList.remove("fadein");
      break;
    default:
      return;
  }
});
