var dataset = "binary2";

var binary = false;
var exclusive_mode = true;
var remove_mode = false;

var chars = [["unused"],
    ["space 1", "yes"],
    ["space 2", "yes"],
    ["space 3", "yes"],
    ["space 4", "yes"]
];


var items = [[""],
    ["yyyn", "1", "1", "1", "2"],
    ["yyny", "1", "1", "2", "1"],
    ["yynn", "1", "1", "2", "2"],
    ["ynyn", "1", "2", "1", "2"],
    ["ynnn", "1", "2", "2", "2"],
    ["nynn", "2", "1", "2", "2"],
    ["nnyn", "2", "2", "1", "2"]
];