// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
//โครงสร้างข้อมูลเป็น Array[{Object}]
//ให้แก้ไขจำนวนสินค้า “Apple” จาก 100 เป็น 200
inventory[0].quantity = 200;
// console.log(inventory);
//เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.push({ name: "Orange", price: 20, quantity: 300 });
// console.log(inventory);
//ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
//loop operation
// let totalPrice = 0;
// for (let i = 0; i < inventory.length; i++) {
//   // console.log(i);
//   totalPrice += inventory[i].price * inventory[i].quantity;
// }

//์์Built-in operation
// console.log(inventory);
let totalPrice = inventory.reduce((acc, curr) => {
  // console.log(curr.price);
  // console.log(curr.quantity);
  return (acc += curr.price * curr.quantity);
}, 0);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice} บาท`);
