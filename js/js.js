// Start function start()
function start() { 
	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1'class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis do jogo
	
	var jogo = {};
    var velocidade=5;
    var posicaoY = parseInt(Math.random() * 334); 
    //Cria um valor randomico (entre 0 334) para posicionar o helicóptero
    
    //Aqui estou configurando o que cada tecla irá fazer
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
        }

        jogo.pressionou = [];

        //Verifica se o usuário pressionou alguma tecla	
	
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
        });
    
    
        $(document).keyup(function(e){
           jogo.pressionou[e.which] = false;
        });

        
	
	//Game Loop

	jogo.timer = setInterval(loop,30);
	
	function loop() {
	
    moveamigo();
	movefundo();
    movejogador();
    moveinimigo1();
    moveinimigo2();
    
	
	} // Fim da função loop()

//Função que movimenta o fundo do jogo
	
	function movefundo() {
	
	esquerda = parseInt($("#fundoGame").css("background-position"));
	$("#fundoGame").css("background-position",esquerda-1);
	
	} // fim da função movefundo()

    function movejogador() {
	
        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);

            if (topo<=0) {
		
                $("#jogador").css("top",topo+10);
            }
            
        
        }
        
        if (jogo.pressionou[TECLA.S]) {
            
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);
            
            if (topo>=434) {	
                $("#jogador").css("top",topo-10);
                    
            }
        }
        
        if (jogo.pressionou[TECLA.D]) {
            
            //Chama função Disparo	
        }
    
        } // fim da função movejogador()
        

        //
        function moveinimigo1() {

            //Pega a posição da div inimiga1
            posicaoX = parseInt($("#inimigo1").css("left"));
            //Depois subtrai da velocidade, fazendo o inimigo caminhar sempre para a esquerda 
            $("#inimigo1").css("left",posicaoX-velocidade);
            $("#inimigo1").css("top",posicaoY);
                
            //se a posição x for <=0 reposiciona o inimigo1 no lado direito.
                if (posicaoX<=0) {
                posicaoY = parseInt(Math.random() * 334);
                $("#inimigo1").css("left",694);
                $("#inimigo1").css("top",posicaoY);
                    
                }
        } //Fim da função moveinimigo1()


        function moveinimigo2() {
            posicaoX = parseInt($("#inimigo2").css("left"));
            //cria a variável com posição x para pegar left do inimigo2
        $("#inimigo2").css("left",posicaoX-3);
            //faz o inimigo2 caminhar 3 unidades para a esquerda        
            if (posicaoX<=0) {
                
            $("#inimigo2").css("left",775);
                        
            }
        } // Fim da função moveinimigo2()

        function moveamigo() {
	
            posicaoX = parseInt($("#amigo").css("left"));
            //cria a variável com posição x para pegar left do amigo
            $("#amigo").css("left",posicaoX+1);
            //faz o amigo caminhar lentamente para a direita            
                if (posicaoX>906) {
                    
                $("#amigo").css("left",0);
                            
                }
        
        } // fim da função moveamigo()

}