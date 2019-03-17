var greyGlassArr = []
var redGlassArr = []
var canv = 600;
var resolution = randomNum()
var side = Math.floor(canv / resolution);
var border = (canv / resolution - side) * resolution - 1;
var matrix = CreateMatrix(resolution);
function setup() {
    $("#ok").on("click", () => {
        canv = 600
        var x = $("input").val()
        if (x > 2) {
            resolution = x;
            side = Math.floor(canv / resolution);
            border = (canv / resolution - side) * resolution - 1;
            matrix = CreateMatrix(resolution);
            createCanvas(canv - border, canv - border);
        }

    })
    createCanvas(canv - border, canv - border);
    background(0)
    createObject()
}
function createObject() {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[j][i] == 0) {
                greyGlassArr.push(new greyGlass(i, j))
            } else if (matrix[j][i] == 1) {
                redGlassArr.push(new redGlass(i, j))
            }
        }
    }
}
function drawObject() {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[floor(resolution / 2)][floor(resolution / 2)] = 2
            fill("black")
            rect(side * i, side * j, side, side)
            if (matrix[j][i] == 0) {
                fill("grey")
                rect(side * i, side * j, side, side)
            } else if (matrix[j][i] == 1) {
                fill("red")
                rect(side * i, side * j, side, side)
            }
        }
    }
}
function draw() {
    drawObject()
}
function mouseClicked() {
    $("#ok").on("click", () => {
        var x = $("input").val()
        if (x > 2) {
            resolution = x;
            side = Math.floor(canv / resolution);
            for (var i = 1; i < redGlassArr.length; i++) {
                redGlassArr.splice(i, 1)
            }
            greyGlassArr = []
            redGlassArr[0].x = Math.floor(resolution / 2)
            redGlassArr[0].y = Math.floor(resolution / 2)
            $("#div2").html("")
            drawObject()
            createObject()
        }
    })
    var x = floor(mouseX / side);
    var y = floor(mouseY / side);
    if (mouseX > 0 && mouseX < canv && mouseY > 0 && mouseY < canv) {
        for (var i in greyGlassArr) {
            var newX = greyGlassArr[i].x;
            var newY = greyGlassArr[i].y;
            if (newX === x && newY === y) {
                WriteDirections(newX, newY)
                matrix[newY][newX] = 1
                redGlassArr.push(new redGlass(newX, newY))
                greyGlassArr.splice(i, 1);
                break;
            }
        }

    }
}

function doubleClicked() {
    $("#ok").on("click", () => {
        var x = $("input").val()
        if (x > 2) {
            canv = 600;
            resolution = x;
            side = Math.floor(canv / resolution);
            matrix = CreateMatrix(resolution);
            drawObject()
            createObject()
        }
    })
    var x = floor(mouseX / side);
    var y = floor(mouseY / side);
    if (mouseX > 0 && mouseX < canv && mouseY > 0 && mouseY < canv) {
        for (var i in redGlassArr) {
            var istrue = redGlassArr[0].x == x && redGlassArr[0].y == y
            if (!istrue) {
                if (x == redGlassArr[i].x && y == redGlassArr[i].y) {
                    redGlassArr.splice(i, 1);
                    greyGlassArr.push(new greyGlass(x, y))
                    matrix[y][x] = 0;
                    var count = $("#div2 .dirElem")
                    for (var i = 0; i < count.length; i++) {
                        var newX = count[i].attributes[1].nodeValue;
                        var newY = count[i].attributes[2].nodeValue
                        if (newX == x && newY == y) {
                            count[i].remove()
                        }
                    }
                   
                }
            }
        }

    }
}


