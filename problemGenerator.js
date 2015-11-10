var problemTemplates = [
    //1-arity functions
    [
        {
            arity: 1,
            solver: function(args) {return args[0]},
            problem: function(args) {return '' + args[0];}
        }
    ],
    //2-arity functions
    [
        {
            arity: 2,
            solver: function(args) {return args[0] + args[1];},
            problem: function(args) {return args[0] + ' + ' + args[1];}
        },
        {
            arity: 2,
            solver: function(args) {return args[0] - args[1];},
            problem: function(args) {return args[0] + ' - ' + args[1];}
        }
    ],
    //3-arity functions
    [
        {
            arity: 3,
            solver: function(args) {return args[0] + args[1] + args[2];},
            problem: function(args) {return args[0] + ' + ' + args[1] + ' + ' + args[2];}
        },
        {
            arity: 3,
            solver: function(args) {return args[0] + args[1] - args[2];},
            problem: function(args) {return args[0] + ' + ' + args[1] + ' - ' + args[2];}
        },
        {
            arity: 3,
            solver: function(args) {return args[0] - args[1] + args[2];},
            problem: function(args) {return args[0] + ' - ' + args[1] + ' + ' + args[2];}
        },
        {
            arity: 3,
            solver: function(args) {return args[0] - args[1] - args[2];},
            problem: function(args) {return args[0] + ' - ' + args[1] + ' - ' + args[2];}
        },
    ]
];

function getRandomProblem(numTerms) {
    if (numTerms == undefined) {
        numTerms = Math.floor(Math.random() * 3) + 1;
    }
    if (1 <= numTerms && numTerms <= 3) {
        var args = [];
        for (var i=0; i<numTerms; i++) {
            args[i] = Math.floor((Math.random() * 10) + 1);
        }
        var index = Math.floor((Math.random() * problemTemplates[numTerms-1].length));
        return new Problem(problemTemplates[numTerms-1][index], args);
    }
    else {
        console.log("ERROR --- There are no " + numTerms + " functions.");
    }
}

function Problem(template, args) {
    this.getProblem = function() {
        return template.problem(args);
    }
    
    this.getAnswer = function() {
        return template.solver(args);
    }
}