var canvas=new fabric.Canvas("myCanvas");















player_x=10;
player_y=10;





block_Width=30;
block_Height=30;


var player="";


var blocky="";



function player_update (){
    fabric.Image.fromURL("player.png", function (Img){
    player=Img;
    player.scaleToWidth(150);
    player.scaleToHeight(140);
    player.set({
top:player_y,
left:player_x
    });
    canvas.add(player);
    });
}

function new_image (get_image){
fabric.Image.fromURL(get_image, function (Img) {
    block=Img;
    block.scaleToWidth(block_Width);
    block.scaleToHeight(block_Height);
    block.set({
top:player_y,
left:player_x

    });
canvas.add(block);
});

}


window.addEventListener("keydown", my_keydown);

function my_keydown (e){
    keypressed=e.keyCode;
    console.log (keypressed);
    
    if (e.shiftKey==true && keypressed=="73"){
        console.log ("i and shift are pressed together");
        block_Width=block_Width+10;
        block_Height=block_Height+10;
        document.getElementById ("Cwidth").innerHTML=block_Width;
        document.getElementById ("Cheight").innerHTML=block_Height;
    }


    if (e.shiftKey==true && keypressed=="79"){
        console.log ("o and shift are pressed together");
        block_Width=block_Width-10;
        block_Height=block_Height-10;
        document.getElementById ("Cwidth").innerHTML=block_Width;
        document.getElementById ("Cheight").innerHTML=block_Height;
    }
if (keypressed=="38"){
    console.log("up");
    up();
}

if (keypressed=="40"){
    console.log("down");
    down();
}

if (keypressed=="37"){
    console.log("left");
    left();
}

if (keypressed=="39"){
    console.log("right");
    right();
}

if (keypressed=="67"){
new_image("cloud.jpg");
console.log("c");

}

if (keypressed=="68"){
    new_image("dark_green.png");
    console.log("d");
    
    }
    
    if (keypressed=="71"){
        new_image("ground.png");
        console.log("g");
        
        }
        
        if (keypressed=="76"){
            new_image("light_green.png");
            console.log("l");
            
            }
            
            if (keypressed=="82"){
                new_image("roof.jpg");
                console.log("r");
                
                }
                
                if (keypressed=="84"){
                    new_image("trunk.jpg");
                    console.log("t");
                    
                    }
                    
                    if (keypressed=="85"){
                        new_image("unique.png");
                        console.log("u");
                        
                        }
                        
                        if (keypressed=="87"){
                            new_image("wall.jpg");
                            console.log("w");
                            
                            }
                            
                            if (keypressed=="89"){
                                new_image("yellow_wall.png");
                                console.log("y");
                                
                                }
}


function up() {
if(player_y>=0){
player_y=player_y - block_Height;
console.log ("BlockHeight= "+block_Height);
console.log ("PlayerX= "+player_x+"& PlayerY="+player_y);
canvas.remove(player);
player_update ();
}

}



function down() {
    if(player_y<=500){
    player_y=player_y + block_Height;
    console.log ("BlockHeight= "+block_Height);
    console.log ("PlayerX= "+player_x+"& PlayerY="+player_y);
    canvas.remove(player);
    player_update ();
    }
    
    }


    
function left() {
    if(player_x>=0){
    player_x=player_x - block_Width;
    console.log ("BlockWidth= "+block_Width);
    console.log ("PlayerX= "+player_x+"& PlayerY="+player_y);
    canvas.remove(player);
    player_update ();
    }
    
    }


    
function right() {
    if(player_x<=850){
    player_x=player_x + block_Width;
    console.log ("BlockWidth= "+block_Width);
    console.log ("PlayerX= "+player_x+"& PlayerY="+player_y);
    canvas.remove(player);
    player_update ();
    }
    
    }