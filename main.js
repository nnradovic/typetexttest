var startbtn = document.getElementById("startbtn");
var well = document.getElementsByClassName('well')[0];

var poslovice = [' You can do anything, but not everything.','Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.',
'The richest man is not he who has the most, but he who needs the least.',
 'You miss 100 percent of the shots you never take.',
'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.',
'You must be the change you wish to see in the world.',
' When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.',
' The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.',
'To the man who only has a hammer, everything he encounters begins to look like a nail.',
'We are what we repeatedly do; excellence, then, is not an act but a habit.',
'A wise man gets more use from his enemies than a fool from his friends.'
 ]
var player1Area = document.getElementById('player1Area');
var player2Area = document.getElementById('player2Area');
var player3Area = document.getElementById('player3Area');
var player4Area = document.getElementById('player4Area');

var izabranapos = poslovice[Math.floor(Math.random()*poslovice.length)]

var pozicija = ['Position 1','Position 2','Position 3','Position 4'];



var pos1 = document.getElementById('pos1');
var pos2 = document.getElementById('pos2');
var pos3 = document.getElementById('pos3');
var pos4 = document.getElementById('pos4');

startbtn.addEventListener('click', startCounter);


// Pocetak odbrojavanja na dugmetu Start-pojavljivanje polja sa poslovicama.
function startCounter(e){
           var counter = 1;
           startbtn.innerHTML = counter;
           var loop = setInterval(function(){
            counter --;
            startbtn.innerHTML = counter;
            

            if(counter == 0){
            	clearInterval(loop);
            	startbtn.style.display = 'none';
            	well.style.display = 'block';
            	well.innerHTML = '<h1>'+izabranapos+'</h1>';
            	player1Area.focus();
              //Poziva racunar da pise i proverava
              player2();
              player3();
              player4();


        // Kada zavrsis kucanje input za proveru.
      	player1Area.addEventListener('keyup', enter)
    }

   },1000)

}



//Pravi se od poslovice stekst razbijen na slova.
function makeText(){
   var text = izabranapos;
   var stext = text.split('');

   var nasArray = [stext];
   return nasArray;

}

makeText()


// dodelujemo promenljivoj ar vrednosti koje smo vratili iz funkcije makeText.
var ar2 = makeText();
var ar3 = makeText();
var ar4 = makeText();


var player2Area = document.getElementById('player2Area');
var player3Area = document.getElementById('player3Area');
var player4Area = document.getElementById('player4Area');

// Provara da li je tacno uneo user.
function testUser(){
        var blanko=player1Area.value;
        var duzina=blanko.length-1;
        var bezblanko=blanko.substring(0,duzina);
        player1Area.value=bezblanko;

        if(izabranapos == player1Area.value){
        
        var poz1=pozicija.shift()
        pos1.innerHTML = poz1
        player1Area.removeEventListener('keyup', enter)

                  
            }
       
      }


// Pocinjemo da ispisujemo u textarea tekst i provera pozicije.
var i=0;
function player2(){
   if(ar2[i].length>0){
   player2Area.innerHTML += ar2[i].shift();
   setTimeout(player2,80);
   if(izabranapos == player2Area.value){
        
        var poz2=pozicija.shift()
        pos2.innerHTML = poz2
      }
   }else{
   clearTimeout(player2);
   }  
}



function player3(){
   if(ar3[i].length>0){
   player3Area.innerHTML += ar3[i].shift();
   setTimeout(player3,60);

    if(izabranapos == player3Area.value){
        
        var poz3=pozicija.shift()
        pos3.innerHTML = poz3
       
      }

   }else{
   clearTimeout(player3);
   }  
}


function player4(){
   if(ar4[i].length>0){
   player4Area.innerHTML += ar4[i].shift();
   setTimeout(player4,100);

     if(izabranapos == player4Area.value){
        
        var poz4=pozicija.shift()
        pos4.innerHTML = poz4
        
      }
   }else{
   clearTimeout(player4);
   }  
}

// Kada zavrsis kucanje input za proveru.
function enter(e){
        
                if(e.keyCode == 13){
                 
                  testUser();
                 }

        }
