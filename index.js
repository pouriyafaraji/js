// @flow
// تحلیل نحوی و دستور زبانی (Syntax and Grammar)
function calculateArea(width, height) {
    if (width > 0 && height > 0) // پرانتز باز اضافی
      return width * height;
    } // پرانتز اضافه
  
  
  // تحلیل جریان داده (Data Flow Analysis) و مقدار دهی اولیه (Initialization)
  function processData(input) {
    let result; // مقداردهی اولیه انجام نشده
    if (input > 10) {
      result = input * 2;
    }
    return result + 5; // استفاده از result قبل از مقداردهی در همه حالات
  }
  
  // کنترل جریان (Control Flow)
  function checkValue(value) {
    if (value > 10) {
      return true;
    } else if (value < 5) {
      return false;
    } // حالت value بین 5 و 10 مدیریت نشده، ممکن است منجر به return نشدن شود
  }
  
  // وابستگی های داده ای و متغیرها (Data and Variable Dependencies) و تداخل متغیرها (Variable Interference)
  let globalVar = 20;
  
  function modifyGlobal(input) {
    globalVar = input + 10;
    return globalVar;
  }
  
  function anotherFunction(input) {
    let globalVar = 5; // تداخل متغیر: متغیر محلی با نام مشابه متغیر سراسری
    return globalVar + input;
  }
  
  // ساختار کنترل (Control Structure) و توالی دستورات (Order of Statements)
  function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
    sum = 100; // این خط هیچ وقت اجرا نمی شود
  }
  
  // انتزاعی و معنایی (Abstraction and Semantics) و انتشار مقدار (Value Propagation)
  function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0; // در صورت خالی بودن آرایه، مقدار 0 برگردانده می شود، اما شاید بهتر باشد NaN برگردانده شود
    }
    let sum = calculateSum(arr);
    return sum / arr.length;
  }
  
  // نشتی حافظه (Memory Leak) (شبیه سازی) و استفاده از منابع (Resource Usage)
  let largeArray = [];
  function createLargeArray() {
    for (let i = 0; i < 1000000; i++) {
      largeArray.push(i); // largeArray در اینجا به طور مداوم بزرگ می شود و ممکن است نشتی حافظه ایجاد کند (بسته به نحوه مدیریت حافظه JS)
    }
  }
  
  // وابستگی های منطقی (Logical Dependencies) و رفتار اجزا برنامه (Component Behavior)
  function checkStatus(statusCode) {
    if (statusCode == 200) {
      return "Success";
    } else if (statusCode == 404) {
      return "Not Found";
    } else {
      // اگر وضعیت های دیگری هم وجود داشته باشد، مدیریت نشده است
      return "Unknown";
    }
  }
  
  // فراخوانی توابع برای ایجاد خطاها
  console.log("Area:", calculateArea(5, 10));
  console.log("Process Data:", processData(15));
  console.log("Check Value:", checkValue(7));
  console.log("Modify Global:", modifyGlobal(5));
  console.log("Another Function:", anotherFunction(5));
  console.log("Calculate Sum:", calculateSum([1, 2, 3, 4]));
  console.log("Calculate Average:", calculateAverage([1, 2, 3, 4]));
  createLargeArray();
  console.log("Check Status:", checkStatus(500));
  