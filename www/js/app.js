// Define the `phonecatApp` module
var WMCWebApp = angular.module('WMCWebApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
WMCWebApp.controller('WMCHomeController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

  $scope.homePageData = {
    heading1 : "WMC Autotrade",
    heading12 : "Company",
    caption1 : "WMC Auto Trade LLC is involved in worldwide buying and selling of brand new and pre-owned vehicles including Passenger Cars, SUV’s, Commercial Vehicles, Trucks and Buses Etc",
    banner_img1 : "img/banner/banner1.jpeg", 
    heading2 : "Services",
    heading22 : "Offered",
    caption2 : "With highly experienced and committed team of professionals is achieving new heights year after year. The car marques handled by the company include well-known names as Mercedes-Benz, Lexus, Toyota, Honda, Mitsubishi, Nissan, Hyundai, etc.",
    banner_img2 : "img/banner/banner2.jpg", 
    services : [
      {
        service_heading : "Trust worthy",
        service_description : "We are a brand you can trust",
        service_img : "img/features/f-icon1.png"
      }, {
        service_heading : "Logistics",
        service_description : "Land, Air and Sea transportation",
        service_img : "img/features/f-icon2.png"
      }, {
        service_heading : "Dedicated Customer Support",
        service_description : "Super responsive customer services",
        service_img : "img/features/f-icon3.png"
      }, {
        service_heading : "Easy Payment Options",
        service_description : "We facilitate reliable payments",
        service_img : "img/features/f-icon4.png"
      }      
    ],
    exclusive_stocks : [
      {
        car_name : "Lexus LX 450 Royal D",
        car_field1 : "4.5L Diesel",
        car_field2 : "EURO4 - 6 Speed",
        car_img : "img/product/ex1.jpg"
      },
      {
        car_name : "TOYOTA HILUX PICKUP",
        car_field1 : "2.8L DIESEL",
        car_field2 : "4WD AT-REVO",
        car_img : "img/product/ex2.jpg"
      },
      {
        car_name : "Mercedes Benz G63 AMG",
        car_field1 : "4L V8",
        car_field2 : "9 Speed Automatic",
        car_img : "img/product/ex3.jpeg"
      },
      {
        car_name : "Toyota Hiace DX",
        car_field1 : "2755CC Diesel",
        car_field2 : "6 Speed  A/T",
        car_img : "img/product/ex4.jpg"
      },
      {
        car_name : "Toyota Hiace DX",
        car_field1 : "4.5 L Diesel",
        car_field2 : "EURO4 - 6 Speed",
        car_img : "img/product/ex5.jpg"
      },
      {
        car_name : "Toyota Hilux 4X4",
        car_field1 : "164 HP/5200 RPM",
        car_field2 : "6 Speed A/T",
        car_img : "img/product/ex6.jpg"
      },
      {
        car_name : "Toyota Land Cruiser",
        car_field1 : "4.5 L Diesel",
        car_field2 : "6 Speed AT",
        car_img : "img/product/ex7.jpg"
      },
      {
        car_name : "Toyota Prado TXL",
        car_field1 : "3000CC Diesel",
        car_field2 : "6 Speed AT",
        car_img : "img/product/ex8.jpg"
      }
    ]
    ,
    latest_stocks : [
      {
        car_name : "Lexus LX 450 Royal D",
        car_field1 : "4.5L Diesel",
        car_field2 : "EURO4 - 6 Speed",
        car_img : "img/product/ex1.jpg"
      },
      {
        car_name : "TOYOTA HILUX PICKUP",
        car_field1 : "2.8L DIESEL",
        car_field2 : "4WD AT-REVO",
        car_img : "img/product/ex2.jpg"
      },
      {
        car_name : "Mercedes Benz G63 AMG",
        car_field1 : "4L V8",
        car_field2 : "9 Speed Automatic",
        car_img : "img/product/ex3.jpeg"
      },
      {
        car_name : "Toyota Hiace DX",
        car_field1 : "2755CC Diesel",
        car_field2 : "6 Speed  A/T",
        car_img : "img/product/ex4.jpg"
      },
      {
        car_name : "Toyota Hiace DX",
        car_field1 : "2.7 L Diesel",
        car_field2 : "EURO4 - 6 Speed",
        car_img : "img/product/ex5.jpg"
      },
      {
        car_name : "Toyota Hilux 4X4",
        car_field1 : "164 HP/5200 RPM",
        car_field2 : "6 Speed A/T",
        car_img : "img/product/ex6.jpg"
      },
      {
        car_name : "Toyota Land Cruiser",
        car_field1 : "4.5 L Diesel",
        car_field2 : "6 Speed AT",
        car_img : "img/product/ex7.jpg"
      },
      {
        car_name : "Toyota Prado TXL",
        car_field1 : "3000CC Diesel",
        car_field2 : "6 Speed AT",
        car_img : "img/product/ex8.jpg"
      }
    ]
  };

  $scope.exclusiveStocks = {

  };

});

