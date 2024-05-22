// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
//โครงสร้างข้อมูลเป็น Array[{Object}]
//เพิ่ม To-do ใหม่ชื่อว่า "Walk the dog"
myTodo.push({ todo: "Walk the dog" });
// console.log(myTodo.length);
// console.log(myTodo);
//ให้แก้ไขชื่อ Todo ที่มี id เป็น 4 จาก "Wash dishes" เป็น "Go to the gym"
myTodo[3].todo = "Go to the gym";
// console.log(myTodo);
//ลบ To-do สุดท้ายที่อยู่ใน Array ออก
// console.log(myTodo.pop());
myTodo.pop();
// console.log(myTodo);
//ให้แสดงข้อความของ To-do ตัวสุดท้ายที่อยู่ในรายการออกมาบนหน้าจอ Console
console.log(myTodo[myTodo.length - 1]);
