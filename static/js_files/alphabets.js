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

Alphabets("AlphaA","A FOR APPLE","A; FOR; Apple","/assets/alphabets/A-img/Apple.jpg","/static/assets/alphabets/A-img/Aeroplane.jpg","/static/assets/alphabets/A-img/Arrow.jpg","A FOR AEROPLANE","A; For; Aeroplane","A FOR ARROW","A; For; Arrow")

Alphabets("AlphaB","B FOR BALL","B; for; BALL","/assets/alphabets/B-img/ball","./assets/alphabets/B-img/bird","/assets/alphabets/B-img/balloon.avif","B FOR BIRD","B; FOR; BIRD","B FOR BALLOON","B; FOR; BALLON")

Alphabets("AlphaC","C FOR CAT","C; for; CAT","./assets/alphabets/C-img/cat.png","./assets/alphabets/C-img/cow.jpg","./assets/alphabets/C-img/cake.jpg","C FOR COW","C; FOR;  COW","C FOR CAKE","C; FOR; CAKE")

Alphabets("AlphaD","D FOR DOG","d; for; DOG","./assets/alphabets/D-img/dog.jpg","./assets/alphabets/D-img/doll","./assets/alphabets/D-img/duck.avif","D FOR DOLL","D; FOR; DOLL","D FOR DUCK","D; FOR; DUCK")

Alphabets("AlphaE","E FOR ELEPHANT","E; For; Elephant","./assets/alphabets/E-img/elephant.jpg","./assets/alphabets/E-img/egg.png","./assets/alphabets/E-img/eagle.jpg","E FOR EGG","E; FOR; EGG","E FOR EAGLE","E; FOR; EAGLE")

Alphabets("AlphaF","F FOR FISH","F; FOR; FISH","./assets/alphabets/F-img/fish.png","./assets/alphabets/F-img/fan.jpg","./assets/alphabets/F-img/frog.avif","F FOR FAN","F; FOR; FAN","F FOR FROG","F; FOR; FROG")

Alphabets("AlphaG","G FOR GRAPES","G; FOR; GRAPES","./assets/alphabets/G-img/grapes.jpg","./assets/alphabets/G-img/goat.jpg","./assets/alphabets/G-img/grass.jpeg","G FOR GOAT","G; FOR; GOAT","G FOR GRASS","G; FOR; GRASS")

Alphabets("AlphaH","H FOR HEN","H; FOR; HEN","./assets/alphabets/H-img/hen.jpg","./assets/alphabets/H-img/horse.jpg","./assets/alphabets/H-img/house.jpg","H FOR HORSE","H; FOR; HORSE","H FOR HOUSE","H; FOR; HOUSE")

Alphabets("AlphaI","I FOR ICE-CREAM","I; FOR; ICE,CREAM","./assets/alphabets/I-img/ice-cream.png","./assets/alphabets/I-img/ink.jpg","./assets/alphabets/I-img/iron.jpg","I FOR INK","I; FOR; INK","I FOR IRON","I; FOR; IRON")

Alphabets("AlphaJ","J FOR JOEKR","J; FOR; JOKER","./assets/alphabets/J-img/joker.png","./assets/alphabets/J-img/jug.png","./assets/alphabets/J-img/jelly.avif","J FOR JUG","J; FOR; JUG","J FOR JELLY","J; FOR; JELLY")

Alphabets("AlphaK","K FOR KITE","K; FOR; KITE","./assets/alphabets/K-img/kite.png","./assets/alphabets/K-img/kangaroo.png","./assets/alphabets/K-img/king.avif","K FOR KANGAROO","K; FOR; KANGAROO","K FOR KING","K; FOR; KING")

Alphabets("AlphaL","L FOR LION","L; FOR; LION",".static/assets/alphabets/L-img/lion.png","./assets/alphabets/L-img/lamp.png","./assets/alphabets/L-img/lemon.jpg","L FOR LAMP","L; FOR; LAMP","L FOR LEMON","L; FOR; LEMON")

Alphabets("AlphaM","M FOR MANGO","M; FOR; MANGO","./assets/alphabets/M-img/mango.jpg","./assets/alphabets/M-img/monkey.png","./assets/alphabets/M-img/moon.jpg","M FOR MONKEY","M; FOR; MONKEY","M FOR MOON","M; FOR; MOON")

