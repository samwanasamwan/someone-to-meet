window.onload = function () {
  var numberOfNames = 20;
  for (var i = 0; i < numberOfNames; i++) {
    createRainName();
  }
};

var names = ["🎈", "🌹", "🌸", "🌷", "🌺"];

function createRainName() {
  var span = document.createElement("span");
  span.className = "name";
  span.textContent = names[Math.floor(Math.random() * names.length)];

  var x = Math.random() * (window.innerWidth - span.offsetWidth);
  var delay = Math.random() * 3;
  var duration = 3 + Math.random() * 3;

  span.style.left = x + "px";
  span.style.animationDelay = delay + "s";
  span.style.animationDuration = duration + "s";

  document.querySelector(".rain-container").appendChild(span);
}

var numberOfNames = 20;

for (var i = 0; i < numberOfNames; i++) {
  createRainName();
}

let menu = [
  "section #card1",
  "section #card2",
  "section #card3",
  "section #card4",
  "section #card5",
  "section #card6",
  "section #card7",
  "section #card8",
];

let cafe = ["Oikia Cafe and Eatery", "Flocks Coffee & Eatery", "ALIBI CAFE"];
let meet_date = ["12", "13", "14"];
let meet_time = ["After Work", "18:00", "19:00"];

let chosen_cafe;
let chosen_meet_date;
let chosen_meet_time;

let click_interval = 0;
let sad_text;
let sad_gif;

function updateSadMessage() {
  if (click_interval < 3) {
    sad_text =
      "Padahal <i>aku</i> <b>si form input</b> sudah ada tapi kok dikacangin siih...";
    sad_gif = "sad.gif";
  } else if (click_interval < 6) {
    sad_text = "Udah lebih dari 3 kali loh aku diginiin";
    sad_gif = "sad.gif";
  } else if (click_interval < 10) {
    sad_text = "Yaudaaah... maaf ya Zein udah gangguin kamu";
    sad_gif = "very_sad.gif";
  } else {
    alert("Fine");
    location.reload();
  }
}

function showInputAlert() {
  updateSadMessage();

  Swal.fire({
    title: "Jadi gini yaa...",
    html: sad_text,
    imageUrl: sad_gif,
    imageWidth: 120,
    imageHeight: 120,
    background: "#f9a8bb",
    confirmButtonText: "OK",
  });
}

$("#first_button").on("click", function () {
  $("#content").empty();
  $("#content").html($(menu[0]));
});

$("#second_button").on("click", function () {
  $("#content").empty();
  $("#content").html($(menu[1]));
});

$("#third_button").on("click", function () {
  $("#content").empty();
  $("#content").html($(menu[2]));
});

$("#fourth_button").on("click", function () {
  $("#content").empty();
  $("#content").html($(menu[3]));
});

$(document).on("click", "#content .cafe-button", function () {
  let index = Number($(this).data("value")) - 1;
  chosen_cafe = cafe[index];
  $("#content").html($(menu[4]).clone());
});

$(document).on("click", "#content .meet-date-button", function () {
  let index = Number($(this).data("value")) - 1;
  chosen_meet_date = meet_date[index];
  $("#content").html($(menu[5]).clone());
});

$(document).on("click", "#content .meet-time-button", function () {
  let index = Number($(this).data("value")) - 1;
  chosen_meet_time = meet_time[index];
  let card = $(menu[6]).clone();

  card
    .find("#confirmationText")
    .text(
      `Kita ketemu di ${chosen_cafe} tanggal ${chosen_meet_date} di jam ${chosen_meet_time}`,
    );

  $("#content").html(card);
});

$(document).on("click", "#content #custom_cafe_button", function () {
  chosen_cafe = $("#content #custom_cafe").val();

  if (chosen_cafe && chosen_cafe.trim() !== "") {
    $("#content").html($(menu[4]).clone());
  } else if (click_interval < 10) {
    click_interval++;
    showInputAlert();
  }
});

$(document).on("click", "#content #custom_meet_time_button", function () {
  chosen_meet_time = $("#content #custom_meet_time").val();

  if (chosen_meet_time && chosen_meet_time.trim() !== "") {
    let card = $(menu[6]).clone();

    card
      .find("#confirmationText")
      .text(
        `Kita ketemu di ${chosen_cafe} tanggal ${chosen_meet_date} di jam ${chosen_meet_time}`,
      );

    $("#content").html(card);
  } else if (click_interval < 10) {
    click_interval++;
    showInputAlert();
  }
});

$(document).on("click", "#content #buttonAccept", function () {
  $("#content").html($(menu[7]).clone());
});