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

3. Add a reference to the stylesheet:

    ```html
    <link rel="stylesheet" type="text/css" href="./PATH-TO-YOUR/node_modules/watson-developer-cloud-react-components/dist/watson-developer-cloud-react-components.min.css">
    ```

4. Images and fonts should be copied from `/PATH-TO-YOUR/node_modules/watson-developer-cloud-react-components/dist/` into your static folder.

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
│   ├── fonts
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
    ├── fonts                  // fonts
    └── images                 // images

```
## License

  This sample code is licensed under Apache 2.0.

## Contributing

  See [CONTRIBUTING](.github/CONTRIBUTING.md).

## Open Source @ IBM
  Find more open source projects on the [IBM Github Page](http://ibm.github.io/)
