var isAvailable: boolean = true;
var userName: string;
var salary: number;
var skills: Array<string>;

enum STATUS {
  OK = 1000,
  WARN,
  ERROR
}

console.log("ok", STATUS.OK);
console.log("error", STATUS.ERROR);

var systemStatus: STATUS;
console.log(systemStatus);

var message: any;
message = 10;
message = {};
message = [];
message = true;

var result: string | boolean;
result = "10";
