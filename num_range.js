let value = + prompt("Type a number:", 0);
let isPositive = false;

if (value > 0) {
    isPositive = true;
}

switch (isPositive) {
    case true:
        alert(1);
        break;
    default:
        switch (value) {
            case 0:
                alert(0);
                break;
            default:
                alert(-1);
        }
    
}