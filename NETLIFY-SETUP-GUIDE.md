# Webflow + Netlify Integration Documentation

## The Core Concept: Why Netlify Functions?

Think of our architecture like a bridge between two islands. Webflow (our design island) needs to communicate with external APIs (the services island), but there's a security barrier called CORS (Cross-Origin Resource Sharing) that prevents direct communication. Netlify functions act as our bridge, allowing secure communication between these islands.

We can add sophisticated integrations like VA API connections, payment processing, and event management through small, maintainable serverless functions. This creates the best of both worlds: visual editing simplicity with enterprise-grade functionality.

## Architecture Overview

**The Request Journey:**
1. A veteran visits the Webflow-hosted website and clicks "Check My Benefits"
2. The Webflow site makes a JavaScript request to our Netlify function endpoint
3. The Netlify function (running server-side) calls the VA API or other external service
4. The external API responds to our Netlify function
5. Our function processes the data and sends it back to Webflow
6. The veteran sees their benefits information appear seamlessly on the page

This approach completely eliminates CORS issues because the browser only talks to domains we control, while our server-side functions handle all external API communication.

## Live Demo

See the CORS proxy in action: https://fall-in-veterans-hackatho-b6e2580aa7336.webflow.io/javascript-test

This demo shows:
- Real-time API calls from Webflow to Netlify functions
- CORS-free data fetching in action
- The exact implementation we'll use for VA APIs, Stripe, etc.

**What stays in Webflow:**
- All visual designs, layouts, and content
- The CMS structure and data
- Basic site functionality and interactions
- The core website remains hosted on Webflow's infrastructure

**What goes in our GitHub/Netlify setup:**
- Only the serverless functions (small JavaScript files)
- API integration code
- Helper utilities for data processing
- Configuration files for our functions

## Step-by-Step Implementation Guide

## What This DOESN'T Require
**Important:** This approach does NOT require:
- ❌ Downloading or exporting Webflow code
- ❌ Managing your own servers
- ❌ Moving away from Webflow hosting
- ❌ Complex DevOps knowledge
- ❌ Maintaining infrastructure

### Step 1: Project Structure Setup

Create a new GitHub repo with this structure:
```
vet-lounge-functions/
├── .netlify/
│   └── functions/
│       ├── test-api.js
│       ├── check-benefits.js
│       ├── process-donation.js
│       └── event-registration.js
├── .gitignore
├── netlify.toml
├── package.json
└── README.md
```

Each function is a standalone file that handles one specific integration.

### Step 2: Writing Your First Function

Here's the actual working CORS proxy i've tested and deployed:

```
// .netlify/functions/test-api.js
exports.handler = async (event, context) => {
  // Handle preflight requests (OPTIONS)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Max-Age': '86400',
      },
      body: ''
    };
  }

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
      },
      body: JSON.stringify({
        message: 'CORS proxy working!',
        data: data,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

Live Example: Test it at:
https://ubiquitous-dango-4cc27f.netlify.app/.netlify/functions/test-api

Step 3: Netlify Configuration
Create a netlify.toml file:

```
[build]
  functions = ".netlify/functions"

[functions]
  node_bundler = "esbuild"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

Step 4: Connecting to Webflow
Add this custom code to your Webflow project:

```
// This goes in Webflow's custom code section
async function loadProxyData() {
  console.log('🔍 Starting CORS test...');
  
  const container = document.getElementById('proxy-test');
  
  try {
    container.innerHTML = '<div style="padding: 20px; text-align: center;">🔄 Testing CORS-free endpoint...</div>';
    
    const response = await fetch('https://ubiquitous-dango-4cc27f.netlify.app/.netlify/functions/test-api', {
      method: 'GET'
    });
    
    if (!response.ok) {
      throw new Error(`Function Error: ${response.status} - ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('✅ Data received:', result);
    
    // Display the data in your Webflow site
    container.innerHTML = `
      <div style="padding: 20px; border: 2px solid green; background: #f0fff0;">
        <h3>✅ CORS Proxy Working!</h3>
        <p><strong>Message:</strong> ${result.message}</p>
        <p><strong>Timestamp:</strong> ${result.timestamp}</p>
        <p><strong>Data fetched:</strong> ${result.data.length} posts</p>
        <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">
${JSON.stringify(result.data[0], null, 2)}
        </pre>
      </div>
    `;
    
  } catch (error) {
    console.error('❌ Fetch failed:', error);
    container.innerHTML = `
      <div style="padding: 20px; border: 2px solid red; background: #fff5f5;">
        <h3>❌ Error</h3>
        <p>${error.message}</p>
      </div>
    `;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProxyData);
```

Step 5: Deployment Process

Push your functions to GitHub - just the functions, nothing else
Connect GitHub to Netlify - one-time setup in Netlify dashboard
Set environment variables - API keys stay secure in Netlify's dashboard
Automatic deployment - every push to GitHub automatically updates your functions

Testing Your Functions
Test with cURL:
```
curl -i https://ubiquitous-dango-4cc27f.netlify.app/.netlify/functions/test-api
```

Test OPTIONS request:
```
curl -H "Origin: https://example.com" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: X-Requested-With" \
     -X OPTIONS \
     https://ubiquitous-dango-4cc27f.netlify.app/.netlify/functions/test-api
```

Test locally:
```
# Install Netlify CLI
npm install -g netlify-cli

# In your project directory
netlify dev

# Functions available at http://localhost:8888/.netlify/functions/test-api
```

Common Patterns
Pattern 1: Shared CORS Headers
```
// .netlify/functions/utils/cors.js
exports.corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
};

exports.handleCors = (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: exports.corsHeaders,
      body: ''
    };
  }
  return null;
};
```

Pattern 2: Error Handling
```
try {
  // API call
} catch (error) {
  console.error('Error:', error);
  
  return {
    statusCode: 500,
    headers: corsHeaders,
    body: JSON.stringify({
      error: 'Service temporarily unavailable',
      message: 'Please try again'
    })
  };
}
```

Pattern 3: Environment Variables
```
// Future VA API integration example
const response = await fetch('https://api.va.gov/services/benefits/v1/check', {
  headers: {
    'Authorization': `Bearer ${process.env.VA_API_KEY}`,
    'Content-Type': 'application/json'
  }
});
```

What This Enables

Payment APIs: Stripe, PayPal integration
Event Management: Eventbrite, calendar sync
VA APIs: Benefits checker, facility locator (pending access)
Email APIs: SendGrid, Mailchimp
Analytics: Custom tracking without CORS issues

Next Steps

Replace JSONPlaceholder URL with real APIs as we get access
Add authentication headers for secure APIs
Implement error handling and retry logic
Create reusable utility functions
Document each integration for handoff

Resources

Test Function: https://ubiquitous-dango-4cc27f.netlify.app/.netlify/functions/test-api
Function Logs: https://app.netlify.com/projects/ubiquitous-dango-4cc27f/logs/functions
Netlify Dashboard: https://app.netlify.com/projects/ubiquitous-dango-4cc27f
