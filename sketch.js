const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
  
    
    ground = new Ground(600,height,1200,20);
    plat1 = new Ground(500,135,200,10);
    plat2 = new Ground(500,335,200,10);

    stone = new Stone(100,200)

    box1 = new Box(460,320,20,20,0,255,255);
    box2 = new Box(480,320,20,20,255,0,0);
    box3 = new Box(500,320,20,20,255,255,0);
    box4 = new Box(520,320,20,20,0,255,0);
    box5 = new Box(540,320,20,20,0,0,255);

    box6 = new Box(470,300,20,20,150,0,150);
    box7 = new Box(490,300,20,20,150,255,200);
    box8 = new Box(510,300,20,20,100,140,0);
    box9 = new Box(530,300,20,20,0,255,200);

    box10 = new Box(480,280,20,20,100,100,200);
    box11 = new Box(500,280,20,20,200,255,0);
    box12 = new Box(520,280,20,20,0,255,0);

    box13 = new Box(490,260,20,20,255,0,100);
    box14 = new Box(510,260,20,20,255,0,255);

    box15 = new Box(500,240,20,20,55,255,0);
    
    
    box16 = new Box(470,120,20,20,255,0,150);
    box17 = new Box(490,120,20,20,150,255,200);
    box18 = new Box(510,120,20,20,100,0,255);
    box19 = new Box(530,120,20,20,0,255,200);

    box20 = new Box(480,100,20,20,255,255,0);
    box21 = new Box(500,100,20,20,0,255,255);
    box22 = new Box(520,100,20,20,0,255,0);

    box23 = new Box(490,80,20,20,255,0,100);
    box24 = new Box(510,80,20,20,255,0,255);

    box25 = new Box(500,60,20,20,255,0,0);
    
    
    slingshot = new Slingshot(stone.body, pointB={x:100, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);



    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();

    box15.display();


    box16.display();
    box17.display();
    box18.display();
    box19.display();

    box20.display();
    box21.display();
    box22.display();

    box23.display();
    box24.display();

    box25.display();

    ground.display();
    plat1.display();
    plat2.display();
    slingshot.display();

    stone.display();

    textSize(10);
    fill(255)
    text("Hi! This is a launcher game.",50,300);
    text("Drag the hexagon to aim",50,310);
    text("and topple the boxes",50,320);
    text("Watch the pretty boxes topple, and relax.",50,330);
    text("Click Space to reattach.",50,340);
    text("CLick F5 to Reset.",50,350);
    text("Hope you liked this game,",50,360);
    text("and I will add new features soon.",50,370);
    
       
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {


    if(keyCode === 32) {

        slingshot.attach(stone.body);
    }
}