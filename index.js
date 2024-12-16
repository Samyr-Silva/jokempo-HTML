    window.onload = function(){
    
        let player1Option = chooseWepon();
        let player2Option = chooseWepon();
        let scorePlayer1 = 0;
        let scorePlayer2 = 0;
        

        
        const div = document.getElementsByClassName("container-app")
        const button = document.createElement("button");
        button.className = "button-container";
        
        button.style.justifyContent = "center";
        button.style.display = "flex";
        button.style.alignItems = "center";
        div[0].style.margin = "10px";
        div[0].style.display = "flex";
        button.textContent = "Click Me";
        div[0].style.marginLeft = "60px";
        div[0].style.justifyContent = "space-around";
        div[0].style.gap = "60px";
        button.style.width = "2000px";
        button.style.height = "50px";
        button.style.backgroundColor = "rgb( 255, 0,0)";
        button.style.color = "white";
        button.style.textAlign = "center";
        div[0].after(button);
        

        button.addEventListener("click", basic);
        function basic(){
          
            player1Option = chooseWepon();
            player2Option = chooseWepon();
            checkForWInner();
    
            const player1Image = document.getElementById("player1");
            const player2Image = document.getElementById("player2");
    
            if (player1Image && player2Image) {
                player1Image.src = player1Option;
                player2Image.src = player2Option;
            } else {
                console.error("Imagens não encontradas!");
            }
        }
       
        const player1Conteiner = document.createElement("div");
        player1Conteiner.className = "game";
        player1Conteiner.style.flexDirection = "column";
        div[0].appendChild(player1Conteiner);

        const player2Conteiner = document.createElement("div");
        player2Conteiner.className = "game";
        player2Conteiner.style.flexDirection = "column";
        div[0].appendChild(player2Conteiner);

        const divScore = document.createElement("div");
        divScore.textContent = `Score: ${scorePlayer1}`;
        divScore.style.marginTop = "30px";
        divScore.style.margin = "30px";
        player1Conteiner.appendChild(divScore);

        const image1 = document.createElement("img");
        image1.src = player1Option;
        image1.id = "player1";
        image1.style.justifyContent = "space-between";
        image1.className = "player1";
        player1Conteiner.appendChild(image1);



        const divScorePlayer2 = document.createElement("div");
        divScorePlayer2.textContent = `Score: ${scorePlayer2}`;
        divScorePlayer2.style.marginTop = "30px";
        divScorePlayer2.style.margin = "30px";
        player2Conteiner.appendChild(divScorePlayer2);

        const image2 = document.createElement("img");
        image2.src = player2Option;
        image2.id = "player2";
        image1.style.justifyContent = "space-between";
        image2.className = "player2";
        player2Conteiner.appendChild(image2);

       

        
        function chooseWepon(){
            let choise = Math.floor(Math.random() * 3);
            if (choise === 0){
                return "assets/paper.png";
            }
            else if (choise === 1){
                return "assets/rock.png";
            }
            else{
                return "assets/scissors.png";
            }
        }

        function checkForWInner(){
            console.log("yaheeee");
            if(player1Option === "assets/rock.png" && player2Option === "assets/scissors.png"){
                scorePlayer1 += 1;
                console.log(scorePlayer1)
            }
            else if(player1Option === "assets/scissors.png" && player2Option === "assets/paper.png"){
                scorePlayer1 += 1;
                console.log(scorePlayer1)
            }
            else if(player1Option === "assets/paper.png" && player2Option === "assets/rock.png"){
                scorePlayer1 += 1;
                console.log(scorePlayer1)
            }
            else if(player2Option === "assets/rock.png" && player1Option === "assets/scissors.png"){
                scorePlayer2 += 1;
            }
            else if(player2Option === "assets/scissors.png" && player1Option === "assets/paper.png"){
                scorePlayer2 += 1;
            }
            else if(player2Option === "assets/paper.png" && player1Option === "assets/rock.png"){
                scorePlayer2 += 1;
            }

            divScore.textContent = `Score: ${scorePlayer2}`;
            divScorePlayer2.textContent = `Score: ${scorePlayer1}`;
    }
    

}