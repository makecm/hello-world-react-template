# Make Hello World Starter Template (React)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Looking for a different language?
- React
- [Vue](https://github.com/Outfitio/make-hello-world-vue-template)
- [Angular](https://github.com/Outfitio/make-hello-world-angular-template)

<img src="https://files.outfit.io/media_library_items/236740/Screen%2520Shot%25202020-11-03%2520at%252010.34.34%2520am.png" style="width: 60%; margin: 0 auto; display: block;" alt="make starter template" />

## Development server

Install all necessary dependencies `yarn install`

Run `yarn start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Building for Make

Run `yarn build` to build the project with correct resource pathing for the sake of deploying to make.

The build artifacts will be stored in the `/build` directory.

## Importing into Make

When importing into Make be sure to import from the `/build` folder.

The following `data` inputs are available as well.

- `headline`: string
- `backgroundImage`: string (public URL)
- `showLogos`: boolean

## Support

Here are some helpful links to get you started
- [Docs](https://docs.make.cm): First point of call
- [Twitter](https://twitter.com/home): Drop us a message on twitter if you find a bug or have any feedback
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
