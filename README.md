# Тест времени сборки webpack+babel+ts-loader vs webpack+babel+babel-presets (@babel/preset-env, @babel/preset-typescript, @babel/preset-react) vs webpack+swc

## Машина
MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports):
* 2 GHz 4‑ядерный процессор Intel Core i5
* Intel Iris Plus Graphics 1536 МБ
* 16 ГБ 3733 MHz LPDDR4X

## Окружение
* NodeJS v20.12.2
* Yarn 1.22.17

## Сборка
* Webpack 5.91.0

## Тест
Для теста сборки взял следующие зависимости:
* typeScript 5.4.5
* react 18.2.0
* react-dom 18.2.0
* lodash 4.17.21
* moment 2.30.1

Тестирую build-production, для частоты эксперимента, сборку запускаю 15 раз, с интервалом 5 секунд.
### Логи сборки webpack+babel+ts-loader
<details>

<summary>Логи</summary>

```
yarn run v1.22.17
$ BUILD_COMMAND=build-with-ts-loader bash build_loop.sh
*** Starting webpack + babel build-with-ts-loader (iteration 1)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [emitted] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6680 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 2)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6584 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 3)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6639 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 4)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6894 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 5)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6636 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 6)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6698 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 7)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6636 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 8)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6646 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 9)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6669 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 10)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6597 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 11)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6568 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 12)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6556 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 13)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6669 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 14)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6721 ms
*** Webpack + babel build-with-ts-loader completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-ts-loader (iteration 15)...
$ NODE_ENV=production webpack build --env has-ts-loader
asset bundle.js 501 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 432 bytes 3 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../ui/ 1.91 KiB
  ../ui/index.tsx 220 bytes [built] [code generated]
  ../ui/scr/GoodComponent.tsx 1.69 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (501 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (501 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 6641 ms
*** Webpack + babel build-with-ts-loader completed.
*** Webpack + babel build-with-ts-loader loop completed.

```

</details>

### Логи сборки webpack+babel+babel-presets (@babel/preset-env, @babel/preset-typescript, @babel/preset-react)
<details>

<summary>Логи</summary>

```
yarn run v1.22.17
$ BUILD_COMMAND=build-with-babel-preset bash build_loop.sh
*** Starting webpack + babel build-with-babel-preset (iteration 1)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5430 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 2)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5395 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 3)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5390 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 4)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5512 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 5)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5429 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 6)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5396 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 7)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5473 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 8)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5427 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 9)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5453 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 10)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5518 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 11)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5468 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 12)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5380 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 13)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5407 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 14)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5455 ms
*** Webpack + babel build-with-babel-preset completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build-with-babel-preset (iteration 15)...
$ NODE_ENV=production webpack build --env has-babel-preset
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 485 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 5423 ms
*** Webpack + babel build-with-babel-preset completed.
*** Webpack + babel build-with-babel-preset loop completed.

```

</details>

### Логи сборки webpack+swc
<details>

<summary>Логи</summary>

```
*** Starting webpack + swc build (iteration 1)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4719 ms
✨  Done in 5.31s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 2)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4578 ms
✨  Done in 5.16s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 3)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4584 ms
✨  Done in 5.17s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 4)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4574 ms
✨  Done in 5.16s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 5)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4613 ms
✨  Done in 5.20s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 6)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4601 ms
✨  Done in 5.19s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 7)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4589 ms
✨  Done in 5.17s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 8)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4623 ms
✨  Done in 5.21s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 9)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4601 ms
✨  Done in 5.18s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 10)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4594 ms
✨  Done in 5.18s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 11)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4580 ms
✨  Done in 5.17s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 12)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4581 ms
✨  Done in 5.16s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 13)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4607 ms
✨  Done in 5.18s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 14)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4604 ms
✨  Done in 5.19s.
*** Webpack + swc build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + swc build (iteration 15)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
asset bundle.js 500 KiB [compared for emit] [minimized] [big] (name: main) 1 related asset
asset index.html 254 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
orphan modules 554 bytes [orphan] 2 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB
  ../../node_modules/moment/locale/af.js 2.69 KiB [built] [code generated]
  + 136 modules
modules by path ../../node_modules/react/ 6.94 KiB
  ../../node_modules/react/index.js 190 bytes [built] [code generated]
  ../../node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
modules by path ../../node_modules/react-dom/ 130 KiB
  ../../node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ../../node_modules/react-dom/cjs/react-dom.production.min.js 129 KiB [built] [code generated]
modules by path ../../node_modules/scheduler/ 4.33 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
+ 4 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  bundle.js (500 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (500 KiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

webpack 5.91.0 compiled with 3 warnings in 4591 ms
✨  Done in 5.19s.
*** Webpack + swc build completed.
*** Webpack + swc build loop completed.

```

</details>

