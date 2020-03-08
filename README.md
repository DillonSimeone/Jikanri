# Jikanri

Jikanri *[jap. jikan kanri, 時間管理]* is a simple frontend application for personal task- and time management. It aims to combine many existing service API's to create a unified experience in which time- and task-management becomes less about keeping all your calendars, notes and boards in sync, and saving time and productivity instead.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

start by cloning this repository to your local machine:

*via https:*
```
$ git clone https://github.com/Shiroraven/Jikanri.git ./jikanri
```
*via SSH:*
```
$ git clone git@github.com:Shiroraven/Jikanri.git ./jikanri
```
next install the required dependencies using your favorite package manager:

**NPM:**
```
$ npm -i
```
**Yarn:**
```
$ yarn -i
```

## Running the tests

automated testing can be performed as follows:
**Parallel Testing**
```
$ jest [other-options-or-params]
```
*or*
**Sequential Testing**
```
$ jest [other-options-or-params] --runInBand
```
### And coding style tests

By default this project enforces the [javascript standard style](https://standardjs.com)
run `$ npx standard` to check your style and `$ npx standard --fix` to fix all autofixable problems.

## Built With

* [Svelte](https://svelte.dev/) - Web framework
* [Rollup](https://rollupjs.org) - Package / Module bundler
* [Jest](https://jestjs.io) - Testing framework

## Contributing

If you wish to contibute at this early stage please don't hesitate to submit a pull request or contact me via email or discord [Shiroraven#4302] I'll be happy to discuss your ideas with you.
please also read `CONTRIBUTING.md` for details on the code of conduct, and the process for submitting pull requests.

## Authors

* **Ivan Jovanovic** - *Initial work* - [Shiroraven](https://github.com/Shiroraven)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the GPLv3 License - see the `LICENSE` file for details

