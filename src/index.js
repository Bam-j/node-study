const {getSum} = require('./getSum');

const useModule = () => {
    const x = 1;
    const y = 5;

    require('./getSum');

    console.log(getSum(x, y));
}

useModule();