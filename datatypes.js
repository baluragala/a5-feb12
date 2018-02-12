var isAvailable = true;
var userName;
var salary;
var skills;
var STATUS;
(function (STATUS) {
    STATUS[STATUS["OK"] = 1000] = "OK";
    STATUS[STATUS["WARN"] = 1001] = "WARN";
    STATUS[STATUS["ERROR"] = 1002] = "ERROR";
})(STATUS || (STATUS = {}));
console.log("ok", STATUS.OK);
console.log("error", STATUS.ERROR);
var systemStatus;
systemStatus = 100;
console.log(systemStatus);
