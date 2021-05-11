var ball;
var database



function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    var dbref = database.ref("Position")
    dbref.on("value",ReadPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    database.ref("Position").set({x:ball.x , y:ball.y})
}
function ReadPosition(data){
    var Position = data.val()
    ball.x = Position.x
    ball.y = Position.y
}