# Тест времени сборки webpack+babel vs webpack+swc

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
### Логи сборки webpack+babel
<details>

<summary>Логи</summary>

```*** Starting webpack + babel build (iteration 1)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 7060 ms
✨  Done in 8.20s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 2)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6400 ms
✨  Done in 7.00s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 3)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6349 ms
✨  Done in 6.95s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 4)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6383 ms
✨  Done in 6.98s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 5)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6324 ms
✨  Done in 6.92s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 6)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6408 ms
✨  Done in 7.00s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 7)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6356 ms
✨  Done in 6.96s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 8)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6699 ms
✨  Done in 7.29s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 9)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6387 ms
✨  Done in 6.97s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 10)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6339 ms
✨  Done in 6.95s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 11)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6343 ms
✨  Done in 6.97s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 12)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6260 ms
✨  Done in 6.85s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 13)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6307 ms
✨  Done in 6.90s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 14)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6325 ms
✨  Done in 6.92s.
*** Webpack + babel build completed.
*** Waiting for 5 seconds before the next build...
*** Starting webpack + babel build (iteration 15)...
yarn run v1.22.17
$ NODE_ENV=production webpack build
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

webpack 5.91.0 compiled with 3 warnings in 6400 ms
✨  Done in 6.99s.
*** Webpack + babel build completed.
*** Webpack + babel build loop completed.

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
| Итерация  | Время production build, webpack+babel, s | Время production build, webpack+swc, s |
| ------------- | ------------- | ------------- |
| 1  | 8.20s  | 5.31s  |
| 2  | 7.00s  | 5.16s  |
| 3  | 6.95s  | 5.17s  |
| 4  | 6.98s  | 5.16s  |
| 5  | 6.92s  | 5.20s  |
| 6  | 7.00s  | 5.19s  |
| 7  | 6.96s  | 5.17s  |
| 8  | 7.29s  | 5.21s  |
| 9  | 6.97s  | 5.18s  |
| 10  | 6.95s  | 5.18s  |
| 11  | 6.97s  | 5.17s  |
| 12  | 6.85s  | 5.16s  |
| 13  | 6.90s  | 5.18s  |
| 14  | 6.92s  | 5.19s  |
| 15  | 6.99s  | 5.19s  |

### Таблица с результатами времени production сборки, средние значения
| Среднее время production build, webpack+babel, s | Среднее время production build, webpack+swc, s |
| ------------- | ------------- |
| 7.05s  | 5.19s  |

### Время запуска webpack dev server
Здесь я не стал запускать сервер итеративно, просто запустил по 1 разу, но, результат сразу виден.
<details>

<summary>Логи webpack+babel</summary>

```yarn run v1.22.17
$ NODE_ENV=development webpack serve --open
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:9000/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.0.163:9000/
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
webpack 5.91.0 compiled successfully in 3480 ms

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
| Время dev start, webpack+babel, s | Время dev start, webpack+swc, s |
| ------------- | ------------- |
| 3.48s  | 1.64s  |

### Результаты
В моем тесте, сборка **production** webpack+swc, при одинаковых условиях, быстрее webpack+babel на **1.86s (на 26%)**.

Cборка **dev** webpack+swc, при одинаковых условиях, быстрее webpack+babel на **1.84s (на 52%)**.

Так же, хотел отметить, что размер build-файла в webpack+swc **500kb**, в webpack+babel **501kb**.
