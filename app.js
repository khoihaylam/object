let danhsach={

    ten:"tran dang khoi",
    tuoi:19,
    diachi:"pham hong thai",
    sodienthoai:19001847,

};
for (const key in danhsach) {
    
console.log(` ${key}:${danhsach[key]}`)
}
// bai 2
let student={
    id:1,
    name:"nguyen van A",
    gender:"nam",
    age:20,
    mark:8,

};
let students=[]
students.push(student)
console.log(students)
let students2={
    id:2,
    name:"dao anh huy",
    gender:"nam",
    age:20,
    mark:10,

};
students.push(students2)
 console.log(students2)

// bai 3
for(let i=0;i<students.length;i++){
    max=students[0].mark
    if(students[i].mark>max){
        max=students[i].mark
    }
}
let findindex=students.findIndex((element)=>element.mark==max)
console.log(findindex)
console.log(students[findindex])
// bai 4
let newstudent2={
    id:3,
    name:"le y lan",
    gender:"nu",
    age:20,
    mark:9,
}
students.push(newstudent2)
console.log(students)
let sum=0
for (let i=0;i<students.length;i++){
    sum=sum+students[i].mark
}
let tong=sum/students.length
console.log(tong)
if(tong>7.5){
    console.log("do la lop kha")
}
else if(5<=tong<=7.5){
    console.log("danh gia lop trung binh")
}
else{
    console.log("lop yeu")
}