const print23 = require('./kek');

function doSomeAsyncAction() {
    return new Promise(resolve => {
        setTimeout(() => resolve('HELLO WORLD'), 2000);
    });
}
    
function doSomeAsyncAction2(prevResult) {
    console.log('Prev result', prevResult)
    return new Promise(resolve => {
        setTimeout(() => resolve('HELLO STARS'), 1000);
    });
}

// console.log('Sending request 1');
// doSomeAsyncAction((response1) => {
//     console.log('Received response1:', response1);
//     console.log('Sending request 2');
//     doSomeAsyncAction2((response2) => {
//         console.log('Received response2:', response2);
//         doSomeAsyncAction2((response2) => {
//             console.log('Received response2:', response2);
//             doSomeAsyncAction2((response2) => {
//                 console.log('Received response2:', response2);
//                 doSomeAsyncAction2((response2) => {
//                     console.log('Received response2:', response2);
//                     doSomeAsyncAction2((response2) => {
//                         console.log('Received response2:', response2);
//                     })
//                 })
//             })
//         })
//     })
// });
doSomeAsyncAction()
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)
    .then(doSomeAsyncAction2)


// function example(a, b, c, d) {
//     console.log(c, d);
// }

// example(6, 2, 9);