# Number to English Words

Application that convert number to English Words, created with [next](https://github.com/zeit/next.js) that takes advantage of the
routing capabilities.

## Using Standalone Version (Testing)

- Clone this repository and go to root
- Run `yarn client:install` or `npm run client:install`
- Run `yarn gui:start` or `npm run gui:start`
- Go to [http://localhost:3000](http://localhost:3000)
- Enjoy :relaxed:

## Using Docker

- Clone this repository
- Set/check `environment` inside Docker-compose.yml (Default PORT for APP is 3000)
- Run `docker-compose up`

## TESTING (Fast Way - It will install all dependencies automatically)
- From project root run `yarn test:server` or `npm run test:server`
- Navigate to [http://localhost:4205/spec](http://localhost:4205/spec)

## TESTING (Slow Way)
- From project root go to `test` folder
- Run `yarn install` or `npm install`
- Run `yarn build` or `npm run build`
- Run `yarn test:server` or `npm run test:server`
- Navigate to [http://localhost:4205/spec](http://localhost:4205/spec)

## Other

- In this phase node/express entry file is `app/ssr-server.js`
