window.addEventListener("load", (e) => {
  function getOrientation(x1, y1, x2, y2) {
    // Calculate the differences in coordinates
    const dx = x2 - x1;
    const dy = y2 - y1;

    // Calculate the angle using atan2
    let angle = Math.atan2(dy, dx);

    // Convert radians to degrees
    angle = angle * (180 / Math.PI);

    // Ensure the angle is between 0 and 180 degrees
    if (angle < 0) {
      angle += 180;
    }

    return angle;
  }
  var setup = 0;
  var setupPlayers = [false, false, false, false];
  var scenarioOpen = "";
  var situationOpen = "";
  var moyenne = 0;
  var angleAll = [0, 0, 0, 0];
  const capt = document.getElementsByClassName("capt");
  const angleInfo = document.getElementsByClassName("angle-info");
  const percent = document.getElementsByClassName("percent");
  const choixDisplay = document.getElementById("choixDisplay");
  const scenario = document.getElementsByClassName("scenario");
  const situation = document.getElementsByClassName("situation");
  const body = document.getElementsByTagName("body")[0];
  const black = document.getElementById("black");
  const retour = document.getElementById("retour");
  const choix = document.getElementsByClassName("choix");
  const allScenarios = document.getElementById("allscenarios");
  const allSituations = document.getElementById("allsituations");
  const vision = document.getElementById("vision");
  const titreSituation = document.getElementsByClassName("titreSituation");
  const legende = document.getElementById("legende")
  function thumbnail(n) {
    for (let i = 0; i < 3; i++) {
      if (n == i) {
        choix[i].style.opacity = 1;
        choix[i].style.border = "4px solid white";
        choix[i].innerText = moyenne + "%";
      } else {
        choix[i].style.opacity = 0.5;
        choix[i].style.border = "none";
        choix[i].innerText = "";
      }
    }
    legende.innerHTML=legendesIA[scenarioOpen][situationOpen][n]
    legende.style.display="block"
  }
  function rotate(e, current) {
    let x1 = e.targetTouches[0].clientX;
    let y1 = e.targetTouches[0].clientY;
    let x2 = e.targetTouches[1].clientX;
    let y2 = e.targetTouches[1].clientY;
    let angle = getOrientation(x1, y1, x2, y2);
    if (current == 0 || current == 3) {
      angle = (angle + 90) % 180;
    }
    angle = parseInt((angle / 180) * 100);
    angleAll[current] = angle;
    percent[current].style.strokeDasharray = parseInt(angle / 2) + ", 100";
    if (angle < 10) {
      angle = "0" + angle;
    }

    angleInfo[current].innerText = angle + "%";
    moyenne = parseInt(
      (angleAll[0] + angleAll[1] + angleAll[2] + angleAll[3]) / 4,
    );
    if (situationOpen !== "") {
      if (moyenne < 33) {
        body.style.backgroundImage = "url("+niveauxIAImages[scenarioOpen][situationOpen][0]+")";
        thumbnail(0);
      } else if (moyenne < 66) {
        body.style.backgroundImage = "url("+niveauxIAImages[scenarioOpen][situationOpen][1]+")";
        thumbnail(1);
      } else {
        body.style.backgroundImage = "url("+niveauxIAImages[scenarioOpen][situationOpen][2]+")";
        thumbnail(2);
      }
    }
  }
  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      allScenarios.style.display = "block";
      vision.style.display = "none";
      retour.style.display = "block";
      clearInterval(calling)
      for(let j = 0; j<4; j++){
        place[j].style.display = "none"
      }
    }
  });
  for (let i = 0; i < capt.length; i++) {
    let current = i;
    capt[current].addEventListener("touchstart", (e) => {
      if (e.targetTouches.length == 2) {
        if (setupPlayers[current] == false) {
          setupPlayers[current] = true;
          setup++;
          place[current].classList.add("ok")
          if (setup == 4) {
            allScenarios.style.display = "block";
            vision.style.display = "none";
            retour.style.display = "block";
            for(let j = 0; j<4; j++){
              place[j].style.display = "none"
            }
            clearInterval(calling)
          }
        }
        rotate(e, current);
      }
    });
    capt[current].addEventListener("touchmove", (e) => {
      if (e.targetTouches.length == 2) {
        rotate(e, current);
      }
    });
    capt[current].addEventListener("touchend", (e) => {
      if (e.targetTouches.length < 2) {
      }
    });
  }

  

  for (let i = 0; i < 3; i++) {
    scenario[i].style.backgroundImage = "url(" + scenariosImages[i] + ")";
    scenario[i].addEventListener("click", () => {
      scenarioOpen = i;
      retour.style.display = "block";
      body.style.backgroundImage = "url(" + scenariosImages[scenarioOpen] + ")";
      black.style.display = "block";
      allScenarios.style.display = "none";
      for (let j = 0; j < 4; j++) {
        situation[j].style.backgroundImage =
          "url(" + situationsImages[scenarioOpen][j] + ")";
        titreSituation[j].innerText = situationsTitres[scenarioOpen][j];
      }
      allSituations.style.display = "flex";
    });
  }
  for (let i = 0; i < 4; i++) {
    situation[i].addEventListener("click", () => {
      situationOpen = i;
      body.style.backgroundImage =
        "url(" + situationsImages[scenarioOpen][situationOpen] + ")";
      black.style.display = "none";
      allSituations.style.display = "none";
      for (let j = 0; j < 4; j++) {
        percent[j].style.display = "block";
        angleInfo[j].style.display = "block";
      }
      choixDisplay.style.display = "flex";
      for (let j = 0; j < 3; j++) {
        choix[j].style.backgroundImage =
          "url(" + niveauxIAImages[scenarioOpen][situationOpen][j] + ")";
      }
    });
  }
  retour.addEventListener("click", (e) => {
    if (situationOpen !== "") {
      legende.style.display="none"
      choixDisplay.style.display = "none";
      situationOpen = "";
      body.style.backgroundImage = "url(" + scenariosImages[scenarioOpen] + ")";
      black.style.display = "block";

      for (let i = 0; i < 4; i++) {
        percent[i].style.display = "none";
        angleInfo[i].style.display = "none";
        situation[i].style.backgroundImage =
          "url(" + situationsImages[scenarioOpen][i] + ")";
        percent[i].style.strokeDasharray = "12, 100";
        angleInfo[i].innerText = "24%";
      }
      allSituations.style.display = "flex";
      thumbnail(4)

    } else if(scenarioOpen !== "") {
      scenarioOpen = "";
      body.style.backgroundImage = "url(fond.jpeg)";
      black.style.display = "none";
      allSituations.style.display = "none";
      allScenarios.style.display = "block";
      
    } else {
      retour.style.display = "none";
      allScenarios.style.display = "none";
      vision.style.display = "block"
      for(let i = 0; i<4;i++){
        place[i].style.display="block"
        place[i].classList.remove("ok")
        place[i].classList.toggle("size")
        setupPlayers[i] = false;
      }
      setup=0;
      calling = setInterval(function(){
        for(let i = 0; i<4 ; i++){
          place[i].classList.toggle("size")
        }
      },1000)

    }
  });
  for(let i = 0;i<3;i++){
    choix[i].addEventListener("click",(e)=>{
      for (let j = 0; j < 3; j++) {
        if (j == i) {
          choix[j].style.opacity = 1;
          choix[j].style.border = "4px solid white";
        } else {
          choix[j].style.opacity = 0.5;
          choix[j].style.border = "none";
        }
      }
      body.style.backgroundImage="url("+niveauxIAImages[scenarioOpen][situationOpen][i]+")"
      legende.innerHTML=legendesIA[scenarioOpen][situationOpen][i]
      legende.style.display="block"
      
    })
  }
  const place = document.getElementsByClassName("place")
  for(let i = 0; i<4 ; i++){
    place[i].classList.toggle("size")
  }
  calling = setInterval(function(){
    for(let i = 0; i<4 ; i++){
      place[i].classList.toggle("size")
    }
  },1000)
  


  
});