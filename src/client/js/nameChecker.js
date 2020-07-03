function checkForName(inputText) {
    console.log("::: Running to check if not empty :::", inputText);

    if(inputText.length!=0){
        return true
    }
    else {
        return false
    }
}

export { checkForName }