Alphabets("AlphaN","N FOR NET","N; FOR; NET","./assets/alphabets/N-img/net.png","./assets/alphabets/N-img/neck.jpg","./assets/alphabets/N-img/nest.jpg","N FOR NECK","N; FOR; NECK","N FOR NEST","N; FOR; NEST")

Alphabets("AlphaO","O FOR ORANGE","O; FOR; ORANGE","./assets/alphabets/O-img/orange.png","./assets/alphabets/O-img/owl.jpg","./assets/alphabets/O-img/onion.jpeg","O FOR OWL","O; FOR; OWL","O FOR ONION","O; FOR; ONION")

Alphabets("AlphaP","P FOR PARROT","P; FOR; PARROT","./assets/alphabets/P-img/parrot.jpg","./assets/alphabets/P-img/pen.jpg","./assets/alphabets/P-img/panda.avif","P FOR PEN","P; FOR; PEN","P FOR PANDA","P; FOR; PANDA")

Alphabets("AlphaQ","Q FOR QUEEN","Q; FOR; QUEEN","./assets/alphabets/Q-img/queen.jpg","./assets/alphabets/Q-img/question-mark.png","./assets/alphabets/Q-img/quail.jpeg","Q FOR QUESTION-MARK","Q; FOR; QUESTION,MARK","Q FOR QUAIL","Q; FOR; QUAIL")

Alphabets("AlphaR","R FOR RABBIT","R; FOR; RABBIT","./assets/alphabets/R-img/rabbit.jpg","./assets/alphabets/R-img/robot.png","./assets/alphabets/R-img/rainbow.avif","R FOR ROBOT","R; FOR; ROBOT","R FOR RAINBOW","R; FOR; RAINBOW")

Alphabets("AlphaS","S FOR SUN","S; FOR; SUN","./assets/alphabets/S-img/sun.png","./assets/alphabets/S-img/steel.jpg","./assets/alphabets/S-img/star.jpg","S FOR STEEL","S; FOR; STEEL","S FOR STAR","S; FOR; STAR")

Alphabets("AlphaT","T FOR TABLE","T; FOR; TABLE","./assets/alphabets/T-img/table.jpg","./assets/alphabets/T-img/top.jpg","./assets/alphabets/T-img/tree.avif","T FOR TOP","T; FOR; TOP","T FOR TREE","T; FOR; TREE")

Alphabets("AlphaU","U FOR UMBRELLA","U; FOR; UMBRELLA","./assets/alphabets/U-img/umbrella.png","./assets/alphabets/U-img/unicorn.webp","./assets/alphabets/U-img/uniform_img.jpg","U FOR UNICORN","U; FOR; UNICORN","U FOR UNIFORM","U; FOR; UNIFORM")

Alphabets("AlphaV","V FOR VAN","V; FOR; VAN","./assets/alphabets/V-img/van.png","./assets/alphabets/V-img/violin.png","./assets/alphabets/V-img/vase.jpg","V FOR VIOLIN","V; FOR; VIOLIN","V FOR VASE","V; FOR; VASE")

Alphabets("AlphaW","W FOR WATCH","W; FOR; WATCH","./assets/alphabets/W-img/watch4.png","./assets/alphabets/W-img/wire.jpg","./assets/alphabets/W-img/water_melon.webp","W FOR WIRE","W; FOR; WIRE","W FOR WATER-MELON","W; FOR; WATER,MELON")

Alphabets("AlphaX","X FOR XMAS-TREE","X; FOR; XMAS,TREE","./assets/alphabets/X-img/xmas-tree.png","./assets/alphabets/X-img/xylophone.jpg","./assets/alphabets/X-img/x-ray.webp","X FOR XYLOPHONE","X; FOR; XYLOPHONE","X FOR X-RAY","X; FOR; X,RAY")

Alphabets("AlphaY","Y FOR YATCH","Y; FOR; YATCH","./assets/alphabets/Y-img/yatch.jpg","./assets/alphabets/Y-img/yak.webp","./assets/alphabets/Y-img/yoyo.jpg","Y FOR YAK","Y; FOR; YAK","Y FOR YOYO","Y; FOR; YOYO")

Alphabets("AlphaZ","Z FOR ZEBRA","Z; FOR; ZEBRA","./assets/alphabets/Z-img/zebra.png","./assets/alphabets/Z-img/zip.jpg","./assets/alphabets/Z-img/zoo.avif","Z FOR ZIP","Z; FOR; ZIP","Z FOR ZOO","Z; FOR; ZOO")
