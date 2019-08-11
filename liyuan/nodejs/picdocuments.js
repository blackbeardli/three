//正方
function zf(t,c,h){
    var t;
    var c;
    var h;
    var res="";
    //实
    if(t==1){
        for(var i=0;i<h;i++){
            for(var j=0;j<h;j++){
                res+=c+" ";
            }
            res+="\n";
        }
        console.log(res);
    }
    //空
    else{
        for(var i=0;i<h;i++){
            if(i==0 || i==h-1){
                for(var j=0;j<h;j++){
                    res+=c+" ";
                }
                res+="\n";
            }else{
                for(var j=0;j<h;j++){
                    if(j==0 || j==h-1){
                        res+=c+" ";
                    }else{
                        res+="  ";
                    }
                }
                   res+="\n";
            }

        }
        console.log(res);
    }
}
//三角
function sj(t,c,h){
    var t;
    var c;
    var h;
    var res="";

    if(t==1){
        for(var i=1;i<=h;i++){
            for(var j=1;j<=h-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                res+=c+" ";
            }
            res+="\n";
        }
        console.log(res);
    }

    else{
        for(var i=1;i<=h;i++){
            for(var j=1;j<=h-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                if(z==1 || z==(2*i-1) || i==h){
                    res+=c+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        console.log(res);
    }
}
//菱形
function li(t,c,h) {
    var t;
    var c;
    var h;
    var res = "";

    if (t == 1) {

        for(var i=1;i<=h;i++){
            for(var j=1;j<=h-i;j++){
                res+="  ";
            }
            for(var k=1;k<=(2*i-1);k++){
                res+=c+" ";
            }
            res+="\n";
        }
        for(var i=h-1;i>=1;i--){
            for(var j=1;j<=h-i;j++){
                res+="  ";
            }
            for(var k=1;k<=(2*i-1);k++){
                res+=c+" ";
            }
            res+="\n";
        }
        console.log(res);
    }

    else{
        for(var i=1;i<=h;i++){
            for(var j=1;j<=h-i;j++){
                res+="  ";
            }
            for(var k=1;k<=(2*i-1);k++){
                if(k==1 || k==(2*i-1)){
                    res+=c+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        for(var i=h-1;i>=1;i--){
            for(var j=1;j<=h-i;j++){
                res+="  ";
            }
            for(var k=1;k<=(2*i-1);k++){
                if(k==1 || k==(2*i-1)){
                    res+=c+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        console.log(res);
    }
}
//回
function hui(c,h){
    var c;
    var h;
    var res="";
    for(var i=1;i<=h;i++){
        for(var j=1;j<=h;j++){
            if(i==1 || i==h ||j==1||j==h){
                res+=c+" ";
            }
            else if(i==3 && j>=3 && j<=h-2){
                res+=c+" ";
            }
            else if(i==h-2 && j>=3 && j<=h-2){
                res+=c+" ";
            }
            else if(j==3 && i>=3 && i<=h-2){
                res+=c+" ";
            }
            else if(j==h-2 && i>=3 && i<=h-2){
                res+=c+" ";
            }
            else{
                res+="  ";
            }
        }
        res+="\n";
    }
    console.log(res);
}
//梯形
function ti(t,c,w,h){
    var t;
    var c;
    var w;
    var h;
    var res="";

    if(t==1){
        for(var i=1;i<=h;i++){

            for(var j=1;j<=h-i;j++){
                res+="  ";
            }

            for(var j=1;j<=w+2*(i-1);j++){
                res+=c+" ";
            }
            res+="\n";
        }
        console.log(res);
    }

    else{
        for(var i=1;i<=h;i++) {

            for (var j = 1; j <= h - i; j++) {
                res += "  ";
            }

            for(var j=1;j<=w+2*(i-1);j++){
                if(i==1 ||i==h||j==1||j==w+2*(i-1)){
                    res+=c+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        console.log(res);
    }
}
//正方形
//zf(0,'*',4);
//zf(1,'#',4);

//三角形
//sj(0,'#',4);
//sj(1,'*',5);

//菱形
//li(0,'#',4);
//li(1,'#',2);

//回字
//hui('-',6);

//梯形
//ti(0,'@',3,5);
//ti(1,'#',4,4);