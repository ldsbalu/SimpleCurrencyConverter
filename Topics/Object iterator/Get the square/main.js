function getTheSquare(arrayOfObjects) {
    for (let obj of arrayOfObjects) {
        obj.square = Math.sqrt(obj.source);
    }
    return arrayOfObjects;
}
