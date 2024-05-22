// Question #3
let userPassword = ""; //"Weak"

// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนฟังก์ชัน checkPasswordStrength
//- ซึ่งรับ userPassword เป็น Argument
//- และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไข
function checkPasswordStrength(inputUserPassword) {
  //   console.log(inputUserPassword);
  //   console.log(inputUserPassword.length);
  switch (true) {
    case inputUserPassword.length > 10: // มากกว่า 10
      return "Strong";
    case inputUserPassword.length <= 10 && inputUserPassword.length >= 6: // ตั้งแต่ 6 จนถึง 10
      return "Medium";

    default: // อื่น ๆ เช่น น้อยกว่า 6
      return "Weak";
  }
}
console.log(checkPasswordStrength(userPassword)); //"Weak"
console.log(checkPasswordStrength("swnalWadqQ")); //**มีแค่ 10 ตัว เป็น "Medium"
console.log(checkPasswordStrength("swnalWadqQ1")); //มีแค่ 11 ตัว เป็น "Strong"
console.log(checkPasswordStrength("TechUp")); //"Medium"
console.log(checkPasswordStrength("abcde")); //"Weak"
