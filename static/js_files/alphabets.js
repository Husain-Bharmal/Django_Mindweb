var words = document.getElementById("spelling");                         //Alphabets("","","","","","","","","","")
let img1 = document.getElementById("image1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

function Alphabets(id,spelling,speech,img,img4,img5,img2_spelling,img2_speech,img3_spelling,img3_speech){
    let alpha = document.getElementById(`${id}`)
    if("speechSynthesis" in window){
        alpha.onclick =()=>{
            let msg = new SpeechSynthesisUtterance(`${speech}`);
            speechSynthesis.speak(msg);
            words.innerHTML = `${spelling}`;
            img1.innerHTML = `<img src=${img} width=250px height=250px/>`;
            img2.innerHTML = `<img src=${img4} width=200px height=200px/>`;
            img3.innerHTML = `<img src=${img5} width=200px height=200px/>`;
            
            img1.onclick =()=>{
                speechSynthesis.speak(msg);
                words.innerHTML = `${spelling}`;
            }
            img2.onclick=()=>{
            let msg = new SpeechSynthesisUtterance(`${img2_speech}`);
            speechSynthesis.speak(msg);
            words.innerHTML = `${img2_spelling}`;
            }
            img3.onclick=()=>{
                let msg = new SpeechSynthesisUtterance(`${img3_speech}`);
                speechSynthesis.speak(msg);
                words.innerHTML = `${img3_spelling}`;
                }
        }
    }
}

Alphabets("AlphaA","A FOR APPLE","A; FOR; Apple","/static/assets/alphabets/A-img/Apple.jpg","/static/assets/alphabets/A-img/Aeroplane.jpg","/static/assets/alphabets/A-img/Arrow.jpg","A FOR AEROPLANE","A; For; Aeroplane","A FOR ARROW","A; For; Arrow")

Alphabets("AlphaB","B FOR BALL","B; for; BALL","/static/assets/alphabets/B-img/ball","/static/assets/alphabets/B-img/bird","/static/assets/alphabets/B-img/balloon.avif","B FOR BIRD","B; FOR; BIRD","B FOR BALLOON","B; FOR; BALLON")

Alphabets("AlphaC","C FOR CAT","C; for; CAT","/static/assets/alphabets/C-img/cat.png","/static/assets/alphabets/C-img/cow.jpg","/static/assets/alphabets/C-img/cake.jpg","C FOR COW","C; FOR;  COW","C FOR CAKE","C; FOR; CAKE")

Alphabets("AlphaD","D FOR DOG","d; for; DOG","/static/assets/alphabets/D-img/dog.jpg","/static/assets/alphabets/D-img/doll","/static/assets/alphabets/D-img/duck.avif","D FOR DOLL","D; FOR; DOLL","D FOR DUCK","D; FOR; DUCK")

Alphabets("AlphaE","E FOR ELEPHANT","E; For; Elephant","/static/assets/alphabets/E-img/elephant.jpg","/static/assets/alphabets/E-img/egg.png","/static/assets/alphabets/E-img/eagle.jpg","E FOR EGG","E; FOR; EGG","E FOR EAGLE","E; FOR; EAGLE")

Alphabets("AlphaF","F FOR FISH","F; FOR; FISH","/static/assets/alphabets/F-img/fish.png","/static/assets/alphabets/F-img/fan.jpg","/static/assets/alphabets/F-img/frog.avif","F FOR FAN","F; FOR; FAN","F FOR FROG","F; FOR; FROG")

Alphabets("AlphaG","G FOR GRAPES","G; FOR; GRAPES","/static/assets/alphabets/G-img/grapes.jpg","/static/assets/alphabets/G-img/goat.jpg","/static/assets/alphabets/G-img/grass.jpeg","G FOR GOAT","G; FOR; GOAT","G FOR GRASS","G; FOR; GRASS")

Alphabets("AlphaH","H FOR HEN","H; FOR; HEN","/static/assets/alphabets/H-img/hen.jpg","/static/assets/alphabets/H-img/horse.jpg","/static/assets/alphabets/H-img/house.jpg","H FOR HORSE","H; FOR; HORSE","H FOR HOUSE","H; FOR; HOUSE")

Alphabets("AlphaI","I FOR ICE-CREAM","I; FOR; ICE,CREAM","/static/assets/alphabets/I-img/ice-cream.png","/static/assets/alphabets/I-img/ink.jpg","/static/assets/alphabets/I-img/iron.jpg","I FOR INK","I; FOR; INK","I FOR IRON","I; FOR; IRON")

Alphabets("AlphaJ","J FOR JOEKR","J; FOR; JOKER","/static/assets/alphabets/J-img/joker.png","/static/assets/alphabets/J-img/jug.png","/static/assets/alphabets/J-img/jelly.avif","J FOR JUG","J; FOR; JUG","J FOR JELLY","J; FOR; JELLY")

Alphabets("AlphaK","K FOR KITE","K; FOR; KITE","/static/assets/alphabets/K-img/kite.png","/static/assets/alphabets/K-img/kangaroo.png","/static/assets/alphabets/K-img/king.avif","K FOR KANGAROO","K; FOR; KANGAROO","K FOR KING","K; FOR; KING")

Alphabets("AlphaL","L FOR LION","L; FOR; LION","/static/assets/alphabets/L-img/lion.png","/static/assets/alphabets/L-img/lamp.png","/static/assets/alphabets/L-img/lemon.jpg","L FOR LAMP","L; FOR; LAMP","L FOR LEMON","L; FOR; LEMON")

Alphabets("AlphaM","M FOR MANGO","M; FOR; MANGO","/static/assets/alphabets/M-img/mango.jpg","/static/assets/alphabets/M-img/monkey.png","/static/assets/alphabets/M-img/moon.jpg","M FOR MONKEY","M; FOR; MONKEY","M FOR MOON","M; FOR; MOON")

Alphabets("AlphaN","N FOR NET","N; FOR; NET","/static/assets/alphabets/N-img/net.png","/static/assets/alphabets/N-img/neck.jpg","/static/assets/alphabets/N-img/nest.jpg","N FOR NECK","N; FOR; NECK","N FOR NEST","N; FOR; NEST")

Alphabets("AlphaO","O FOR ORANGE","O; FOR; ORANGE","/static/assets/alphabets/O-img/orange.png","/static/assets/alphabets/O-img/owl.jpg","/static/assets/alphabets/O-img/onion.jpeg","O FOR OWL","O; FOR; OWL","O FOR ONION","O; FOR; ONION")

Alphabets("AlphaP","P FOR PARROT","P; FOR; PARROT","/static/assets/alphabets/P-img/parrot.jpg","/static/assets/alphabets/P-img/pen.jpg","/static/assets/alphabets/P-img/panda.avif","P FOR PEN","P; FOR; PEN","P FOR PANDA","P; FOR; PANDA")

Alphabets("AlphaQ","Q FOR QUEEN","Q; FOR; QUEEN","/static/assets/alphabets/Q-img/queen.jpg","/static/assets/alphabets/Q-img/question-mark.png","/static/assets/alphabets/Q-img/quail.jpeg","Q FOR QUESTION-MARK","Q; FOR; QUESTION,MARK","Q FOR QUAIL","Q; FOR; QUAIL")

Alphabets("AlphaR","R FOR RABBIT","R; FOR; RABBIT","/static/assets/alphabets/R-img/rabbit.jpg","/static/assets/alphabets/R-img/robot.png","/static/assets/alphabets/R-img/rainbow.avif","R FOR ROBOT","R; FOR; ROBOT","R FOR RAINBOW","R; FOR; RAINBOW")

Alphabets("AlphaS","S FOR SUN","S; FOR; SUN","/static/assets/alphabets/S-img/sun.png","/static/assets/alphabets/S-img/steel.jpg","/static/assets/alphabets/S-img/star.jpg","S FOR STEEL","S; FOR; STEEL","S FOR STAR","S; FOR; STAR")

Alphabets("AlphaT","T FOR TABLE","T; FOR; TABLE","/static/assets/alphabets/T-img/table.jpg","/static/assets/alphabets/T-img/top.jpg","/static/assets/alphabets/T-img/tree.avif","T FOR TOP","T; FOR; TOP","T FOR TREE","T; FOR; TREE")

Alphabets("AlphaU","U FOR UMBRELLA","U; FOR; UMBRELLA","/static/assets/alphabets/U-img/umbrella.png","/static/assets/alphabets/U-img/unicorn.webp","/static/assets/alphabets/U-img/uniform_img.jpg","U FOR UNICORN","U; FOR; UNICORN","U FOR UNIFORM","U; FOR; UNIFORM")

Alphabets("AlphaV","V FOR VAN","V; FOR; VAN","/static/assets/alphabets/V-img/van.png","/static/assets/alphabets/V-img/violin.png","/static/assets/alphabets/V-img/vase.jpg","V FOR VIOLIN","V; FOR; VIOLIN","V FOR VASE","V; FOR; VASE")

Alphabets("AlphaW","W FOR WATCH","W; FOR; WATCH","/static/assets/alphabets/W-img/watch4.png","/static/assets/alphabets/W-img/wire.jpg","/static/assets/alphabets/W-img/water_melon.webp","W FOR WIRE","W; FOR; WIRE","W FOR WATER-MELON","W; FOR; WATER,MELON")

Alphabets("AlphaX","X FOR XMAS-TREE","X; FOR; XMAS,TREE","/static/assets/alphabets/X-img/xmas-tree.png","/static/assets/alphabets/X-img/xylophone.jpg","/static/assets/alphabets/X-img/x-ray.webp","X FOR XYLOPHONE","X; FOR; XYLOPHONE","X FOR X-RAY","X; FOR; X,RAY")

Alphabets("AlphaY","Y FOR YATCH","Y; FOR; YATCH","/static/assets/alphabets/Y-img/yatch.jpg","/static/assets/alphabets/Y-img/yak.webp","/static/assets/alphabets/Y-img/yoyo.jpg","Y FOR YAK","Y; FOR; YAK","Y FOR YOYO","Y; FOR; YOYO")

Alphabets("AlphaZ","Z FOR ZEBRA","Z; FOR; ZEBRA","/static/assets/alphabets/Z-img/zebra.png","/static/assets/alphabets/Z-img/zip.jpg","/static/assets/alphabets/Z-img/zoo.avif","Z FOR ZIP","Z; FOR; ZIP","Z FOR ZOO","Z; FOR; ZOO")
