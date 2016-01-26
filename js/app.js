(function(){
    var app = angular.module('ecom',[]);
    app.controller = ('storeController', function(){
       this.products = gems;
    });
    var gems = [
        {
            name = 'Big box',
            price = '2.55',
            description = 'This is a sale of big box',
            addPurchase = true,
            soldOut = false
        },
        {
            name = 'Big box 1 ltr',
            price = '4.55',
            description = 'This is a sale of big box',
            addPurchase = true,
            soldOut = false
        }
    ];
})();
