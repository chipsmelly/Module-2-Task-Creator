/*  INTRO

    You are going to copy all of the code from parts 0-3 and paste it into the calculator
    file towards the top of the file (below the force type / handle type data and ABOVE
    the tasks initialization).  Then, delete the 'const tasks' initialization.
*/

/*  PART 0

    This section of the code is an object that holds all of the handle types used
    in module 2 of the app. This is the equivalent to the force types in module 1.

    Ultimately, this holds all of the mean and standard deviation values for each combination 
    of attributes selected by the user for each handle type.

    The transform function below will use the user-selected attributes to navigate the object tree
    and locate the correct mean and standard deviation values (one for male and one for female).
*/

const handleType = {
    "Key": {
            male: {
                mean: 4.15,
                stdDev: 0.65
            },
            female: {
                mean: 3.25,
                stdDev: 0.05
            }
    },
    "Door Knob": {
        male: {
            mean: 6.95,
            stdDev: 2.47
        },
        female: {
            mean: 5.25,
            stdDev: 1.44
        }
    },
    "Lever": {
        male: {
            mean: 31.74,
            stdDev: 8.97
        },
        female: {
            mean: 20.32,
            stdDev: 7.28
        }
    },
    "L-Shaped": {
        "Pronating": {
            male: {
                mean: 17.4,
                stdDev: 5.2
            },
            female: {
                mean: 11.5,
                stdDev: 3.4
            }
        },
        "Supinating": {
            male: {
                mean: 13.7,
                stdDev: 3.4
            },
            female: {
                mean: 9,
                stdDev: 2.2
            }
        }
    },
    "Ridged Knob": {
        male: {
            mean: 4.27,
            stdDev: 0.98
        },
        female: {
            mean: 2.87,
            stdDev: 0.64
        }
    },
    "Tap": {
        male: {
            mean: 8.27,
            stdDev: 2.25
        },
        female: {
            mean: 6.03,
            stdDev: 1.5
        }
    },
    "Butterfly Nut": {
        male: {
            mean: 3.95,
            stdDev: 1.1
        },
        female: {
            mean: 2.7,
            stdDev: 0.58
        }
    },
    "Jar Lid": {
        "Knurled": {
            '45': {
                male: {
                    mean: 4.5,
                    stdDev: 1.28
                },
                female: {
                    mean: 3.61,
                    stdDev: 1.15
                }
            },
            '65': {
                male: {
                    mean: 6.63,
                    stdDev: 1.5
                },
                female: {
                    mean: 4.76,
                    stdDev: 1.4
                }
            },
            '85': {
                male: {
                    mean: 8.43,
                    stdDev: 1.79
                },
                female: {
                    mean: 5.93,
                    stdDev: 1.52
                }
            }
        },
        "Smooth": {
            "45": {
                male: {
                    mean: 3.69,
                    stdDev: 1.14
                },
                female: {
                    mean: 3.23,
                    stdDev: 1.14
                }
            },
            "65": {
                male: {
                    mean: 5.65,
                    stdDev: 1.22
                },
                female: {
                    mean: 4.39,
                    stdDev: 1.4
                }
            },
            "85": {
                male: {
                    mean: 7.6,
                    stdDev: 1.72
                },
                female: {
                    mean: 5.82,
                    stdDev: 1.89
                }
            }
        }
    },
    "Round Knob": {
        "Knurled": {
            3.2: {
                male: {
                    mean: 0.064,
                    stdDev: 0.022
                },
                female: {
                    mean: 0.043,
                    stdDev: 0.015
                }
            },
            6: {
                male: {
                    mean: 0.138,
                    stdDev: 0.038
                },
                female: {
                    mean: 0.092,
                    stdDev: 0.025
                }
            },
            13: {
                male: {
                    mean: 0.225,
                    stdDev: 0.095
                },
                female: {
                    mean: 0.15,
                    stdDev: 0.063
                }
            },
            19: {
                male: {
                    mean: 0.657,
                    stdDev: 0.224
                },
                female: {
                    mean: 0.438,
                    stdDev: 0.149
                }
            },
            25: {
                male: {
                    mean: 0.819,
                    stdDev: 0.251
                },
                female: {
                    mean: 0.545,
                    stdDev: 0.167
                }
            },
            38: {
                male: {
                    mean: 1.036,
                    stdDev: 0.265
                },
                female: {
                    mean: 0.69,
                    stdDev: 0.176
                }
            },
            51: {
                male: {
                    mean: 1.484,
                    stdDev: 0.345
                },
                female: {
                    mean: 0.988,
                    stdDev: 0.23
                }
            },
            76: {
                male: {
                    mean: 3.373,
                    stdDev: 0.964
                },
                female: {
                    mean: 2.246,
                    stdDev: 0.642
                }
            },
            102: {
                male: {
                    mean: 4.928,
                    stdDev: 1.228
                },
                female: {
                    mean: 3.282,
                    stdDev: 0.818
                }
            },
            127: {
                male: {
                    mean: 6.872,
                    stdDev: 1.855
                },
                female: {
                    mean: 4.577,
                    stdDev: 1.235
                }
            }
        },
        "Smooth": {
            3.2: {
                male: {
                    mean: 0.021,
                    stdDev: 0.011
                },
                female: {
                    mean: 0.014,
                    stdDev: 0.007
                }
            },
            6: {
                male: {
                    mean: 0.059,
                    stdDev: 0.023
                },
                female: {
                    mean: 0.039,
                    stdDev: 0.015
                }
            },
            13: {
                male: {
                    mean: 0.154,
                    stdDev: 0.054
                },
                female: {
                    mean: 0.102,
                    stdDev: 0.036
                }
            },
            19: {
                male: {
                    mean: 0.281,
                    stdDev: 0.075
                },
                female: {
                    mean: 0.187,
                    stdDev: 0.05
                }
            },
            25: {
                male: {
                    mean: 0.417,
                    stdDev: 0.15
                },
                female: {
                    mean: 0.278,
                    stdDev: 0.1
                }
            },
            38: {
                male: {
                    mean: 0.688,
                    stdDev: 0.186
                },
                female: {
                    mean: 0.458,
                    stdDev: 0.124
                }
            },
            51: {
                male: {
                    mean: 1.045,
                    stdDev: 0.33
                },
                female: {
                    mean: 0.696,
                    stdDev: 0.22
                }
            },
            76: {
                male: {
                    mean: 1.886,
                    stdDev: 0.573
                },
                female: {
                    mean: 1.256,
                    stdDev: 0.382
                }
            },
            102: {
                male: {
                    mean: 3.207,
                    stdDev: 0.955
                },
                female: {
                    mean: 2.136,
                    stdDev: 0.636
                }
            },
            127: {
                male: {
                    mean: 5.058,
                    stdDev: 1.594
                },
                female: {
                    mean: 3.369,
                    stdDev: 1.062
                }
            }
        }
    },
    "Regular Screwdriver": {
        "Pronating": {
            "Pronated": {
                male: {
                    mean: 2.06,
                    stdDev: 0.64
                },
                female: {
                    mean: 1.36,
                    stdDev: 0.42
                }
            },
            "Neutral": {
                male: {
                    mean: 3.96,
                    stdDev: 0.73
                },
                female: {
                    mean: 2.61,
                    stdDev: 0.48
                }
            },
            "Supinated": {
                male: {
                    mean: 5,
                    stdDev: 1.03
                },
                female: {
                    mean: 3.3,
                    stdDev: 0.68
                }
            }
        },
        "Supinating": {
            "Pronated": {
                male: {
                    mean: 5.22,
                    stdDev: 1.48
                },
                female: {
                    mean: 3.44,
                    stdDev: 0.98
                }
            },
            "Neutral": {
                male: {
                    mean: 5.08,
                    stdDev: 1.08
                },
                female: {
                    mean: 3.35,
                    stdDev: 0.71
                }
            },
            "Supinated": {
                male: {
                    mean: 4.13,
                    stdDev: 1.37
                },
                female: {
                    mean: 2.72,
                    stdDev: 0.91
                }
            }
        }
        
    },
    "Pistol Grip Screwdriver": {
        "Pronating": {
                "Pronated": {
                    male: {
                        mean: 3.55,
                        stdDev: 1.96
                    },
                    female: {
                        mean: 2.06,
                        stdDev: 1.14
                    }
                },
                "Neutral": {
                    male: {
                        mean: 7.74,
                        stdDev: 2.44
                    },
                    female: {
                        mean: 4.49,
                        stdDev: 1.42
                    }
                },
                "Supinated": {
                    male: {
                        mean: 11.71,
                        stdDev: 2.81
                    },
                    female: {
                        mean: 6.79,
                        stdDev: 1.63
                    }
                }
        },
        "Supinating": {
                "Pronated": {
                    male: {
                        mean: 11.91,
                        stdDev: 3.02
                    },
                    female: {
                        mean: 6.31,
                        stdDev: 1.6
                    }
                },
                "Neutral": {
                    male: {
                        mean: 9.93,
                        stdDev: 2.16
                    },
                    female: {
                        mean: 5.26,
                        stdDev: 1.14
                    }
                },
                "Supinated": {
                    male: {
                        mean: 5.98,
                        stdDev: 2.2
                    },
                    female: {
                        mean: 3.17,
                        stdDev: 1.17
                    }
                }
        }
    },
    "T-Handle": {
        "Pronating": {
            "0": {
                "Pronated": {
                    male: {
                        mean: 12.8,
                        stdDev: 4.6
                    },
                    female: {
                        mean: 7.42,
                        stdDev: 2.67
                    }
                },
                "Neutral": {
                    male: {
                        mean: 11.7,
                        stdDev: 3.4
                    },
                    female: {
                        mean: 6.79,
                        stdDev: 1.97
                    }
                },
                "Supinated": {
                    male: {
                        mean: 11.7,
                        stdDev: 2.9
                    },
                    female: {
                        mean: 6.79,
                        stdDev: 1.68
                    }
                }
            },
            45: {
                "Pronated": {
                    male: {
                        mean: 12.1,
                        stdDev: 5
                    },
                    female: {
                        mean: 7.02,
                        stdDev: 2.9
                    }
                },
                "Neutral": {
                    male: {
                        mean: 13.5,
                        stdDev: 3
                    },
                    female: {
                        mean: 7.83,
                        stdDev: 1.74
                    }
                },
                "Supinated": {
                    male: {
                        mean: 13.3,
                        stdDev: 3.3
                    },
                    female: {
                        mean: 7.71,
                        stdDev: 1.91
                    }
                }
            },
            90: {
                "Pronated": {
                    male: {
                        mean: 11,
                        stdDev: 5.7
                    },
                    female: {
                        mean: 6.38,
                        stdDev: 3.31
                    }
                },
                "Neutral": {
                    male: {
                        mean: 12.8,
                        stdDev: 4.5
                    },
                    female: {
                        mean: 7.42,
                        stdDev: 2.61
                    }
                },
                "Supinated": {
                    male: {
                        mean: 13.1,
                        stdDev: 4
                    },
                    female: {
                        mean: 7.6,
                        stdDev: 2.32
                    }
                }
            },
            135: {
                "Pronated": {
                    male: {
                        mean: 9,
                        stdDev: 4.8
                    },
                    female: {
                        mean: 5.22,
                        stdDev: 2.78
                    }
                },
                "Neutral": {
                    male: {
                        mean: 11.8,
                        stdDev: 3.8
                    },
                    female: {
                        mean: 6.84,
                        stdDev: 2.2
                    }
                },
                "Supinated": {
                    male: {
                        mean: 11.7,
                        stdDev: 2.7
                    },
                    female: {
                        mean: 6.79,
                        stdDev: 1.57
                    }
                }
            }
        },
        "Supinating": {
            0: {
                "Pronated": {
                    male: {
                        mean: 14.5,
                        stdDev: 5
                    },
                    female: {
                        mean: 7.69,
                        stdDev: 2.65
                    }
                },
                "Neutral": {
                    male: {
                        mean: 11.6,
                        stdDev: 4.7
                    },
                    female: {
                        mean: 6.15,
                        stdDev: 2.49
                    }
                },
                "Supinated": {
                    male: {
                        mean: 11.2,
                        stdDev: 6.8
                    },
                    female: {
                        mean: 5.94,
                        stdDev: 3.6
                    }
                }
            },
            45: {
                "Pronated": {
                    male: {
                        mean: 15.8,
                        stdDev: 6.4
                    },
                    female: {
                        mean: 8.37,
                        stdDev: 3.39
                    }
                },
                "Neutral": {
                    male: {
                        mean: 14.3,
                        stdDev: 5.6
                    },
                    female: {
                        mean: 7.58,
                        stdDev: 2.97
                    }
                },
                "Supinated": {
                    male: {
                        mean: 13,
                        stdDev: 7.3
                    },
                    female: {
                        mean: 6.89,
                        stdDev: 3.87
                    }
                }
            },
            90: {
                "Pronated": {
                    male: {
                        mean: 15.5,
                        stdDev: 6.1
                    },
                    female: {
                        mean: 8.22,
                        stdDev: 3.23
                    }
                },
                "Neutral": {
                    male: {
                        mean: 15.7,
                        stdDev: 6.3
                    },
                    female: {
                        mean: 8.32,
                        stdDev: 3.34
                    }
                },
                "Supinated": {
                    male: {
                        mean: 13.3,
                        stdDev: 7.9
                    },
                    female: {
                        mean: 7.05,
                        stdDev: 4.19
                    }
                }
            },
            135: {
                "Pronated": {
                    male: {
                        mean: 16.2,
                        stdDev: 5.8
                    },
                    female: {
                        mean: 8.59,
                        stdDev: 3.07
                    }
                },
                "Neutral": {
                    male: {
                        mean: 13.8,
                        stdDev: 4.7
                    },
                    female: {
                        mean: 7.31,
                        stdDev: 2.49
                    }
                },
                "Supinated": {
                    male: {
                        mean: 10.9,
                        stdDev: 5.9
                    },
                    female: {
                        mean: 5.78,
                        stdDev: 3.13
                    }
                }
            }
        }
    },
    "Cylindrical Handle": {
        "Smooth": {
            "Outward": {
                "45": {
                    male: {
                        mean: 6.3,
                        stdDev: 2.3
                    },
                    female: {
                        mean: 2.3,
                        stdDev: 1.5
                    }
                },
                "58": {
                    male: {
                        mean: 5.3,
                        stdDev: 1.3
                    },
                    female: {
                        mean: 2.2,
                        stdDev: 1.5
                    }
                },
                "83": {
                    male: {
                        mean: 4.9,
                        stdDev: 2.1
                    },
                    female: {
                        mean: 2.4,
                        stdDev: 1.4
                    }
                }
            },
            "Inward": {
                "45": {
                    male: {
                        mean: 7,
                        stdDev: 2.7
                    },
                    female: {
                        mean: 2.9,
                        stdDev: 2.5
                    }
                },
                "58": {
                    male: {
                        mean: 7.2,
                        stdDev: 1.7
                    },
                    female: {
                        mean: 2.9,
                        stdDev: 2.5
                    }
                },
                "83": {
                    male: {
                        mean: 6,
                        stdDev: 1.9
                    },
                    female: {
                        mean: 2.3,
                        stdDev: 2
                    }
                }
            }
        },
        "Knurled": {
            "Outward": {
                "45": {
                    male: {
                        mean: 7.2,
                        stdDev: 2.6
                    },
                    female: {
                        mean: 2.6,
                        stdDev: 1.7
                    }
                },
                "58": {
                    male: {
                        mean: 6.1,
                        stdDev: 1.5
                    },
                    female: {
                        mean: 2.5,
                        stdDev: 1.7
                    }
                },
                "83": {
                    male: {
                        mean: 5.6,
                        stdDev: 2.4
                    },
                    female: {
                        mean: 2.8,
                        stdDev: 1.6
                    }
                }
            },
            "Inward": {
                "45": {
                    male: {
                        mean: 8.1,
                        stdDev: 3.1
                    },
                    female: {
                        mean: 3.3,
                        stdDev: 2.9
                    }
                },
                "58": {
                    male: {
                        mean: 8.3,
                        stdDev: 2
                    },
                    female: {
                        mean: 3.3,
                        stdDev: 2.9
                    }
                },
                "83": {
                    male: {
                        mean: 6.9,
                        stdDev: 2.2
                    },
                    female: {
                        mean: 2.6,
                        stdDev: 2.3
                    }
                }
            }
        }
    }
};

