function changecharAt(str,i,c)
{
	var strstart=str.substr(0,i-1);
	var strend=str.substr(i,str.length-i);
	
	return strstart+c+strend;
	
}

function twodimensionalarraytostring(arr)
{
	var str="";
	for (var i=0; i<arr.length; i++)
	{
		for (var j=0; j<arr[i].length; j++)
		{
			if (i!=arr.length-1 || j!=arr[i].length-1) //making last "|" disappear
				str+=arr[i][j];
			
		}
		
	}
	return str;
	
}

var engine;
var game;

function Sokoban()
{
	this.boards=[];
	this.level=1;
	this.boards.push("##############################|#@                           #|#                            #|#                            #|#                            #|#                            #|#                            #|#                            #|#                            #|##############################");
	this.boards.push("    #####          |    #   #          |    #   #          |  ###   ##         |  #     #         |### # ## #   ######|#   # ## #####  #|#            #|##### ### #@##    #|    #     #########|    #######        ");
	this.board=this.boards[this.level-1];
	
	/* LEGEND
		#: wall
		@: nao
		 : empty space
		|: end of line
	
	*/
	
	this.start=function()
	{
		this.message="game started.";
		
	}
	
	this.move=function(direction)
	{
		var str = game.board;
		var row = str.split("|");
		var newboard = [];
		var moveisvalid = false;
		
		var sokomanposX=0;
		var sokomanposY=0;
		var directionX=0;
		var directionY=0;
		
		for (var i=0; i<row.length; i++) //game board into two dimensional array
		{
			var line=[];
			for (var j=0; j<row[i].length; j++)
			{
				line.push(row[i].charAt(j));
				if (row[i].charAt(j) == "@" || row[i].charAt(j)=="+")
				{
					sokomanposX=i;
					sokomanposY=j;
				}
				
			}
			line.push("|");
			newboard.push(line);
		}
		
		switch (direction)
		{
			case "left":
				directionY=-1;
				break;
			case "right":
				directionY=1;
				break;
			case "up":
				directionX=-1;
				break;
			case "down":
				directionX=1;
				break;
			
		};
		
		var charatoldplace = newboard[sokomanposX][sokomanposY];
		var charatnewplace = newboard[sokomanposX+directionX][sokomanposY+directionY];
		var charafternextplace;
		
		if (charatnewplace==" ")//checking if move is valid
		{
			moveisvalid=true;
			charafternextplace = newboard[sokomanposX+directionX*2][sokomanposY+directionY*2];
		}
		
		if (moveisvalid)
		{
			switch(charatnewplace)
			{
				case " ":
					charatnewplace="@";
					break;				
			};
			switch(charatoldplace)
			{
				case "@":
					charatoldplace=" ";
					break;				
			};
	
			newboard[sokomanposX][sokomanposY]=charatoldplace;
			newboard[sokomanposX+directionX][sokomanposY+directionY]=charatnewplace;
			newboard[sokomanposX+directionX*2][sokomanposY+directionY*2]=charafternextplace;
			
		}
		
		newboard=twodimensionalarraytostring(newboard);
		game.board=newboard;
		
	}
		
	this.restartlevel=function()
	{
		this.board=this.boards[this.level-1];
		
	}
	
	this.previouslevel=function()
	{
		if (this.level>1)
		{
			this.board=this.boards[this.level-2];
			this.level--;
		}
		
	}
	
	this.nextlevel=function()
	{
		if (this.level<this.boards.length)
		{
			this.board=this.boards[this.level];
			this.level++;
		}
	}
	
}

function Engine()
{
	this.ctx;
	this.start=function()
	{
		var canvas=document.createElement("canvas");
		canvas.id="board";
		canvas.width="800";
		canvas.height="600";
		document.getElementById("wrapper").appendChild(canvas);
		var c=document.getElementById("board");
		c.style.border="1px solid black";
		this.ctx=c.getContext("2d");

		
	}
	
	this.draw=function(posX,posY,s)
	{
		switch(s)
		{
			case "#": // wall
				this.ctx.fillStyle="grey";
				this.ctx.fillRect(posX,posY,30,30);
				break;
				break;
			case "@": // nao on empty space
				this.ctx.fillStyle="lightgrey";
				this.ctx.fillRect(posX,posY,30,30);
				this.ctx.fillStyle="red";
				this.ctx.beginPath();
				this.ctx.arc(posX+15,posY+15, 15, 0, 2*Math.PI,false);
				this.ctx.fill();
				break;
			default: // "space" ~ empty
				this.ctx.fillStyle="lightgrey";
				this.ctx.fillRect(posX,posY,30,30);
			
		};
		
			
		
	}
	
	this.printOut=function(posX,posY,text,color,fontsize)
	{
		this.ctx.fillStyle=color;
		this.ctx.font = ""+fontsize+"px Arial";
		this.ctx.fillText(text,posX,posY);
		
	}
	
	this.drawBoard=function(game)
	{
		var str = game.board;
		var row = str.split("|");
		var startposX=(800-(row[0].length*30))/2;
		var startposY=(600-(row.length*30))/2;
		
		

		this.ctx.clearRect(0, 0, 800, 600);


		
		for (var i=0;i<row.length;i++)
		{
			for (var j=0; j<row[i].length; j++)
			{
				this.draw(startposX+j*30,startposY+i*30,row[i].charAt(j));
				
			}
			
		}
		
		this.printOut(50,50,"Move: Arrows, Restart: r, Next: +, Previous: -","black",15);
		this.printOut(700,50,"Batiment Croix verte etage : "+game.level,"black",15);
	}

	
}

document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;

	if (e.keyCode=='37')
		game.move("left");
	if (e.keyCode=='38')
		game.move("up");
	if (e.keyCode=='39')
		game.move("right");
	if (e.keyCode=='40')
		game.move("down");
	if (e.keyCode=='82')
		game.restartlevel();
	if (e.keyCode=='107')
		game.nextlevel();
	if (e.keyCode=='109')
		game.previouslevel();


	engine.drawBoard(game);
	game.checkWinCondition();
		

}

function init()
{
	engine.start();
	game.start();
	engine.drawBoard(game);
	
}

var game=new Sokoban();
var engine=new Engine();