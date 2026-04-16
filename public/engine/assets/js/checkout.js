
function checkOut(list){
  reDirect={hash:sha256(JSON.stringify(_lz.ecommerce.cart))}
  if(list.total<2){
    showDialog('procurement.png',`Unable to process checkout, because your total procurement is below <span class=font-weight-bold>$2.00</span> minimum.`,'','Dismiss')
  }else if(list.total>0){
    showMobileScreen()
    $('#mobilescreen').html(`
      <div class="dialogBack" style="height:100vh;overflow-y:scroll;background-color:#1BAFFF">
        <img src="assets/images/cancel.png"
          onClick="closeMobileScreen()"
          onMouseOver="this.style.transform='scale(1.1)'"
          onMouseOut="this.style.transform='scale(1)'"
          style="position:absolute;padding:14px;cursor:pointer;z-index:2"/>
        <div style="display:flex;justify-content:center;width:100%">
          <h2 style="color:white;text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;">Pay $`+iCommas(list.total)+`</h2>
        </div>
        <div style="display:flex;justify-content:center;width:100%;overflow:hidden">
          <div id="smart-button-container">
            <div style="text-align: center;">
              <div id="paypal-button-container"></div>
            </div>
          </div>
          <script src="https://www.paypal.com/sdk/js?client-id=`+deSuStr(imageButton())+`&enable-funding=venmo&currency=USD" data-sdk-integration-source="button-factory"></script>
          <script>
            function initPayPalButton() {
              paypal.Buttons({
                style: {
                  shape: 'pill',
                  color: 'blue',
                  layout: 'vertical',
                  label: 'paypal',
                },
                createOrder: function(data, actions) {
                  return actions.order.create({
                    purchase_units: [{"description":"Checkout","amount":{"currency_code":"USD","value":`+list.total+`}}],
                    application_context: {
                      shipping_preference: 'NO_SHIPPING'
                    }
                  });
                },
                onApprove: function(data, actions) {
                  return actions.order.capture().then(function(orderData) {
                    // Full available details
                    console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                    // Show a success message within this page, e.g.
                    const element = document.getElementById('paypal-button-container');
                    element.innerHTML = '';
                    element.innerHTML = '<h3>Thank you for your payment!</h3>';
                    // Or go to another URL:
                    actions.redirect('#payment='+reDirect.hash);

                  });
                },
                onError: function(err) {
                  console.log(err);
                }
              }).render('#paypal-button-container');
            }
          </script>
        </div>
      </div>`)
    setTimeout(initPayPalButton,1200)
    $('#mobilescreen').fadeIn('slow')
  }
}
