// program to get the file extension

function getFileExtension(filename){

    // get file extension
    const extension = filename.split('.').pop();
    return extension;
}

// passing the filename

const result1 = getFileExtension('module.js');
console.log(result1);