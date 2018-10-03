function changecharAt(str, i, c) {
	var strstart = str.substr(0, i - 1);
	var strend = str.substr(i, str.length - i);

	return strstart + c + strend;

}

function twodimensionalarraytostring(arr) {
	var str = "";
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (i != arr.length - 1 || j != arr[i].length - 1) //making last "|" disappear
				str += arr[i][j];

		}
	}
	return str;

}

var engine;
var game;

function CampusExploration() {
	this.boards = [];
	this.level = 1;
	this.boards.push("####################################################################################################|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           #                   #                 #|"+
		 "#                #               #                           ############   ######   ###############|"+
		 "###########      #               #                           #  @  #                               #|"+
		 "#    #    #      #               #                           #     #                               #|"+
		 "#    #    #      #               #                           #     #                               #|"+
		 "#    #    #      #               #                           #     #     ###############           #|"+
		 "#    #    #      #               #                           #     #     #                         #|"+
		 "#    #    #      #               #                           #     #     #                         #|"+
		 "#   ##    ####   #      #########################   ##########     #     #                         #|"+
		 "#                                                            #     #     #                         #|"+
		 "#                                                            #     #     #                         #|"+
		 "#                                                            #     #     #                         #|"+
		 "#   #####################   ##################            ####     #     ###########################|"+
		 "#                                #                                       #                         #|"+
		 "#                                #                                       #                         #|"+
		 "#                                #        #                 #            #                         #|"+
		 "#                                #        #                 #                                      #|"+
		 "#                                #        #   ###############                                      #|"+
		 "#                                #        #   #                 ##########                         #|"+
		 "#                                #        #   #                 #                                  #|"+
		 "#                                #        #   #                 #                                  #|"+
		 "#                                #        #   #                 #                                  #|"+
		 "#                                #        #   #                 #        #                         #|"+
		 "#                                #        #   #                 #        #                         #|"+
		 "#                                #        #   #                 #        #                         #|"+
		 "#                                #        #   #                 #        #                         #|"+
		 "#                                ##########   #                 #        #                         #|"+
		 "#                                #            #                 #        #                         #|"+
		 "#                                #            #                 ##########                         #|"+
		 "#                                #            #                                                    #|"+
		 "#                                #            #                                                    #|"+
		 "#                                #            #######    #    ########   #      ###    #############|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "####################################################################################################|"
		             );
		 
	this.boards.push("####################################################################################################|"+
		     "#                               ####################################################################|"+
		     "#                               ####################################################################|"+
		     "#                               ####################################################################|"+
		     "#               #               ####################################################################|"+
		     "#               #               ####################################################################|"+
		     "#               #               ####################################################################|"+
		     "#               #               ####################################################################|"+
		     "#               #               #                                   #   @   #            #         #|"+
		     "#               #               #                                   #       #            #         #|"+
		     "#               #               #                                   #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#############   #############   #                 #                 #       ##########             #|"+
		     "#                               #                 #                         #                      #|"+
		     "#                               #                 #                         #                      #|"+
		     "#                               #                 #                                 ################|"+
		     "#                               #                 #                 #                              #|"+
		     "#############################   #                 ###################                              #|"+
		     "#                           #   #                 #                 #              #               #|"+
		     "#                           #   #                 #                 #              #               #|"+
		     "#                           #   #                 #                 #           ####               #|"+
		     "#                           #   #              ####                 #           ####               #|"+
		     "#                           #                                       #           ####               #|"+
		     "#                           #                                       #           ####               #|"+
		     "#                           #        ############     ###############           ####               #|"+
		     "#                           #                #        #             #              #               #|"+
		     "#                           #                #        #             #              #               #|"+
		     "#                           #                #        #             #              #               #|"+
		     "#                           #          #######        #             #              #               #|"+
		     "#                                                                                  #               #|"+
		     "#                                                                                                  #|"+
		     "#                                                                                                  #|"+
		     "################################     ###############################               ############    #|"+
		     "################################                                                                   #|"+
		     "################################                                                                   #|"+
		     "################################                                                                   #|"+
		     "################################                                   #               #               #|"+
		     "################################                                   #               #               #|"+
		     "################################                                   #               #               #|"+
		     "################################                                   #               #               #|"+
		     "################################                                   #               #               #|"+
		     "################################                                   #               #               #|"+
		     "####################################################################################################|"
		     );
	this.board = this.boards[this.level - 1];

	/* LEGEND
		#: wall
		@: nao
		 : empty space
		|: end of line
	
	*/

	this.start = function () {
		this.message = "game started.";

	}

	this.move = function (direction) {
		var str = game.board;
		var row = str.split("|");
		var newboard = [];
		var moveisvalid = false;

		var naoPosX = 0;
		var naoPosY = 0;
		var directionX = 0;
		var directionY = 0;

		for (var i = 0; i < row.length; i++) //game board into two dimensional array
		{
			var line = [];
			for (var j = 0; j < row[i].length; j++) {
				line.push(row[i].charAt(j));
				if (row[i].charAt(j) == "@" || row[i].charAt(j) == "+") {
					naoPosX = i;
					naoPosY = j;
				}

			}
			line.push("|");
			newboard.push(line);
		}

		switch (direction) {
			case "left":
				directionY = -1;
				break;
			case "right":
				directionY = 1;
				break;
			case "up":
				directionX = -1;
				break;
			case "down":
				directionX = 1;
				break;

		};

		var charatoldplace = newboard[naoPosX][naoPosY];
		var charatnewplace = newboard[naoPosX + directionX][naoPosY + directionY];
		var charafternextplace;

		if (charatnewplace == " ")//checking if move is valid
		{
			moveisvalid = true;
			charafternextplace = newboard[naoPosX + directionX * 2][naoPosY + directionY * 2];
		}

		if (moveisvalid) {
			switch (charatnewplace) {
				case " ":
					charatnewplace = "@";
					break;
			};
			switch (charatoldplace) {
				case "@":
					charatoldplace = " ";
					break;
			};

			newboard[naoPosX][naoPosY] = charatoldplace;
			newboard[naoPosX + directionX][naoPosY + directionY] = charatnewplace;
			newboard[naoPosX + directionX * 2][naoPosY + directionY * 2] = charafternextplace;

		}

		newboard = twodimensionalarraytostring(newboard);
		game.board = newboard;

	}

	this.restartlevel = function () {
		this.board = this.boards[this.level - 1];

	}

	this.previouslevel = function () {
		if (this.level > 1) {
			this.board = this.boards[this.level - 2];
			this.level--;
		}

	}

	this.nextlevel = function () {
		if (this.level < this.boards.length) {
			this.board = this.boards[this.level];
			this.level++;
		}
	}

}

