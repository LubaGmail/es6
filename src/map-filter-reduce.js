const App = function() {

    this.products = [
        {
            name: 'iPad',
            price: 200.00
        }, {
            name: 'iPhone',
            price: 350.00
        }, {
            name: 'laptop',
            price: 1200.01
        }, {
            name: 'desktop',
            price: 700
        }
    ];

    //
    // map
    //

    // app.getProductNames()
    this.getProductNames = () => {
       let productNames = this.products.map(p => p.name);
       return productNames;
    }

    this.getProductPrices = () => {
        let productPrices = this.products.map(p => p.price);
        return productPrices;
    }

    //
    // filter
    //

    //app.doFilter('p')
    this.doFilter = (searchStr) => {
        //let filteredProducts = this.products.filter(p => p.name === searchStr);
        let filteredProducts = this.products.filter(p => p.name.indexOf(searchStr) !== -1);
        return filteredProducts;
    }

    //
    // reduce
    //

    this.getTotalPrice = (n) => { 
        let totalPrice = this.products.reduce((sum, p) => sum + p.price, n);
        return totalPrice;
    }

    //
    // forEach
    //

    this.forEachExample = () => {
        let newProducts = [];
        this.products.forEach(p => {
            newProducts.push({name: p.name, price: 'TBD'});
        });
        return newProducts;
    }
}

const app = new App();
//console.log("app", app);
//console.log(app.doFilter('p'));
//console.log(app.getTotalPrice(0));
console.log(app.forEachExample());

