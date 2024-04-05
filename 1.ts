let car: boolean = false; 
car = true;

///получилось,потому что  true соответствует типу boolean//

let one:number=1;
one=2;


///получилось,потому что цифра соответствует типу number///


let person: string = "ellis";
person = "lili"

///получилось,потому что слово соответствует типу string///


const n:undefined=undefined;
const m:null=null;

n=null;
m=undefined;

///не получилось,потому что значения не  соответствует типам///

const user=():void=>{
    alert("hello!")
}

///void означает отсутствие возвращения,поэтому  return не работает///