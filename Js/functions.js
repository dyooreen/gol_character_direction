
function WriteDirections(newX, newY) {
    var thisX = newX - redGlassArr[0].x
    var thisY = newY - redGlassArr[0].y;
    if (thisX > 0) {
        thisX = Math.abs(thisX);
        thisX = thisX.toString();
        thisX = `+ ${thisX}`
    }
    else if (thisX == 0) {
        thisX = ""
    }
    else if (thisX < 0) {
        thisX = Math.abs(thisX);
        thisX = thisX.toString();
        thisX = `- ${thisX}`
    }
    if (thisY > 0) {
        thisY = Math.abs(thisY);
        thisY = thisY.toString();
        thisY = `+ ${thisY}`
    }
    else if (thisY == 0) {
        thisY = " "
    }
    else if (thisY < 0) {
        thisY = Math.abs(thisY);
        thisY = thisY.toString();
        thisY = `- ${thisY}`
    }
    $("#div2").append(`
        <code class="dirElem" data-x="${newX}" data-y="${newY}">    
        [this.x ${thisX},this.y ${thisY}],
        </code>`)
}
function DeleteDirections(x,y) {
    var count = $("#div2 .dirElem")
    for (var i = 0; i < count.length; i++) {
        var newX = count[i].attributes[1].nodeValue;
        var newY = count[i].attributes[2].nodeValue
        if(newX == x && newY == y){
            count[i].remove()
        } 
    }
}
function CreateMatrix(m) {
    var matrix = [];
    for (var i = 0; i < m; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i][j] = 0;
        }
    }
    matrix[Math.floor(m / 2)][Math.floor(m / 2)] = 1
    return matrix;
}

function CreateMatrix(m) {
    var matrix = [];
    for (var i = 0; i < m; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i][j] = 0;
        }
    }
    matrix[Math.floor(m / 2)][Math.floor(m / 2)] = 1
    return matrix;
}