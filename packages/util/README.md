<div align="center">
  <h1>CRUD (@iscssoft/util)</h1>
</div>
<div align="center">
  <strong>for RESTful APIs built with NestJs</strong>
</div>

<br />

<div align="center">
  <a href="https://travis-ci.org/iscssoft/crud">
    <img src="https://github.com/iscssoft/crud/workflows/Tests/badge.svg" alt="Build" />
  </a>
  <a href="https://coveralls.io/github/iscssoft/crud?branch=master">
    <img src="https://coveralls.io/repos/github/iscssoft/crud/badge.svg" alt="Coverage" />
  </a>
  <a href="https://github.com/iscssoft/crud/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/iscssoft/crud.svg" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/@iscssoft/crud">
    <img src="https://img.shields.io/npm/v/@iscssoft/crud.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/org/iscssoft">
    <img src="https://img.shields.io/npm/dm/@iscssoft/crud.svg" alt="npm downloads" />
  </a>
  <a href="https://npm.packagequality.com/#?package=@iscssoft%2Fcrud">
    <img src="https://npm.packagequality.com/shield/%40iscssoft%2Fcrud.svg" alt="Package Quality" />
  </a>
  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="Renovate" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs welcome" />
  </a>
  <a href="https://github.com/marmelab/awesome-rest#nodejs">
    <img src="https://raw.githubusercontent.com/iscssoft/crud/master/img/awesome-rest.svg?sanitize=true" alt="Awesome REST" />
  </a>
  <a href="https://github.com/juliandavidmr/awesome-nestjs#components--libraries">
    <img src="https://raw.githubusercontent.com/iscssoft/crud/master/img/awesome-nest.svg?sanitize=true" alt="Awesome Nest" />
  </a>
  <a href="https://github.com/nestjs/nest">
    <img src="https://raw.githubusercontent.com/iscssoft/crud/master/img/nest-powered.svg?sanitize=true" alt="Nest Powered" />
  </a>
  <a href="#individuals" alt="Sponsors on Open Collective">
    <img src="https://opencollective.com/iscssoft/backers/badge.svg" />
  </a>
  <a href="#organizations" alt="Sponsors on Open Collective">
    <img src="https://opencollective.com/iscssoft/sponsors/badge.svg" />
  </a> 
</div>

<div align="center">
  <sub>Built by
  <a href="https://twitter.com/MichaelYali">@MichaelYali</a> and
  <a href="https://github.com/iscssoft/crud/graphs/contributors">
    Contributors
  </a>
</div>

<br />

We believe that everyone who's working with NestJs and building some RESTful services and especially some CRUD functionality will find `@iscssoft/crud` microframework very useful.

## Features

<img align="right" src="https://raw.githubusercontent.com/iscssoft/crud/master/img/crud-usage2.png" alt="CRUD usage" />

- Super easy to install and start using the full-featured controllers and services :point_right:

- DB and service agnostic extendable CRUD controllers

- Reach query parsing with filtering, pagination, sorting, relations, nested relations, cache, etc.

- Framework agnostic package with query builder for a frontend usage

- Query, path params and DTOs validation included

- Overriding controller methods with ease

- Tiny config (including globally)

- Additional helper decorators

- Swagger documentation

## Packages

- [**@iscssoft/crud**](https://www.npmjs.com/package/@iscssoft/crud) - core package which provides `@Crud()` decorator for endpoints generation, global configuration, validation, helper decorators ([docs](https://github.com/iscssoft/crud/wiki/Controllers#description))
- [**@iscssoft/crud-request**](https://www.npmjs.com/package/@iscssoft/crud-request) - request builder/parser package which provides `RequestQueryBuilder` class for a frontend usage and `RequestQueryParser` that is being used internally for handling and validating query/path params on a backend side ([docs](https://github.com/iscssoft/crud/wiki/Requests#frontend-usage))
- [**@iscssoft/crud-typeorm**](https://www.npmjs.com/package/@iscssoft/crud-typeorm) - TypeORM package which provides base `TypeOrmCrudService` with methods for CRUD database operations ([docs](https://github.com/iscssoft/crud/wiki/ServiceTypeorm))

## Documentation

- [General Information](https://github.com/iscssoft/crud/wiki#why)
- [CRUD Controllers](https://github.com/iscssoft/crud/wiki/Controllers#description)
- [CRUD ORM Services](https://github.com/iscssoft/crud/wiki/Services#description)
- [Handling Requests](https://github.com/iscssoft/crud/wiki/Requests#description)

## Support

Any support is welcome. At least you can give us a star.

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/iscssoft/crud/graphs/contributors"><img src="https://opencollective.com/iscssoft/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/iscssoft#backer)]

#### Individuals

<a href="https://opencollective.com/iscssoft#backers" target="_blank"><img src="https://opencollective.com/iscssoft/backers.svg?width=890&button=false"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/iscssoft#sponsor)]

<a href="https://opencollective.com/iscssoft/sponsor/0/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/iscssoft/sponsor/1/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/iscssoft/sponsor/2/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/iscssoft/sponsor/3/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/iscssoft/sponsor/4/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/iscssoft/sponsor/5/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/iscssoft/sponsor/6/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/iscssoft/sponsor/7/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/iscssoft/sponsor/8/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/iscssoft/sponsor/9/website" target="_blank"><img src="https://opencollective.com/iscssoft/sponsor/9/avatar.svg"></a>

## License

[MIT](LICENSE)
