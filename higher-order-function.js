function myFun(demo, num) {
    function demo() {
        return myFun(demo, num);
    }
}
module.exports = myFun;