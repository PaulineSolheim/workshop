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
var x = 0,
	y = 0;

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
		 "#                #               #                           #            12     # 12              #|"+
		 "#                #               #                           # abc        34     # 34              #|"+
		 "#56     abc      #               #                           # def               #                 #|"+
		 "#78     def      #               #                           ############PPP######PPP###############|"+
		 "###########      #               #                           #######                   P           #|"+
		 "#    #    #      #               #                           #######                   P           #|"+
		 "#    #    #      #               #                           #######                   P           #|"+
		 "#    #    #  12  #  12           #               12          #######     ###############           #|"+
		 "#    #    #  34  #  34           #56             34          #######     #                  12     #|"+
		 "#    #    #      #               #78                         #######     #                  34     #|"+
		 "#   ###   ####PPP#PPP############################PPP################     #                         #|"+
		 "#         P                                                  #TTTTT#     #                         #|"+
		 "#         P                                                  #  @  #     #  abc                    #|"+
		 "#         P                                                  #     #     #  def                    #|"+
		 "#PPP#####################PPP##################            ####     #     ###########################|"+
		 "#                                #        P                              #                         #|"+
		 "#                        12      #        P                              #                         #|"+
		 "#                        34      #        #  12             #            P                         #|"+
		 "#                                #abc  abc#  34             #            P                         #|"+
		 "#                                #def  def#   ###############PPP#        P                         #|"+
		 "#                                #        #   #                 ##########                         #|"+
		 "#                                #abc  abc#   #                 #        P                         #|"+
		 "#                                #def  def#   #                 #     12 P            12           #|"+
		 "#                                #        #   #                 #     34 P            34           #|"+
		 "#                                #abc  abc#   #                 #        #                         #|"+
		 "#                                #def  def#   #                 #        #                         #|"+
		 "#                                #        #   #                 #        #                         #|"+
		 "#                                #        #   #                 #        #                         #|"+
		 "#                                ##########PPP#                 #        #                         #|"+
		 "#                                #            #                 #        #                         #|"+
		 "#                                #            #############PPP############                         #|"+
		 "#                                #            #                          P                      abc#|"+
		 "#                                #            #                          P                      def#|"+
		 "#                                #            #######PPP###PPP#######PPP##      ###PPPP#############|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "#                                #            #          #               #      #                  #|"+
		 "# 56                        abc  #            #          #               #      #                56#|"+
		 "# 78                        def  #            #          #               #      #                78#|"+
		 "####################################################################################################|"
		             );
		 
	this.boards.push("####################################################################################################|"+
		     "#               P               ####################################################################|"+
		     "#               P               ####################################################################|"+
		     "#               P               ####################################################################|"+
		     "#               #               ####################################################################|"+
		     "#abcabc   abcabc#               ####################################################################|"+
		     "#defdef   defdef#               ####################################################################|"+
		     "#               #               #####################################TTTTTTT########################|"+
		     "#abcabc   abcabc#               #                 P                 #   @   #            #         #|"+
		     "#defdef   defdef#               #                 P                 #       #            #         #|"+
		     "#               #               #                 P                 #       #            #         #|"+
		     "#abcabc   abcabc#               #                 #                 #       #            #         #|"+
		     "#defdef   defdef#               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#abcabc   abcabc#               #                 #                 #       #            #         #|"+
		     "#defdef   defdef#               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#               #               #                 #                 #       #            #         #|"+
		     "#             12#             12#                 #                 #       #            #         #|"+
		     "#56    abc    34#             34#                 #                 #       #abc         #         #|"+
		     "#78    def      #               #                 #                 #       #def         #         #|"+
		     "#############PPP#############PPP#                 #                 #       ##########       12    #|"+
		     "#                               #                 #                 P       #                34    #|"+
		     "#                               #                 #             12  P       #                      #|"+
		     "#                               #                 # 56          34  P       #      #################|"+
		     "#                               #                 # 78              #              P               #|"+
		     "#############################   #                 ###################              P               #|"+
		     "#                           #   #                 #                 #              P               #|"+
		     "#                           #   #                 #                 #       ########               #|"+
		     "#                           #   #     12          #                 #              #               #|"+
		     "#                           #   P     34     P#####                 #         12####               #|"+
		     "#                           #   P            P                 abc  #         34####               #|"+
		     "#                           #   P            P                 def  #           ####               #|"+
		     "#                           #   ###################PPP###############           ####               #|"+
		     "#                           #   P        #        #   #         #   P              #               #|"+
		     "#                           #   P        #        #   #         #   P              #               #|"+
		     "#                           #   P        #        #   #         #   P              #               #|"+
		     "#                           #   ###############PPP#PPP#######PPP#####              #               #|"+
		     "#                           P                                                      P               #|"+
		     "#                      12   P                                                      P               #|"+
		     "#                      34   P                                                      P               #|"+
		     "################################     ################################              ############    #|"+
		     "################################                                                   P               #|"+
		     "################################                               12                  P   12          #|"+
		     "################################                               34                  P   34          #|"+
		     "################################                                    #              #               #|"+
		     "################################                                    #              #               #|"+
		     "################################                                    #              #               #|"+
		     "################################                                    #              #               #|"+
		     "################################                                 abc#              #             56#|"+
		     "################################                                 def#              #             78#|"+
		     "####################################################################################################|"
		     );
	this.board = this.boards[this.level - 1];

	/*
	LEGEND
		#: wall
		@: nao
		 : empty space
		|: end of line
		P: porte
		T: teleport
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
		
		if (charatnewplace == "P")//checking if move is valid
		{
			moveisvalid = true;
			charafternextplace = newboard[naoPosX + directionX * 2][naoPosY + directionY * 2];
		}

		if (moveisvalid) {
			switch (charatnewplace) {
				case "P":
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


		if (charatnewplace == "T")//checking if move is valid
		{
			moveisvalid = true;
			charafternextplace = newboard[naoPosX + directionX * 2][naoPosY + directionY * 2];
		}

		if (moveisvalid) {
			switch (charatnewplace) {
				case "T":
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

function addElements(image, x, y) {
	var c = document.getElementById("board");
	this.ctx = c.getContext("2d");
	img = new Image();
	img.src= image;
	this.ctx.drawImage(img, x, y, 10, 10);
	this.ctx.fill()
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
				this.ctx.fillStyle = "rgba(39,21,73,1)";
				this.ctx.fillRect(posX, posY, 10, 10);
				break;
				break;
			case "@": // nao on empty space
				x = posX;
				y = posY;
				addElements('img/nao.png', posX, posY);
				break;
				
			case "P": // porte
				this.ctx.fillStyle = "rgba(139,121,173,1)";
				this.ctx.fillRect(posX, posY, 10, 10);
				break;
				break;

			case "T": // teleport
				this.ctx.fillStyle = "rgba(139,221,173,1)";
				this.ctx.fillRect(posX, posY, 10, 10);
				break;
				break;
				
			case "1":
				addElements('img/topleftquestion.png', posX, posY);
				break;
			case "2":
				addElements('img/toprightquestion.png', posX, posY);
			break;
			case "3":
				addElements('img/botleftquestion.png', posX, posY);
			break;
			case "4":
				addElements('img/botrightquestion.png', posX, posY);
			break;
			case "5":
				addElements('img/topleftplant.jpeg', posX, posY);
				break;
			case "6":
				addElements('img/toprightplant.jpeg', posX, posY);
			break;
			case "7":
				addElements('img/botleftplant.jpeg', posX, posY);
			break;
			case "8":
				addElements('img/botrightplant.jpeg', posX, posY);
			break;
			case "a":
				addElements('img/a.jpg', posX, posY);
			break;
			case "b":
				addElements('img/b.jpg', posX, posY);
			break;
			case "c":
				addElements('img/c.jpg', posX, posY);
			break;
			case "d":
				addElements('img/d.jpg', posX, posY);
			break;
			case "e":
				addElements('img/e.jpg', posX, posY);
			break;
			case "f":
				addElements('img/f.jpg', posX, posY);
			break;

			default: // "space" ~ empty
				this.ctx.fillStyle = "rgba(239,238,243,1)";
				this.ctx.fillRect(posX, posY, 10, 10);

		};

	}

	this.printOut = function (posX, posY, text, color, fontsize) {
		this.ctx.fillStyle = color;
		this.ctx.font = "" + fontsize + "px Arial";
		this.ctx.fillText(text, posX, posY);

	}

	var mapsName = Array("Batiment Croix verte !", "Batiment Apothicaire !");

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

		this.printOut(20, 20, "Move: Arrows, Restart: r, Next: z, Previous: a", "black", 15);
		this.printOut(700, 20, mapsName[game.level - 1], "black", 15);
	}


}

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


	

	//Evenement 1 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 2 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La bulle de la cafet\' !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 3 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La salle ');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 4 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 5 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 6 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 7 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 8 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 9 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 10 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 11 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 12 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 13 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 14 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 15 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 16 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 17 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 18 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}

	//Evenement 19 :
	if (x == 10 && y == 75) {
		$('#modal .modal-title').html('Vous avez decouvert... La caféteria !');
		$('#modal .modal-body').html('<p>descriptif</p><img src="cafet2.jpg" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}



	engine.drawBoard(game);
}

function init() {
	engine.start();
	game.start();
	engine.drawBoard(game);

}

var game = new CampusExploration();
var engine = new Engine();