/*  PART 1: input ARRAY

    This section contains an array where you will enter the input array of tasks.

    These task objects will be similar to the objects used as input in module 1, with one
    important exception: 'attributes'.

    The attribute named 'attributes' corresponds to a array of Strings. Each string will
    contain the name of one attribute that the transform function will use to 
    navigate the handleTypes object to discover the appropriate mean and standard 
    deviation values.

    These objects should be copied over from the template.js file in this folder and
    then edited accordingly.
*/

const input = [
    {
        // This is the template for a force type that does not have any "attributes"
        name: "Task 1.1",
        handleType: "Key",
        attributes: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        // This is the template for a force type that does not have any "attributes"
        name: "Task 1.2",
        handleType: "Door Knob",
        attributes: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        // This is the template for a force type that does not have any "attributes"
        name: "Task 1.3",
        handleType: "Lever",
        attributes: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Both"
    },
    {
        // This is the template for a force type that does not have any "attributes"
        name: "Task 1.4",
        handleType: "Ridged Knob",
        attributes: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        // This is the template for a force type that does not have any "attributes"
        name: "Task 1.5",
        handleType: "Tap",
        attributes: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        // This is the template for a force type that does not have any "attributes"
        name: "Task 1.6",
        handleType: "Butterfly Nut",
        attributes: [],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Both"
    },
    {
        name: "Task 2",
        handleType: "L-Shaped",
        attributes: ["Pronating"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 3",
        handleType: "Jar Lid",
        attributes: ["Knurled", "65"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 4",
        handleType: "Round Knob",
        attributes: ["Smooth", "13"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Both"
    },
    {
        name: "Task 5",
        handleType: "Regular Screwdriver",
        attributes: ["Pronating", "Neutral"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    },
    {
        name: "Task 6",
        handleType: "Pistol Grip Screwdriver",
        attributes: ["Supinating", "Supinated"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Left"
    },
    {
        name: "Task 7",
        handleType: "T-Handle",
        attributes: ["Pronating", "135", "Pronated"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Both"
    },
    {
        name: "Task 8",
        handleType: "Cylindrical Handle",
        attributes: ["Smooth", "Outward", "58"],
        forceCount: 1,
        forceMagnitude: 1,
        forceDuration: 1,
        hand: "Right"
    }
];

/*  PART 2: transform FUNCTION

    The following section of code contains three functions:

        1. transform - This function takes the parameter 'input' and 
            returns the 'output' array which contains the task objects.

            How it works: it runs a 'for' loop, which iterates through each 
            object in the input array.  For each item, it calls the findValues function.

        2. findValues - This function navigates the handle type tree to find the task's
            appropriate set of mean and standard deviation values.
            It takes the parameters 'force' and 'attributes'.  Force refers to the remainder
            of the handleType tree starting at the current node.  Attributes parameter is 
            the remaining set of attribute strings contained within the 'attributes' object 
            inside of the current input object that the transform function is evaluating.

            How it works: It essentially checks to see if the attribute array (which contains
            the remaining attributes that have yet to be used to traverse the handle type tree)
            is empty. If not, it takes the first value in the array, uses it to drop down one
            level in the handle type tree, and then shifts it off of the attribute array.

            The attribute array is now one item smaller and our position on the handle
            type tree is one node lower.  This series of actions is performed recursively until
            we have exhausted all of the attributes in the input.  Once this has happened,
            we update the global variables associated with the male and female mean and standard
            deviations.

        3. makeOutput - This function serves to create the 'output' array of objects which will 
            be returned by the transform function and ultimately stored at 'const tasks'.
            Parameters include the index (current input object we are making a task for), 
            input (the full array of objects), and variables for each of the male and female
            mean and standard deviation values.

            This function returns an object for each 'task', which is pushed to the output array
            that is created in the transform function.
*/

function transform(input) {

    let output = new Array();

    for (let i = 0; i < input.length; i++) {

        maleMean = 0;
        maleStdDev = 0;
        femaleMean = 0;
        femaleStdDev = 0;
        
        findValues(handleType[input[i].handleType], input[i].attributes);
        output.push(makeOutput(i, input, maleMean, maleStdDev, femaleMean, femaleStdDev));

    };

    return output;
};

function findValues(force, attributes) {

    // let attributeArray = [];
    // attributeArray = attributes;

    // let attributeTemp = new Object()

    switch (force) {
        case 'Key':
            
            break
        case 'Jar Lid':
            break
        case '':
            break
        case '':
            break
        default:

    }


    
    // if (attributeArray.length > 0) {

    //     attributeTemp = attributeArray.shift();

    //     findValues(force[attributeTemp], attributeArray);

    // } else {

    //     maleMean = force.male.mean;
    //     maleStdDev = force.male.stdDev;
    //     femaleMean = force.female.mean;
    //     femaleStdDev = force.female.stdDev;
        
    // };
};

function makeOutput(index, input, maleMean, maleStdDev, femaleMean, femaleStdDev) {

    let output = new Object();

    output.Task = (index + 1);
    output.TaskName = input[index].name;
    output.Hand = input[index].hand;
    output.ForceType = input[index].handleType;
    output.ForceMagnitude = input[index].forceMagnitude;
    output.ForceCount = input[index].forceCount;
    output.ForceDuration = input[index].forceDuration;

    output.MaleMean = maleMean;
    output.MaleStdDev = maleStdDev;
    output.FemaleMean = femaleMean;
    output.FemaleStdDev = femaleStdDev;

    return output;

};

/*  PART 3: tasks ARRAY (storing the output)

    This part is the final thing that will need to be copied. It contains
    4 GLOBAL variables, one for each of the male and female mean and standard deviation values.

    Below the initialization of these 4 variables, we will create a 'const tasks' and store the 
    return value of the transform function there (just like in mod 1). This will create your tasks
    array, which will be used directly by your calculator.
*/

let maleMean;
let maleStdDev;
let femaleMean;
let femaleStdDev;

const tasks = transform(input);

/*  For my use only! Do not copy anything below this comment.
    The stuff below is purely for my use in testing the components above.
*/

console.log(tasks);