let order = [];
        let total = 0;
        const totalElement = document.getElementById('total');
        const orderList = document.getElementById('order-list');

        function addToOrder(item) {
            const price = getPrice(item);
            order.push({ item, price });
            updateOrderList();
            total += price;
            updateTotal();
        }

        function updateOrderList() {
            orderList.innerHTML = '';
            order.forEach(orderItem => {
                const listItem = document.createElement('li');
                listItem.textContent = `${orderItem.item} - $${orderItem.price.toFixed(2)}`;
                orderList.appendChild(listItem);
            });
        }

        function updateTotal() {
            totalElement.textContent = total.toFixed(2);
        }

        function getPrice(item) {
            switch (item) {
                case 'Espresso':
                    return 2.00;
                case 'Cappuccino':
                    return 3.50;
                case 'Latte':
                    return 3.00;
                case 'Mocha':
                    return 4.00;
                default:
                    return 0.00;
            }
        }

        function placeOrder() {
            alert(`Order Placed!\nTotal: $${total.toFixed(2)}`);
            order = [];
            total = 0;
            updateOrderList();
            updateTotal();






            



            
        }