function Engine() {
	this.ctx;
	this.start = function () {
		var canvas = document.createElement("canvas");
		canvas.id = "board";
		canvas.width = "1000";
		canvas.height = "600";
		document.getElementById("wrapper").appendChild(canvas);
		var c = document.getElementById("board");
		c.style.border = "1px solid black";
		this.ctx = c.getContext("2d");


	}

	this.draw = function (posX, posY, s) {
		switch (s) {
			case "#": // wall
				this.ctx.fillStyle = "grey";
				this.ctx.fillRect(posX, posY, 10, 10);
				break;
				break;
			case "@": // nao on empty space
				this.ctx.fillStyle = "lightgrey";
				this.ctx.fillRect(posX, posY, 10, 10);
				x = posX;
				y = posY;
				this.ctx.fillStyle = "red";
				this.ctx.beginPath();
				this.ctx.arc(posX + 5, posY + 5, 5, 0, 2 * Math.PI, false);
				/*this.ctx.drawImage("nao.png", posX, posY);*/
				this.ctx.fill();
				break;
			default: // "space" ~ empty
				this.ctx.fillStyle = "lightgrey";
				this.ctx.fillRect(posX, posY, 10, 10);

		};



	}

	this.printOut = function (posX, posY, text, color, fontsize) {
		this.ctx.fillStyle = color;
		this.ctx.font = "" + fontsize + "px Arial";
		this.ctx.fillText(text, posX, posY);

	}

	this.drawBoard = function (game) {
		var str = game.board;
		var row = str.split("|");
		var startposX = (1000 - (row[0].length * 10)) / 2;
		var startposY = (600 - (row.length * 10)) / 2;



		this.ctx.clearRect(0, 0, 1000, 600);



		for (var i = 0; i < row.length; i++) {
			for (var j = 0; j < row[i].length; j++) {
				this.draw(startposX + j * 10, startposY + i * 10, row[i].charAt(j));

			}

		}

		this.printOut(50, 50, "Move: Arrows, Restart: r, Next: z, Previous: a", "black", 15);
		this.printOut(700, 50, "Batiment Croix verte etage : " + game.level, "black", 15);
	}


}

var x = 0,
	y = 0;

document.onkeydown = checkKey;
function checkKey(e) {
	e.preventDefault();

	if (e.keyCode == '37') {
		game.move("left");
	}
	else if (e.keyCode == '38') {
		game.move("up");
	}

	else if (e.keyCode == '39') {
		game.move("right");
	}

	else if (e.keyCode == '40') {
		game.move("down");
	}
	else if (e.keyCode == '82') {
		game.restartlevel();
	}
	else if (e.keyCode == '90') {
		game.nextlevel();
	}
	else if (e.keyCode == '65') {
		game.previouslevel();
	}

	/*if (x == 10 && y == 75) {
		alert('event');
	}*/


	engine.drawBoard(game);

}

function init() {
	engine.start();
	game.start();
	engine.drawBoard(game);

}

var game = new CampusExploration();
var engine = new Engine();
