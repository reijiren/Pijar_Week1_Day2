const printSegitiga = 5;

if(typeof printSegitiga == "number"){
    for(let i = 0; i < printSegitiga; i++){
        for(let j = 0; j < (printSegitiga - i); j++){
            process.stdout.write("" + (j + 1));
        }
        console.log();
    }
}else{
    console.log("Harap masukkan angka");
}