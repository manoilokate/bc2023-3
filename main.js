const fs=require("node:fs");

let result = " ";

fs.readFile("data.json", (err, data) => {
    if(err){
        console.log("error",err);
        return;
    } 
    try{
        const obj=JSON.parse(data);
        for(x of obj){
            if(x.ku==13 && x.value>5){
                result+=x.value.toString();
                result+="\n";
            }
        }
    }
    catch(err){
        console.log("error",err);
        return;
    }
    fs.writeFile("data2.txt",result,(err)=>{
        if(err){
            console.log("error",err);
        }
        else{
            console.log("The file has been saved!");
        }
    });
    
});