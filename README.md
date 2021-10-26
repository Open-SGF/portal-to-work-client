# portal-to-work-client

## Prerequisites

-   Node 16 or greater
-   npm 7 or greater

## Setup

-   Clone this repo to your machine
    -   `git clone https://github.com/Open-SGF/portal-to-work-client.git` or
    -   `git clone git@github.com:Open-SGF/portal-to-work-client.git` if using ssh authentication
-   Install dependencies with npm
    -   `npm install`
-   Aquire API keys

    -   Get a reCaptcha key
        -   Go to https://www.google.com/recaptcha/admin/create#whyrecaptcha
        -   Sign up for a reCaptcha v2 API key
        -   Set domain to localhost
        -   Add VUE_APP_GOOGLE_RECAPTCHA_SITE_KEY="" to .env and paste the API key between the quotes
    -   Get a Google API key -
        -   Go to https://console.cloud.google.com/
        -   Click on the Navigation menu --> API's and Services --> Library
        -   Search Maps Javascript API and click enable
        -   Search Places API and click enable
        -   APIs & Services ==> Credentials ==> copy API key
        -   Click 'edit API key'
        -   Under website restrictions add localhost and save
        -   Copy the API from the credentials page
        -   Paste the API key in the .env folder within the quotes of VUE_APP_GOOGLE_MAPS_API_KEY=""

-   Run the project
    -   `npm run serve`
    -   Open the url this command provides in the browser
    -   From here the command will watch for file changes and auto reload the browser

## Contributing

Read our [Contributing Guide](CONTRIBUTING.md)

## Project Resources

-   [Designs](https://xd.adobe.com/view/65635d18-db65-46fd-9f00-4c4b25e4d8c4-3030/screen/03330499-a757-43b0-93f4-b055b154bdc4/)