WMCWebApp.controller('WMCCategoryController', function PhoneListController($scope) {

  $scope.homePageData = {
    exclusive_stocks : [
      {
        car_name : "Lexus LX 450 Royal D",
        car_field1 : "4.5L Diesel",
        car_field2 : "EURO4 - 6 Speed",
        car_img : "img/product/ex1.jpg"
      },
      {
        car_name : "TOYOTA HILUX PICKUP",
        car_field1 : "2.8L DIESEL",
        car_field2 : "4WD AT-REVO",
        car_img : "img/product/ex2.jpg"
      },
      {
        car_name : "Mercedes Benz G63 AMG",
        car_field1 : "4L V8",
        car_field2 : "9 Speed Automatic",
        car_img : "img/product/ex3.jpeg"
      },
      {
        car_name : "Toyota Hiace DX",
        car_field1 : "2755CC Diesel",
        car_field2 : "6 Speed  A/T",
        car_img : "img/product/ex4.jpg"
      },
      {
        car_name : "Toyota Hiace DX",
        car_field1 : "4.5 L Diesel",
        car_field2 : "EURO4 - 6 Speed",
        car_img : "img/product/ex5.jpg"
      },
      {
        car_name : "Toyota Hilux 4X4",
        car_field1 : "164 HP/5200 RPM",
        car_field2 : "6 Speed A/T",
        car_img : "img/product/ex6.jpg"
      }
    ]
    ,
    latest_stocks : [
      {
        car_name : "Lexus LX 450 Royal D",
        car_field1 : "4.5L Diesel",
        car_field2 : "EURO4 - 6 Speed",
        car_img : "img/product/ex1.jpg"
      },
      {
        car_name : "TOYOTA HILUX PICKUP",
        car_field1 : "2.8L DIESEL",
        car_field2 : "4WD AT-REVO",
        car_img : "img/product/ex2.jpg"
      },
      {
        car_name : "Mercedes Benz G63 AMG",
        car_field1 : "4L V8",
        car_field2 : "9 Speed Automatic",
        car_img : "img/product/ex3.jpeg"
      },
      {
        car_name : "Toyota Hiace DX",
        car_field1 : "2755CC Diesel",
        car_field2 : "6 Speed  A/T",
        car_img : "img/product/ex4.jpg"
      },
      {
        car_name : "Toyota Hiace DX",
        car_field1 : "4.5 L Diesel",
        car_field2 : "EURO4 - 6 Speed",
        car_img : "img/product/ex5.jpg"
      },
      {
        car_name : "Toyota Hilux 4X4",
        car_field1 : "164 HP/5200 RPM",
        car_field2 : "6 Speed A/T",
        car_img : "img/product/ex6.jpg"
      },
      {
        car_name : "Toyota Land Cruiser",
        car_field1 : "4.5 L Diesel",
        car_field2 : "6 Speed AT",
        car_img : "img/product/ex7.jpg"
      },
      {
        car_name : "Toyota Prado TXL",
        car_field1 : "3000CC Diesel",
        car_field2 : "6 Speed AT",
        car_img : "img/product/ex8.jpg"
      }
    ]
  };

  $scope.exclusiveStocks = {

  };

});