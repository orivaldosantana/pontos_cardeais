var tela = 1;
var larguraMenu = 200;
var alturaMenu = 50;
var xMenuTexto = 300; 
var yMenuTexto = 200;
var corBotaoMenu = 60; 

var xMenu = xMenuTexto - larguraMenu/2;

var yMenu = yMenuTexto-35;
var yMenu1 = yMenu; 
var yMenu2 = yMenu+50; 
var yMenu3 = yMenu+100;


function setup() {
  createCanvas(500, 400);
}

function draw() {

  // Tela de Menu 
  if (tela == 1) {
    background(220);
    // Menu com duas Opções 
    // Iniciar o Jogo 
    textAlign(CENTER);
    textSize(26);
    
    if ( mouseX > xMenu && mouseX < xMenu + larguraMenu && mouseY > yMenu1 && mouseY < yMenu1 + alturaMenu ) {
      stroke(corBotaoMenu);
      noFill();
      rect(xMenu, yMenu1, larguraMenu, alturaMenu, 15);
      if (mouseIsPressed) { 
        tela = 2;  
      }
    }
    fill(40);
    noStroke();
    text("Iniciar", xMenuTexto, yMenuTexto);

    // Informações do Jogo
    if ( mouseX > xMenu && mouseX < xMenu + larguraMenu && mouseY > yMenu2 && mouseY < yMenu2 + alturaMenu ) {
      stroke(20);
      noFill();
      rect(xMenu, yMenu2, larguraMenu, alturaMenu, 15);
      if (mouseIsPressed) { 
        tela = 3;  
      }
    }
    fill(40);
    noStroke();
    text("Informações", xMenuTexto, yMenuTexto+50);
    // Créditos
    if ( mouseX > xMenu && mouseX < xMenu + larguraMenu && mouseY > yMenu3 && mouseY < yMenu3 + alturaMenu ) {
      stroke(50);
      noFill();
      rect(xMenu, yMenu3, larguraMenu, alturaMenu, 15);
      if (mouseIsPressed) { 
        tela = 4;  
      }
    }
    fill(40);
    noStroke();
    text("Créditos", xMenuTexto, yMenuTexto+100);

  } 
  // Jogo em ação 
  else if (tela == 2) {
    background(220);
    stroke(20);
    ellipse(50, 200, 30, 30);
    line(0, 215, 300, 215);


  }
  // Informações sobre o jogo
  else if (tela == 3) {
    background(10);
    fill(240);
    textSize(14);
    noStroke();
    textAlign(LEFT);
    text("Resgate dos Soldades Cardeais \n \n  Você é uma aeronave de resgate e precisa resgatar soldados em diferentes posições do mapa. Para se orientar, você receberá orientações da torre de comando informando a sequencia de passos que você irá fazer. \n \n  Este jogo trabalha com a habilidade: (EF04CI09) Identificar os pontos cardeais, com base no registro de diferentes posições relativas do Sol e da sombra de uma vara (gnômon). O Foco do jogo é trabalhar com os pontos cardeais principalmente na identificações das direções: Norte, Sul, Leste e Oeste. ", 20, 20, 460, 460);
    // Voltar
    var xVoltar = 10;
    var yVoltar = 250; 
    if ( mouseX > xVoltar && mouseX < xVoltar + larguraMenu && mouseY > yVoltar && mouseY < yVoltar + alturaMenu ) {
      stroke(250);
      noFill();
      rect(xVoltar, yVoltar, larguraMenu, alturaMenu, 15);
      if (mouseIsPressed) { 
        tela = 1;  
      }
    }
    textAlign(CENTER);
    textSize(26);
    fill(240);
    noStroke();
    text("Voltar", xVoltar+larguraMenu/2, yVoltar + 35);


  }
  // Créditos 
  else if (tela == 4) {
    background(10);
    fill(240);
    textSize(14);
    noStroke();
    textAlign(LEFT);
    text("Equipe de desenvolvimento: Aquiles, Orivaldo, Rudson\n Image X dafasfdasfas \n Image Y", 20, 20, 260, 260);
  }
    
}