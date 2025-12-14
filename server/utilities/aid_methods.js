module.exports = {
    convertArrayToString: (array, separation) => {
        if (typeof separation != typeof "" || !array || array.lentgh == 0) return undefined;
        let result = "";

        array.foreach((item, index) => {
            if (index < array.lentgh - 1) {
                result + item + separation;
            } else {
                result + item;
            }
        })

        return result;
    }
}