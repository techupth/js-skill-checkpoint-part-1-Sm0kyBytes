// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนฟังก์ชันชื่อ calculateTotalPrice ที่รับ products และ promotionCode เป็น Argument
function calculateTotalPrice(products, promotionCode) {
  let totalPrice = products.reduce((acc, curr) => {
    // console.log(curr.price);
    // console.log(curr.quantity);
    return (acc += curr.price * curr.quantity);
  }, 0);
  // console.log(totalPrice);
  switch (promotionCode) {
    case "SALE20":
      return totalPrice * 0.8; //ลด 20% จากมูลค่ารวมของสินค้าในตะกร้า
    case "SALE50":
      return totalPrice * 0.5; //ลด 50% จากมูลค่ารวมของสินค้าในตะกร้า
    default:
      return totalPrice * 1; //ไม่ได้รับส่วนลด
  }
}

console.log(calculateTotalPrice(products, promotionCode));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));
