class Order {
    #state;

    setState(state) {
        this.#state = state;
    }

    cancelOrder() {
        this.#state.cancelOrder();
    }

    requestReturn() {
        this.#state.requestReturn();
    }
}

class OrderProcessingState {
    cancelOrder() {
        console.log("Order cannot be canceled at this stage.");
    }

    requestReturn() {
        console.log("Return requested.");
    }
}

class OrderShippedState {
    cancelOrder() {
        console.log("Order cannot be canceled after shipment.");
    }

    requestReturn() {
        console.log("Return requested.");
    }
}

const order = new Order();
order.setState(new OrderProcessingState());
order.cancelOrder();

order.setState(new OrderShippedState());
order.requestReturn();
