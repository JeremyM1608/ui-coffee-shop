import img1 from '@/../public/images/customerImage/hazelnut2.png';
import img2 from '@/../public/images/customerImage/chickenwings.png';

export const Orders = [
    {
        client_name:"Zulaikha",
        client_delivery_method:"Dine in",
        client_table:"4",
        client_order:[
            {
            order_img: img2,
            order_name:"Chicken wings",
            order_price:30000,
            order_qty:2
            },
            {
            order_img: img1,
            order_name:"Hazelnut latte",
            order_size:"reguler",
            order_price:27000,
            order_qty:1
            },
        ]
    },
    {
        client_name:"kumardi",
        client_delivery_method:"Take away",
        client_order:[
            {
            order_img: img2,
            order_name:"Chicken wings",
            order_price:30000,
            order_qty:2
            },
            {
            order_img: img1,
            order_name:"Hazelnut latte",
            order_size:"reguler",
            order_price:27000,
            order_qty:1
            },
        ]
    },
    {
        client_name:"zendes",
        client_delivery_method:"Home Delivery",
        client_address:"Jl Ngesong Dukuh Kupang I 21, Jawa Timur",
        client_order:[
            {
            order_img: img2,
            order_name:"Chicken wings",
            order_price:30000,
            order_qty:2
            },
            {
            order_img: img1,
            order_name:"Hazelnut latte",
            order_size:"reguler",
            order_price:27000,
            order_qty:1
            },
        ]
    },
]