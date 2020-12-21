process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})

// could slice argv becuase first 2 elements are not important
// 1 : node path 
// 2 : file path

// recommend the 'minimist library'