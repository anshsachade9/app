var database ,canvas;
var button1, button2, button3, button4;
var backgroundImg;
function preload(){

}

function hide(){
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
}

function Setup (){
    canvas = createCanvas(windowWidth,windowHeight);
    database=firebase.database();
}

function draw(){
    background("black");

    button1 = createButton('Deities');
    button1.position(100,50);
    
    button1.mousePressed(()=>{


        button5 = createButton('Shiva');
        button5.position(200,20);
        document.getElementById("element").style.display = "none";

        button6 = createButton('Vishnu');
        button6.position(200,40);

        button7 = createButton('Durga');
        button7.position(200.60);

        button8 = createButton('Hanuman');
        button8.position(200,80);

        button9 = createButton('Ganesha');
        button8.position(200,100);


    })

    button2 = createButton('Festivals');
    button2.position(100,80);

    button3 = createButton('Calender/Panchang');
    button3.position(100,110);

    button4 = createButton("About");
    button4.position(100,130);
   
    drawSprites();
}