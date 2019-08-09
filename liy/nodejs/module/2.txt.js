if(typeof(widow) === 'undefined'){
    //如果没有window对象的类型，那么就处于node环境下。
    console.log('node.js')
}else{
    console.log('browser');
}