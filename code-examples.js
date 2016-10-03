
// Javascript is single threaded and blocks 
// the browser

document.addEventListener('scroll', foo)

input.addEventListener('change', function(){
  processComplexThing()
})


// Web Workers


var worker = new Worker('complex-task.js')

worker.postMessage('what-was-the-question?')
worker.addEventListener('message', m => {
 console.log('ok')
})

//
