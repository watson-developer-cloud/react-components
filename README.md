# Watson Developer Cloud React Components
A collection of [React](https://facebook.github.io/react/) components to write web applications using the Watson APIs.

Documentation: https://watson-developer-cloud.github.io/react-components/

## Getting Started

1. Install the library

    ```
    npm install watson-developer-cloud-react-components
    ```

2. Add components to your React file where needed:

    Example:
    ```js
    import Icon from 'watson-developer-cloud-react-components';
    ```

3. Make the assets public. For a Node.js/Express server, the following code should work:

   ```js
   app.use(express.static('./node_modules/watson-developer-cloud-react-components/dist/'));
   ```

   For other environments, copy the contents of the `dist/` into your static folder.

4. Add a reference to the stylesheet.

   ```html
   <link rel="stylesheet" type="text/css" href="/css/watson-developer-cloud-react-components.min.css">
   ```

   Adjust the `href` as necessary if a different location was chosen in step 3


## How to Contribute

1. Install Dependencies

    ```
    npm install
    ```

2. Start the development server

    ```
    npm run dev
    ```
  Changes will refresh the page thanks to [browsersync](https://www.browsersync.io).


3. Run the build command before pushing merge request:

    ```
    npm run build
    ```

### Directory structure

```
.
├── README.md
├── gulpfile.js
├── package.json
├── dist
│   ├── components             // ES5 react components
│   ├── css
│   ├── images
│   ├── watson-developer-cloud-react-components.js
│   ├── watson-developer-cloud-react-components.min.js
│   └── watson-developer-cloud-react-components.min.js.map
├── example                    // Example to be use in gh-pages
│   ├── build
│   │   ├── bundle.css
│   │   └── bundle.js
│   ├── index.html
│   └── src
├── src
│   ├── components             // React components
│   └── stylesheets            // Sass files
└── static                     // static files
    └── images                 // images

```
## License

  This sample code is licensed under Apache 2.0.

## Contributing

  See [CONTRIBUTING](.github/CONTRIBUTING.md).

## Open Source @ IBM
  Find more open source projects on the [IBM Github Page](http://ibm.github.io/)
