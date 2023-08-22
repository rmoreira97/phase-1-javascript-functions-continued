// code your solution here
// code your solution here
function saturdayFun(activity) {
    // check if activity is defined
    if (activity === undefined) {
        activity = "roller-skate";
    }
    
    
    return "This Saturday, I want to " + activity + "!" ;
    
    }   
    
    function mondayWork(activity) { 
        if (activity === undefined) {
            activity = "go to the office";
        }
        return "This Monday, I will " + activity + ".";
    }
    
    
    function wrapAdjective(flair = "*") {
        return function(adjective = "special") {
            return `You are ${flair}${adjective}${flair}!`
        }
    }
    
    const encouragingPromptFunction = wrapAdjective("!!!")