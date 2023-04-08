window.addEventListener("load",()=>
{

  
const canvas = document.querySelector(".canvas");
const btext3 = document.querySelector(".ball-text");

const btext = document.querySelector(".ball-text1");

const btext2 = document.querySelector(".ball-text2");
btext.style.opacity = 0;
btext2.style.opacity = 0;
btext.style.opacity = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const context = canvas.getContext("2d");
const frameCount = 120;

const currentFrame = (index) => `./s/${(index + 1).toString()}.png`;



const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();

  img.src = currentFrame(i);
  console.log(currentFrame(i));
  

  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".ball-text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "40%",
      end: "50%",
    },
 
  }
);


gsap.fromTo(
  ".ball-text1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      scrub: 1,

      start: "1%",
      end: "10%",
    },
   
  }
);
gsap.fromTo(
  ".ball-text2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      scrub: 1,

      start: "1%",
      end: "10%",
    },
   
  }
);


images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}

const hello = [
  "Hola", // Spanish
  "Bonjour", // French
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "你好", // Chinese (Simplified)
  "kida", // punjabi
  "Ciao", // Italian
  "Olá", // Portuguese
  "Hallo", // German
  "Salam", // Arabic
  "Szia", // Hungarian
  "Merhaba", // Turkish
  "Halo", // Indonesian
  "Dobrý den", // Czech
  "Γεια σας", // Greek
  "Hei", // Norwegian
  "Ahoj", // Slovak
  "Salut", // Romanian
  "Hej", // Swedish
];


const sentences = hello.map((greeting) => {
  switch (greeting) {
    case "Hello":
      return "I am Sahilpreet Singh, a coder."; // English
    case "Hola":
      return "Soy Sahilpreet Singh, un programador."; // Spanish
    case "Bonjour":
      return "Je suis Sahilpreet Singh, un codeur."; // French
    case "こんにちは":
      return "私はコーダーのサヒルプリート・シンです。"; // Japanese
    case "안녕하세요":
      return "나는 코더 Sahilpreet Singh입니다."; // Korean
    case "你好":
      return "我是程序员Sahilpreet Singh。"; // Chinese (Simplified)
    case "Здравствуйте":
      return "Я Сахильприт Сингх, программист."; // Russian
    case "Ciao":
      return "Sono Sahilpreet Singh, un programmatore."; // Italian
    case "Olá":
      return "Eu sou Sahilpreet Singh, um programador."; // Portuguese
    case "Hallo":
      return "Ich bin Sahilpreet Singh, ein Programmierer."; // German
    case "Salam":
      return "أنا ساهيلبيريت سينغ، مبرمج."; // Arabic
    case "Szia":
      return "Sahilpreet Singh vagyok, kódoló."; // Hungarian
    case "Merhaba":
      return "Ben Sahilpreet Singh, bir kodlayıcıyım."; // Turkish
    case "Halo":
      return "Saya Sahilpreet Singh, seorang coder."; // Indonesian
    case "Dobrý den":
      return "Jsem Sahilpreet Singh, programátor."; // Czech
    case "Γεια σας":
      return "Είμαι ο Sahilpreet Singh, ένας προγραμματιστής."; // Greek
    case "Hei":
      return "Jeg er Sahilpreet Singh, en utvikler."; // Norwegian
    case "Ahoj":
      return "Jsem Sahilpreet Singh, programátor."; // Slovak
    case "Salut":
      return "Sunt Sahilpreet Singh, un programator."; // Romanian
    case "Hej":
      return "Jag är Sahilpreet Singh";
      case "kida":
        return "mera naam sahilpreet singh a";
  }
});
let  i =0 ;
setInterval(() => {
btext.textContent = hello[i];
btext2.textContent = sentences[i];
  i++;

  if(i == 19)
  {
    i =0;
  }
}, 1000);


})
