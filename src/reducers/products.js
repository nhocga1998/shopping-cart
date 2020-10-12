var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://didongmoi.com.vn/site/pictures/products/iphone-x-cu-(2).jpg',
        description: "Sản phẩm do Apple sản xuất",
        price: 800,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Blackberry Evole X',
        image: 'https://product.hstatic.net/1000238589/product/blackberry-evolve-black-600x600_80a22e990f4f4e6ca54d370e27ec5b46_large.jpg',
        description: "Sản phẩm do Blackberry sản xuất",
        price: 600,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Samsung galaxy S8',
        image: 'https://viostore.vn/wp-content/uploads/2017/06/galaxys8frontbackaam.jpg',
        description: "Sản phẩm do Samsung sản xuất",
        price: 700,
        inventory: 12,
        rating: 4
    }
]

const products = (state = initialState, action) => {
    switch(action.type){
        default:
            return [...state];
    }
}

export default products;