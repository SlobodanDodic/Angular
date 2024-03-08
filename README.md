<div align="center">

# ![Angular](ng.svg)

_**Angular CLI:** 16.2.7🔺 **Node:** 18.19.0🔺 **Package Manager:** npm 9.8.1_

[Angular Documentation](https://angular.io/guide/cheatsheet)

⁂

</div>

> ▶ **remove any existing files from the repo, skipping over ones not in repo**

    👉 find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch

⁂

> ▶ **Create new project** 👉 ng new **project-name**

> ▶ **Install bootstrap** 👉 npm install bootstrap

> ▶ **Install ng bootstrap** 👉 ng add @ng-bootstrap/ng-bootstrap

> ▶ **Add to angular.json in styles** 👉 "node_modules/bootstrap/dist/css/bootstrap.css"

> ▶ **localhost:4200** 👉 ng serve

> ▶ **Generate component with selector prefix** 👉 ng g c **c-name** -p=**p-name** --skip-tests

> ▶ **Generate component in its own folder** 👉 ng g c **c-name** -p=**p-name** --skip-tests --flat false

> ▶ **Generate component in specific folder** 👉 ng g c **folder-name**/**c-name** -p=**p-name** --skip-tests --flat false

> ▶ **Generate service in folder** 👉 ng g s folder-name/name-service/name
