calc = (val) => {
    var output = 0;

    var cnt = val.split("(").length - 1;

    let arr = val.replace(/[()]/g, "").split(' ');
    var len = arr.length;

    if (cnt == 1) {

        switch (arr[0]) {
            case "add":
                output = parseInt(arr[1]) + parseInt(arr[2]);
                break;
            case "multiply":
                output = arr[1] * arr[2];
                break;
            default:
                console.log("Invalid operation");
        }
    }

    return output;

}
console.log(calc("(add 12 1)"));