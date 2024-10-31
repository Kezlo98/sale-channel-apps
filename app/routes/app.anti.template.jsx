import {authenticate} from "../shopify.server.js";
import {json} from "@remix-run/node";
import {APpIndex} from "./app._index.jsx";
import {Box, Page} from "@shopify/polaris";
import {data} from "@remix-run/react";

export const loader = async ({ request }) => {
  // await authenticate.admin(request);

  return new Response(
    HTML_2(),
    {
      headers: {
        "Content-Type": "application/liquid"
      }
    }
  );
};

function Polaris(){
  return (
    <Page>
      <Box>
        <div>Hahaha</div>
      </Box>
    </Page>
  )
}

function liquid(product) {
  return (
    `{% assign products = "Product 1, Product 2, Product 3" | split: ", " %}
{% for product_title in products %}
  <div class="product">
    <h2>{{ product_title }}</h2>
    <!-- Simulate other product attributes as needed -->
  </div>
{% endfor %}`
  )
}

function HTML() {
  return(
    '<div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">'
    + '    <div style="display: flex; align-items: center; border-bottom: 1px solid #ddd; padding: 15px 0;">'
    + '        <img src="product1.jpg" alt="Product 1" style="max-width: 100px; margin-right: 20px; border-radius: 8px;">'
    + '        <div style="flex: 1;">'
    + '            <p style="font-size: 1.2em; margin: 0;">Product 1</p>'
    + '            <p style="color: #555; margin: 5px 0;">A brief description of Product 1.</p>'
    + '            <p style="font-weight: bold; color: #333;">$19.99</p>'
    + '        </div>'
    + '    </div>'
    + '    <div style="display: flex; align-items: center; border-bottom: 1px solid #ddd; padding: 15px 0;">'
    + '        <img src="product2.jpg" alt="Product 2" style="max-width: 100px; margin-right: 20px; border-radius: 8px;">'
    + '        <div style="flex: 1;">'
    + '            <p style="font-size: 1.2em; margin: 0;">Product 2</p>'
    + '            <p style="color: #555; margin: 5px 0;">A brief description of Product 2.</p>'
    + '            <p style="font-weight: bold; color: #333;">$29.99</p>'
    + '        </div>'
    + '    </div>'
    + '    <!-- Repeat this structure for more products -->'
    + '</div>'
  );
}

function HTML_2() {
  return (
    `<div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
    <div style="display: flex; align-items: center; border-bottom: 1px solid #ddd; padding: 15px 0;">
        <img src="product1.jpg" alt="Product 1" style="max-width: 100px; margin-right: 20px; border-radius: 8px;">
        <div style="flex: 1;">
            <p style="font-size: 1.2em; margin: 0;">Product 1</p>
            <p style="color: #555; margin: 5px 0;">A brief description of Product 1.</p>
            <p style="font-weight: bold; color: #333;">$19.99</p>
        </div>
    </div>
    <div style="display: flex; align-items: center; border-bottom: 1px solid #ddd; padding: 15px 0;">
        <img src="product2.jpg" alt="Product 2" style="max-width: 100px; margin-right: 20px; border-radius: 8px;">
        <div style="flex: 1;">
            <p style="font-size: 1.2em; margin: 0;">Product 2</p>
            <p style="color: #555; margin: 5px 0;">A brief description of Product 2.</p>
            <p style="font-weight: bold; color: #333;">$29.99</p>
        </div>
    </div>
    <!-- Repeat this structure for more products -->
</div>`
  )
}

