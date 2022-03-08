let peças = "tower";

switch (peças) {
    case "bishop":
        console.log("diagonal");
        break;
    case "tower":
        console.log("vertical/horizontal")
        break;
    case "cavalo":
        console.log("movimento em L")
        break;
    default:
        console.log("peça invalida")
}