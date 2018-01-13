import checkServices from './modules/checkServices.js';

function runChecker(){
    
    checkServices();

    setTimeout(runChecker, process.env.INTERVAL);
}

runChecker();