const { Paddle } = require('@paddle/paddle-node-sdk');

// Initialize Paddle
const paddle = new Paddle(process.env.PADDLE_API_KEY, {
  environment: 'sandbox' // Wichtig für Sandbox!
});

// Product mapping
const PADDLE_PRODUCTS = {
  'monthly': process.env.PADDLE_PRODUCT_MONTHLY,
  'yearly': process.env.PADDLE_PRODUCT_YEARLY,
  'monthly-pro': process.env.PADDLE_PRODUCT_MONTHLY_PRO,
  'yearly-pro': process.env.PADDLE_PRODUCT_YEARLY_PRO
};

// Create checkout URL
async function createCheckout(plan) {
  try {
    const productId = PADDLE_PRODUCTS[plan];
    
    if (!productId) {
      throw new Error('Invalid plan selected');
    }

    // Für Paddle Checkout Links
    const checkoutData = {
      items: [{
        product_id: productId,
        quantity: 1
      }]
    };

    // Generiere Checkout URL mit Client-side token
    const checkoutUrl = `https://sandbox-pay.paddle.com/checkout/custom/build?products=${productId}&client_token=${process.env.PADDLE_CLIENT_TOKEN}`;
    
    return {
      checkoutUrl: checkoutUrl,
      productId: productId
    };
  } catch (error) {
    console.error('Paddle checkout error:', error);
    throw error;
  }
}

// Webhook handler
async function handleWebhook(req, res) {
  try {
    const event = req.body;
    
    console.log('Paddle Webhook Event:', event.event_type);
    
    switch (event.event_type) {
      case 'transaction.completed':
        console.log('✅ Payment completed:', event.data);
        // Hier User erstellen/updaten
        break;
        
      case 'subscription.created':
        console.log('📝 Subscription created:', event.data);
        break;
        
      case 'subscription.updated':
        console.log('📝 Subscription updated:', event.data);
        break;
        
      default:
        console.log('Unhandled event:', event.event_type);
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createCheckout,
  handleWebhook,
  paddle
};