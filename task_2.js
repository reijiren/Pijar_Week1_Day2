function ratarata(bind, bing, mtk, ipa){
    if(bind === null || bind === undefined || bind < 0 || bind > 100){
        return console.log("Harap masukkan nilai Bahasa Indonesia antara 0 - 100!");
    }else if(bing === null || bing === undefined || bing < 0 || bing > 100){
        return console.log("Harap masukkan nilai Bahasa Inggris antara 0 - 100!");
    }else if(mtk === null || mtk === undefined || mtk < 0 || mtk > 100){
        return console.log("Harap masukkan nilai Matematika antara 0 - 100");
    }else if(ipa === null || ipa === undefined || ipa < 0 || ipa > 100){
        return console.log("Harap masukkan nilai IPA antara 0 - 100");
    }

    const avg = (bind + bing + mtk + ipa) / 4;
    console.log("Rata-rata : " + avg);

    let grade;

    if(avg >= 90){
        grade = "A";
    }else if(avg >= 80){
        grade = "B";
    }else if(avg >= 70){
        grade = "C";
    }else if(avg >= 60){
        grade = "D";
    }else{
        grade = "E";
    }

    return console.log("Grade    : " + grade);
}

ratarata(80,90,89,69);
ratarata(90,0,73,10);
ratarata(105,null,300,200);