### Таблица с результатами времени production сборки
| Итерация  | Время production build, webpack+babel+ts-loader, s | Время production build, webpack+babel+babel-presets (@babel/preset-env, @babel/preset-typescript, @babel/preset-react), s | Время production build, webpack+swc, s |
| ------------- |----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| 1  | 6.68s                                              | 5.43s                                                                                                                     | 5.31s                                  |
| 2  | 6.58s                                              | 5.39s                                                                                                                     | 5.16s                                  |
| 3  | 6.63s                                              | 5.39s                                                                                                                     | 5.17s                                  |
| 4  | 6.89s                                              | 5.51s                                                                                                                     | 5.16s                                  |
| 5  | 6.63s                                              | 5.42s                                                                                                                     | 5.20s                                  |
| 6  | 6.69s                                              | 5.39s                                                                                                                     | 5.19s                                  |
| 7  | 6.63s                                              | 5.47s                                                                                                                     | 5.17s                                  |
| 8  | 6.64s                                              | 5.42s                                                                                                                     | 5.21s                                  |
| 9  | 6.66s                                              | 5.45s                                                                                                                     | 5.18s                                  |
| 10  | 6.59s                                              | 5.51s                                                                                                                     | 5.18s                                  |
| 11  | 6.56s                                              | 5.46s                                                                                                                     | 5.17s                                  |
| 12  | 6.55s                                              | 5.38s                                                                                                                     | 5.16s                                  |
| 13  | 6.66s                                              | 5.40s                                                                                                                     | 5.18s                                  |
| 14  | 6.72s                                              | 5.45s                                                                                                                     | 5.19s                                  |
| 15  | 6.64s                                              | 5.42s                                                                                                                     | 5.19s                                  |

### Таблица с результатами времени production сборки, средние значения
| Среднее время production build, webpack+babel+ts-loader, s | Среднее время production build, webpack+babel+babel-presets (@babel/preset-env, @babel/preset-typescript, @babel/preset-react), s | Среднее время production build, webpack+swc, s |
|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| 6.65s                                                      | 5.43s                                                                                                                             | 5.19s                                         |

### Время запуска webpack dev server
Здесь я не стал запускать сервер итеративно, просто запустил по 1 разу, но, результат сразу виден.
<details>

<summary>Логи webpack+babel+ts-loader</summary>

```
yarn run v1.22.17
$ NODE_ENV=development webpack serve --open --env has-ts-loader
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:9000/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.67:9000/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:9000/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/nikitagordeev/React/test-swc/packages/babel-compiler/dist' directory
<i> [webpack-dev-middleware] wait until bundle finished: /
asset bundle.js 2.65 MiB [emitted] (name: main)
asset index.html 296 bytes [emitted]
runtime modules 27.5 KiB 13 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/webpack-dev-server/client/ 69.7 KiB 16 modules
modules by path ../../node_modules/webpack/hot/*.js 5.18 KiB 4 modules
modules by path ../../node_modules/html-entities/lib/*.js 78.9 KiB 4 modules
modules by path ../../node_modules/react/ 85.7 KiB 2 modules
modules by path ../../node_modules/react-dom/ 1000 KiB 2 modules
modules by path ../ui/ 1.91 KiB 2 modules
modules by path ../../node_modules/scheduler/ 17.3 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.development.js 17.1 KiB [built] [code generated]
+ 6 modules
webpack 5.91.0 compiled successfully in 4484 ms

```

</details>

<details>

<summary>Логи webpack+babel+babel-presets (@babel/preset-env, @babel/preset-typescript, @babel/preset-react)</summary>

```
yarn run v1.22.17
$ NODE_ENV=development webpack serve --open has-babel-preset
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:9000/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.67:9000/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:9000/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/nikitagordeev/React/test-swc/packages/babel-compiler/dist' directory
<i> [webpack-dev-middleware] wait until bundle finished: /has-babel-preset
asset bundle.js 2.65 MiB [emitted] (name: main)
asset index.html 296 bytes [emitted]
runtime modules 27.5 KiB 13 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/webpack-dev-server/client/ 69.7 KiB 16 modules
modules by path ../../node_modules/webpack/hot/*.js 5.18 KiB 4 modules
modules by path ../../node_modules/html-entities/lib/*.js 78.9 KiB 4 modules
modules by path ../../node_modules/react/ 85.7 KiB 2 modules
modules by path ../../node_modules/react-dom/ 1000 KiB 2 modules
modules by path ../ui/ 485 bytes 2 modules
modules by path ../../node_modules/scheduler/ 17.3 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.development.js 17.1 KiB [built] [code generated]
+ 6 modules
webpack 5.91.0 compiled successfully in 3112 ms

```

</details>

<details>

<summary>Логи webpack+swc</summary>

```yarn run v1.22.17
$ NODE_ENV=development webpack serve --open
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:9001/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.0.163:9001/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:9001/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/nikitagordeev/React/test-swc/packages/swc-compiler/dist' directory
<i> [webpack-dev-middleware] wait until bundle finished: /
asset bundle.js 2.65 MiB [emitted] (name: main)
asset index.html 296 bytes [emitted]
runtime modules 27.5 KiB 13 modules
modules by path ../../node_modules/moment/locale/*.js 512 KiB 137 modules
modules by path ../../node_modules/webpack-dev-server/client/ 69.7 KiB 16 modules
modules by path ../../node_modules/webpack/hot/*.js 5.18 KiB 4 modules
modules by path ../../node_modules/html-entities/lib/*.js 78.9 KiB 4 modules
modules by path ../../node_modules/react/ 85.7 KiB 2 modules
modules by path ../../node_modules/react-dom/ 1000 KiB 2 modules
modules by path ../ui/ 554 bytes 2 modules
modules by path ../../node_modules/scheduler/ 17.3 KiB
  ../../node_modules/scheduler/index.js 198 bytes [built] [code generated]
  ../../node_modules/scheduler/cjs/scheduler.development.js 17.1 KiB [built] [code generated]
+ 6 modules
webpack 5.91.0 compiled successfully in 1643 ms

```

</details>

### Таблица с результатами времени dev сборки
| Время dev start, webpack+babel+ts-loader, s | Время dev start webpack+babel+babel-presets (@babel/preset-env, @babel/preset-typescript, @babel/preset-react), s | Время dev start, webpack+swc, s |
|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------|--------------------------------|
| 4.48s                                       | 3.11s                                                                                                             | 1.64s                          |
