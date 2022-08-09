
//function  that uses a parameter 
function introduction(name)
{ 
    return `Hi, my name is ${name}.`;

}

// function that uses two parameters 

function  introductionWithLanguage(name, language) 
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// function that uses optional parameter 

function  introductionWithLanguageOptional(name, language = "JavaScript")
{
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

