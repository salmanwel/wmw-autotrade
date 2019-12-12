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
    heading : "WMC Autotrade",
    heading2 : "Company",
    caption : "Section 1.1. Home Page - Has some intro details about the company Need data from the WMC folks which can be added here. This is in Home page",
    services : [
      {
        service_heading : "Trust worthy",
        service_description : "We are a brand you can trust",
        service_img : "img/features/f-icon1.png"
      }, {
        service_heading : "Best Price",
        service_description : "Competitive price for your purchase",
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
    ]
  };

  $scope.exclusiveStocks = {

  };

});