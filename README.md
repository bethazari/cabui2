___

# Варианты сборки

## Для локальной разработки

Запускаем локальный dev-server: 
`npm i && npm run dev`

ИЛИ docker-вариант
`docker-compose up`

Открываем `http://localhost:3000/`

Крайне рекомендуется установить плагины 
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi 
и https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd - 
сильно упрощают разработку и дебаг

### Особенности простой сборки:
1. Собираются SourceMaps для дебага в хроме
2. Активируется Hot Module Replacement


## Для деплоя

Собираем проект: `npm i && npm run release` (никаких глобал-зависимостей кроме nodejs)

Содержимое папки `dist` закидываем на сервер в папку, из которой nginx раздаёт клиент, например `/home/web/static/appdater/admin`.

Наличие в webpack-конфиге `publicPath = '/admin/'` автоматом подставит 
в index.html верный абсолютный путь до всех ресурсов

### Особенности release-сборки:
1. Весь JS-код минифицируется
2. Все стили извлекаются из бандла (сборка дольше, загрузка быстрее)
3. Весь vendor-код (зависимости) извлекаются в отдельный бандл (для улучшения кеширования)
4. Добавляется версионирование бандлов на основе их контента
5. Манифест версионирования инлайнится прямо в html

# Для поддержки ESLint
Даже при docker-based-разработке - делаем локально npm i -g eslint, а локально - npm i