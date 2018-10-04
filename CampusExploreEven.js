var json = {
    "campusCV": {
        "1": 
        {
            "description": "Les locaux contiennent de nombreux lieux de travail libre, dont certaines où les élèves peuvent se regrouper en petits groupes et s’isoler, tout en profitant des équipements  nécessaires pour installer le matériel.",
            "image": ""
        },
        "2": 
        {
            "description": "En ce moment…  Cours WIS : Unité d’enseignement optionnelle ;  Développement d’applications  web et nomades, comprenant « Données et développement d’appli »",
            "image": ""
        },
        "3": 
        {
            "description": "En ce moment…  Cours EPSI : Développement d’appli informatiques, comprenant ;  - Développement environnement objet : Java et JEE  - Intégration continue Java et Jenkins »",
            "image": ""
        },
        "4": 
        {
            "description": "En ce moment…  Cours EPSI : Gestion des données, comprenant ;  - Conception et exploitation d’une base de données : SGBD Oracle  - Administration d’une base de donnée",
            "image": ""
        },
        "5": 
        {
            "description": "En ce moment…  Cours WIS : Stratégie et digital business, comprenant ;  - Management de projet  - Stratégie digitale  - Communication & Techniques d’expression",
            "image": ""
        },
        "6": 
        {
            "description": "En ce moment…  Cours EPSI : Salle des options. En fonction du choix, on a ;  - Sécurité informatique  - Virtualisation  Données et objets connectés",
            "image": ""
        },
        "7": 
        {
            "description": "Distributeur, tables et babyfoot, cette salle sert plutôt à se regrouper  pour se détendre pendant le repas.",
            "image": ""
        },
        "8": 
        {
            "description": "Salle de réunion réservée aux membres du Bureau Des Elèves.  On raconte que les intrus sont chassés à coup de club de golf…",
            "image": ""
        },
        "9": 
        {
            "description": "Salle réservée aux professeurs, leur servant à fuir les élèves.",
            "image": ""
        },
        "10": 
        {
            "description": "L’administration principale de l’école se trouve dans l’autre bâtiment, mais, par  soucis pratique, un bureau est quand même  placé dans ses locaux  pour orienter les âmes perdues.",
            "image": ""
        }
    },
    "campusA": {
        "1": 
        {
            "description": "Les locaux contiennent de nombreux lieux de travail libre, dont certaines où les élèves  peuvent se regrouper en petits groupes et s’isoler, tout en profitant  des équipements  nécessaires pour installer le matériel.",
            "image": ""
        },
        "2": 
        {
            "description": "Distributeur, tables et micro-onde, cette salle sert plutôt à se regrouper  pour se détendre pendant le repas.",
            "image": ""
        },
        "3": 
        {
            "description": "En ce moment…  Cours WIS : Unité d’enseignement optionnelle ; Web marketing, comprenant ;  - Stratégies e-marketing  - Données digitales",
            "image": ""
        },
        "4": 
        {
            "description": "En ce moment…  Cours EPSI : Méthodes et projets, comprenant ;  - projets SI et recherche opérationnelle (UML, gestion de projet via ITIL et RO)  - Environnement juridique et financier",
            "image": ""
        },
        "5": 
        {
            "description": "En ce moment…  Cours WIS : Conception et intégration d’applications web et mobile, comprenant ;  - Développement front et back end web et mobile  - Cloud web et sécurité",
            "image": ""
        },
        "6": 
        {
            "description": "En ce moment…  Cours EPSI : Administration infrastructure système et réseau, comprenant ;  - IP, technologie et service réseau sans fil  - Administration sous Windows  - Sécurité système et réseau",
            "image": ""
        },
        "7": 
        {
            "description": "Renseignement ou papiers relatif à l’école, c’est ici que ce fait  une grande partie de l’administration d’Epsi Montpellier.",
            "image": ""
        },
        "8": 
        {
            "description": "Dans cette salle, les élèves ont accès à des technologies plus rares et/ou trop  onéreuses pour expérimenter, voir faire des projets dessus,  afin d’élargir leurs possibilités.",
            "image": ""
        },
        "9":
        {
            "description": "Au premier étage, on trouve les bureaux du staff de l’école ; directrice,  responsables d’admission… Des personnes que l’on peut rencontrer sur rendez-vous  et qui viendront de toute façon vous chercher au rez-de-chaussée.",
            "image": ""
        }
    }
}


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
	if (x >= 115 && x <= 155 && y >= 180 && y <= 220 && game.level == 1) {
		$('#modal .modal-title').html('Vous avez découvert... la salle de travail !');
		$('#modal .modal-body').html('<p>'+json.campusCV["1"].description+' </p><img src="img//cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 2 :
	else if (x >= 180 && x <= 220 && y >= 180 && y <= 220 && game.level == 1) {
		$('#modal .modal-title').html("Vous avez decouvert... Cours WIS : développement d'applis web !");
		$('#modal .modal-body').html('<p>'+json.campusCV["2"].description+'</p><img src="img//cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 3 :
	else if (x >= 250 && x <= 290 && y >= 275 && y <= 315 && game.level == 1) {
		$('#modal .modal-title').html("Vous avez decouvert... Cours EPSI : développement d'applis informatiques !");
		$('#modal .modal-body').html('<p>'+json.campusCV["3"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 4 :
	else if (x >= 480 && x <= 520 && y >= 180 && y <= 220 && game.level == 1) {
		$('#modal .modal-title').html('Vous avez decouvert... Cours EPSI : gestion de données !');
		$('#modal .modal-body').html('<p>'+json.campusCV["4"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 5 :
	else if (x >= 730 && x <= 770 && y >= 180 && y <= 220 && game.level == 1) {
		$('#modal .modal-title').html('Vous avez decouvert... Cours WIS : stratégie et digital business !');
		$('#modal .modal-body').html('<p>'+json.campusCV["5"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 6 :
	else if (x >= 450 && x <= 490 && y >= 285 && y <= 325 && game.level == 1) {
		$('#modal .modal-title').html('Vous avez decouvert... Cours EPSI : salle des options !');
		$('#modal .modal-body').html('<p>'+json.campusCV["6"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 7 :
	else if (x >= 690 && x <= 730 && y >= 335 && y <= 375 && game.level == 1) {
		$('#modal .modal-title').html('Vous avez decouvert... la caféteria !');
		$('#modal .modal-body').html('<p>'+json.campusCV["7"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 8 :
	else if (x >= 910 && x <= 950 && y >= 205 && y <= 245 && game.level == 1) {
		$('#modal .modal-title').html('Vous avez decouvert... le temple du BDE !');
		$('#modal .modal-body').html('<p>'+json.campusCV["8"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 9 :
	else if (x >= 850 && x <= 890 && y >= 325 && y <= 365 && game.level == 1) {
		$('#modal .modal-title').html('Vous avez decouvert... la salle des profs !');
		$('#modal .modal-body').html('<p>'+json.campusCV["9"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 10 :
	else if (x >= 115 && x <= 155 && y >= 180 && y <= 220 && game.level == 1) {
		$('#modal .modal-title').html("Vous avez decouvert... l'accueil !");
		$('#modal .modal-body').html('<p>'+json.campusCV["10"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 11 :
	else if (x >= 130 && x <= 170 && y >= 205 && y <= 245 && game.level == 2) {
		$('#modal .modal-title').html("Vous avez decouvert... la salle de travail !");
		$('#modal .modal-body').html('<p>'+json.campusA["1"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" ></img>');
		$('#modal').modal();
	}//Evenement 12 :
	else if (x >= 290 && x <= 330 && y >= 205 && y <= 245 && game.level == 2) {
		$('#modal .modal-title').html('Vous avez decouvert... la caféteria !');
		$('#modal .modal-body').html('<p>'+json.campusA["2"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded" >');
		$('#modal').modal();
	}//Evenement 13 :
	else if (x >= 220 && x <= 260 && y >= 415 && y <= 455 && game.level == 2) {
		$('#modal .modal-title').html('Vous avez decouvert...  Cours WIS : webmarketing !');
		$('#modal .modal-body').html('<p>'+json.campusA["3"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded">');
		$('#modal').modal();
	}//Evenement 14 :
	else if (x >= 370 && x <= 410 && y >= 315 && y <= 355 && game.level == 2) {
		$('#modal .modal-title').html('Vous avez decouvert... Cours EPSI : méthodes et projet !');
		$('#modal .modal-body').html('<p>'+json.campusA["4"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded">');
		$('#modal').modal();
	}//Evenement 15 :
	else if (x >= 630 && x <= 670 && y >= 255 && y <= 295 && game.level == 2) {
		$('#modal .modal-title').html("Vous avez decouvert... Cours WIS : conception et intégration d'applis web !");
		$('#modal .modal-body').html('<p>'+json.campusA["5"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded">');
		$('#modal').modal();
	}//Evenement 16 :
	else if (x >= 620 && x <= 660 && y >= 455 && y <= 495 && game.level == 2) {
		$('#modal .modal-title').html('Vous avez decouvert... Cours EPSI : administration infrastructure et réseau !');
		$('#modal .modal-body').html('<p>'+json.campusA["6"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded">');
		$('#modal').modal();
	}//Evenement 17 :
	else if (x >= 770 && x <= 810 && y >= 325 && y <= 365 && game.level == 2) {
		$('#modal .modal-title').html("Vous avez decouvert... L'accueil!");
		$('#modal .modal-body').html('<p>'+json.campusA["7"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded">');
		$('#modal').modal();
	}//Evenement 18 :
	else if (x >= 860 && x <= 910 && y >= 455 && y <= 495 && game.level == 2) {
		$('#modal .modal-title').html('Vous avez decouvert... MyDil !');
		$('#modal .modal-body').html('<p>'+json.campusA["8"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded">');
		$('#modal').modal();
	}//Evenement 19 :
	else if (x >= 920 && x <= 960 && y >= 235 && y <= 275 && game.level == 2) {
		$('#modal .modal-title').html("Vous avez decouvert... L'escalier!");
		$('#modal .modal-body').html('<p>'+json.campusA["9"].description+'</p><img src="img/cafet2.png" width="100%" height="auto" class="rounded">');
		$('#modal').modal();
	}

    //Evenement next_level :
	if ( x == 640 && y == 235 && game.level == 1) {game.nextlevel();}

	//Evenement previous_level :
	if (x == 720 && y == 105 && game.level == 2) {game.previouslevel();}


	engine.drawBoard(game);
}



function init() {
	engine.start();
	game.start();
	engine.drawBoard(game);

}

var game = new CampusExploration();
var engine = new Engine();
