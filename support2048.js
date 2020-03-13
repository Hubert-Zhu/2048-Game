function getPosTop(i,j){
    return 20+i*120;
}

function getPosLeft(i,j){
    return 20+j*120;
}

function getNumberBackgroundColor(num){
    switch (num) {
        case 2  :
            return '#eee4da';
            break;
        case 4  :
            return '#ede0c8';
            break;
        case 8  :
            return '#f2b179';
            break;
        case 16 :
            return '#f67c5f';
            break;
        case 32 :
            return '#f65c5f';
            break;
        case 64 :
            return '#f65e3b';
            break;
        case 128:
            return '#edcf72';
            break;
        case 256:
            return '#edcc61';
            break;
        case 512:
            return '#99cc00';
            break;
        case 1024:
            return '#33b5e5';
            break;
        case 2048:
            return '#0099cc';
            break;
        case 4096:
            return '#aa66cc';
            break;
        case 8192:
            return '#9933cc';
            break;
    }
    return 'white';
}

function getNumberColor(num){
    if( num <= 4)
        return "#776e65";

    return "white";
}

function nospace( board ){
    for( var i = 0; i < 4; i++){
        for( var j=0; j<4 ; j++) {
            if(board[i][j] == 0){
                return false
            }
        }
    }
    return true;
}
