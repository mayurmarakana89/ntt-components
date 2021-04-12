# ntt-components

The intent was to create a component library, but this repository contains a journey that uses multiple components. These components can be publish to desired artifactory or even npm to consume it as a library. Steps for publishing has been described below (under section NPM Publish)

# Instructions

To run the application, please follow the steps below:

1. To install all the dependencies, run command
````
npm install
````
2. To compile and build the distribution package, run command
````
npm run build
````
3. To start the application, run command
````
npm run start
````

# Project files/folders
````
--dist                  # Generated on "npm run build" for distribution
----index.html          # Entry point for the distribution package
----main.js             # Bundled version of the entire source code
--src                   # Source code directory
----assets              # Assets like images, logos, etc
----components          # React components
----pages               # These are just the page components also in React
----index.jsx           # This is the entry file that webpack reads
--index.html            # HTML file that webpack moves to dist for the entry point
--package.json          # Node config, stores all the dependencies, scripts, etc
--.babelrc              # Babel config, stores all the presets & plugins that tells babel to transpile listed formats into vanila js
--webpack.config.js     # Module bundler config, bundles all the resources to load on dev server or publish to distribution (prod) server
````

# NPM Publish (TODO)

For better maintainability and reusability, it's a good approach that the components are published and consumed as library. Please follow the steps to publish the components.

Technically, the "dist" is the build pack that should be published to any server for consumption. Since in above repo, it's like an app using components, we won't be able to call it as component library. However, just changing index.jsx to following code:

````
import * as ActionButton from './components/ActionButton';
... import other components similarly

export default {
    ActionButton
};
````

Now, once all the components you want to export are listed in export. You can run the build command "npm run build". This should basically build the distribution package which contains just components.

Once the dist package is created, next step is to publish.

To publish to NPM, we can simply run following command as long as you have your account and access to publish into NPM.
````
npm publish
````
To publish to any private artifactory, we should update our .npmrc file and add registry to it.

Add the following line in your .npmrc
````
registry=<path_to_your_artifactory_registry>
````
Once the registry is set, you can run the "npm publish" command. It will publish your dist package to the registry.

Finally, we can consume it using import statements.

