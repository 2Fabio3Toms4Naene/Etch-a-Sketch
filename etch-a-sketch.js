const containerEtchAsketch = document.querySelector(".container-etch-a-sketch");
const changeGrid = document.querySelector(".change-grid");
const showGridsSize = document.querySelector(".show-grids-size");
const containerTools = document.querySelector(".container-tools");
const resetGrids = document.querySelector(".reset-grids");
const buttonResetColors = document.querySelector(".reset-colors");

let grisSizeDefault = 20;

function getUserNumber() {
    changeGrid.addEventListener("click", () => {
        const userNumber = parseInt(prompt("Please enter a number greater than 9 and less than 101"));
        if(userNumber > 9 && userNumber < 101) {
            playTheGame(userNumber);
        }

        showGridsSize.textContent = `${userNumber} x ${userNumber}`;
    });
};
getUserNumber();

function playTheGame(userSize) {
    function createDefaultGrids() {
        showGridsSize.textContent = `${grisSizeDefault} x ${grisSizeDefault}`;
        for(let i = 0; i < grisSizeDefault; i ++) {
        const containerRows = document.createElement("div");
        containerRows.classList = "container-rows";
        
        for(let i = 0; i < grisSizeDefault; i++) {
            const grid = document.createElement("div");
            grid.classList = "box";

            containerRows.appendChild(grid);

            createPainter(grid);
            resetGridsColos(grid);
        };

        containerEtchAsketch.appendChild(containerRows);
    };
    }
    createDefaultGrids();

    function delateGrids() {
        if(userSize > 9 && userSize < 101) {
        const deleteBox = containerEtchAsketch.querySelectorAll("div");
        deleteBox.forEach((rows) => {
        rows.remove();
     });
    }
    }
    delateGrids();

    function createNewGrids() {
        for(let i = 0; i < userSize; i ++) {
        const containerRows = document.createElement("div");
        containerRows.classList = "container-rows";
        
        for(let i = 0; i < userSize; i++) {
            const grid = document.createElement("div");
            grid.classList = "box";

            containerRows.appendChild(grid);

            createPainter(grid);
            resetGridsColos(grid);
        };

        containerEtchAsketch.appendChild(containerRows);
    };
    }
    createNewGrids();

    function createPainter(grid) {
        containerTools.addEventListener("click", (event) => {
                let target = event.target;
                let value = target.id;
               
               switch(value) {
                case "brush":
                    grid.addEventListener("mouseover", function() {
                    this.style.backgroundColor = "red";
                });
                break;
                case "eraser":
                    grid.addEventListener("mouseover", function() {
                    this.style.backgroundColor = "white";
                });
                break;
                case "colorWheel":
                    grid.addEventListener("mouseover", function() {
                        let r = Math.floor(Math.random() * 256);
                        let g = Math.floor(Math.random() * 256);
                        let b = Math.floor(Math.random() * 256);
                        this.style.backgroundColor = `rgb(${r} ${g} ${b})`;
                    });
            break;
        }
    });
    };

    function resetGridsAll() {
        resetGrids.addEventListener("click", () => {
        const deleteGrids = containerEtchAsketch.querySelectorAll("div");
        deleteGrids.forEach((grids) => {
        grids.remove();
    });
        createDefaultGrids(grisSizeDefault);
    });
    }
    resetGridsAll();

    function resetGridsColos(grid) {
        buttonResetColors.addEventListener("click", () => {
            grid.style.backgroundColor = "";
            grid.addEventListener("mouseover", function(){
                this.style.backgroundColor = "";
            });
        });
    };
};
playTheGame();