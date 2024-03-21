paypal.Buttons({
    createOrder: function(data, actions){
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10'
                }
            }]
        })
    },
    onApprove: function(data, actions){
        return actions.order.capture().then(function(details){
            alert("Transaction OK : "+details.payer.name.given_name);
        })
    },
    onError: function (err){
        console.error('Payment error :', err);
        alert("Payment failed !");
    }
}).render("#paypal-button-container");