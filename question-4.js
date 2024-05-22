// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
//โครงสร้างข้อมูลเป็น Array[{Object}]
//ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
//ค้นหาปริมาณที่น้อยที่สุดใน  array
let minQuantityValue = Infinity;
let minQuantity = inventory.map((arr) => {
  // console.log(arr);
  if (minQuantityValue > arr.quantity) {
    minQuantityValue = arr.quantity;
  }
  return minQuantityValue;
});
// console.log(minQuantityValue);
// เก็บเป็น Oject,Array ใหม่เพื่อเรียกค่ามาแสดงผลลัพธ์
const minQuantityOfInventory = inventory.filter((arr) => {
  return arr.quantity <= minQuantityValue;
});
// console.log(minQuantityOfInventory);
//แสดลงผลลัพธ์ สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ <name> ซึ่งมี <quantity> ชิ้น
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantityOfInventory[0].name} ซึ่งมี ${minQuantityOfInventory[0].quantity} ชิ้น`
);