function Code()  {
  return (
   '<body>'
   + '<div id="product-buy-tracker" style="display: none">'
   + '  <div class="container">'
   + '    <div class="header">'
   + '      <img src="Theme-safe.png" alt="Shopify Logo">'
   + '      <div>'
   + '        <h1>Welcome to the Product Buy Tracker App Guide</h1>'
   + '      </div>'
   + '    </div>'
   + ''
   + '    <!------------------------------------------------------------------------------------------->'
   + '    <!-- Step 1: Go to themes -->'
   + '    <div class="instruction-step">'
   + '      <div class="step-header">'
   + '        <div class="step-number">1</div>'
   + '        <div class="step-title">Navigate to Online Themes</div>'
   + '      </div>'
   + '      <div class="step-description">'
   + '        After you installed our app, go to your Shopify admin dashboard and navigate to Online'
   + '        Themes.'
   + '      </div>'
   + '      <div class="step-image">'
   + '        <img src="themes-location.png" alt="Themes location"/>'
   + '      </div>'
   + '    </div>'
   + ''
   + '    <!------------------------------------------------------------------------------------------->'
   + '    <!-- Step 2: Choose theme customize -->'
   + '    <div class="instruction-step">'
   + '      <div class="step-header">'
   + '        <div class="step-number">2</div>'
   + '        <div class="step-title">Customize theme</div>'
   + '      </div>'
   + '      <div class="step-description">'
   + '        Choose theme you want to apply and then hit customize button'
   + '      </div>'
   + '      <div class="step-image">'
   + '        <img src="theme-customize.png" alt="Themes Customize"/>'
   + '      </div>'
   + '    </div>'
   + ''
   + '    <!------------------------------------------------------------------------------------------->'
   + '    <!-- Step 3: Add app to theme -->'
   + '    <div class="instruction-step">'
   + '      <div class="step-header">'
   + '        <div class="step-number">3</div>'
   + '        <div class="step-title">Add app to theme</div>'
   + '      </div>'
   + '      <div class="step-description">'
   + '        <p>If you don\'t have <strong>Apps</strong> section, Select <strong>Add section</strong> in'
   + '          <strong>Header</strong>.</p>'
   + '        <p>If you\'ve already had <strong>Apps</strong> section, select <strong>Add block</strong>'
   + '        </p>'
   + '        <p>Choose <strong>Apps</strong>, then find <strong>Product Buy Tracker</strong></p>'
   + '        <p>Add <strong>Product Buy Tracker</strong> to <strong>Header</strong> by click app</p>'
   + '        <p>App will be visible in <strong>Collections</strong> and <strong>Product</strong> page</p>'
   + '      </div>'
   + '      <div class="step-image">'
   + '        <img src="add-app-section.png" alt="Theme customize app"/>'
   + '      </div>'
   + '    </div>'
   + ''
   + '    <!------------------------------------------------------------------------------------------->'
   + '    <!-- Step 3: Preview Settings -->'
   + '    <div class="instruction-step">'
   + '      <div class="step-header">'
   + '        <div class="step-number">3</div>'
   + '        <div class="step-title">Setting preview</div>'
   + '      </div>'
   + '      <div class="step-description">'
   + '        <p>Below is app setting. It contains setting for both <strong>Collections</strong> and'
   + '          <strong>Product</strong> page </p>'
   + '        <ul>'
   + '          <li><strong>Enable</strong>: To enable badge and banner</li>'
   + '          <li><strong>Badge Title</strong>: Title for badge showed in <strong>Collections</strong>'
   + '            page'
   + '          </li>'
   + '          <li><strong>Badge background color</strong>: Background color of badge showed in <strong>Collections</strong>'
   + '            page. Default: #FA02C'
   + '          </li>'
   + '          <li><strong>Badge text color</strong>: Text color of badge showed in'
   + '            <strong>Collections</strong> page. Default: #FFF'
   + '          </li>'
   + '          <li><strong>Order detail background color</strong>: Background color of order detail'
   + '            banner showed in <strong>Product</strong> page. Default: #FFF'
   + '          </li>'
   + '          <li><strong>Order detail text color</strong>: Text color of order detail banner showed in'
   + '            <strong>Product</strong> page. Default: #FFF'
   + '          </li>'
   + '          <li><strong>Enable</strong>: Use custom HTML instead of default. Select this will use'
   + '            below HTML. Unselect it to use our default badge and detail banner'
   + '          </li>'
   + '          <li><strong>Badge HTML</strong>: Custom HTML for badge showed in'
   + '            <strong>Collections</strong> page. Enable <strong>Use custom HTML</strong> to use this'
   + '          </li>'
   + '          <li><strong>Order detail HTML</strong>: Custom HTML for order detail banner showed in'
   + '            <strong>Product</strong> page. Please include $boughtDate value in html to show the'
   + '            bought date. Enable <strong>Use custom HTML</strong> to use this'
   + '          </li>'
   + '        </ul>'
   + '      </div>'
   + '      <div class="step-image">'
   + '        <img src="extension-settings.png" alt="Extension Settings"/>'
   + '      </div>'
   + '    </div>'
   + ''
   + '    <!------------------------------------------------------------------------------------------->'
   + '    <!-- Step 4: Collection Page -->'
   + '    <div class="instruction-step">'
   + '      <div class="step-header">'
   + '        <div class="step-number">4</div>'
   + '        <div class="step-title">Collections Page</div>'
   + '      </div>'
   + '      <div class="step-description">'
   + '        <p>App will generate badge for which product has been bought by login customer.</p>'
   + '        <p>You can use setting to change color and text of badge. </p>'
   + '        <p>In below picture is demo version for theme customize.</p>'
   + '      </div>'
   + '      <div class="step-image">'
   + '        <img src="product-buy-badge.png" alt="Product Buy Badge"/>'
   + '      </div>'
   + '    </div>'
   + ''
   + '    <!------------------------------------------------------------------------------------------->'
   + '    <!-- Step 5: Product Page -->'
   + '    <div class="instruction-step">'
   + '      <div class="step-header">'
   + '        <div class="step-number">5</div>'
   + '        <div class="step-title">Product Page</div>'
   + '      </div>'
   + '      <div class="step-description">'
   + '        <p>App will generate banner in <strong>Product</strong> page with bought date for which'
   + '          product has been bought by login customer.</p>'
   + '        <p>You can use setting to change color and text of banner.</p>'
   + '        <p>In below picture is demo version for theme customize.</p>'
   + '      </div>'
   + '      <div class="step-image">'
   + '        <img src="order-detail-banner.png" alt="Product Banner"/>'
   + '      </div>'
   + '    </div>'
   + '  </div>'
   + '</div>'
   + '</body>'
  );
}
