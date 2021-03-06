# Выполнение тестового задания от компании Meleton

### Описание задачи:

Реализовать страницу для работы со списком покупок: отображение, пагинация, добавление, удаление.  
Каждый товар из списка должен иметь следующий набор полей:

- id
- Название
- Цена
- Дата покупки

### Необходимый функционал:

Вывод списка покупок с пагинаций по 2 записи на странице
На странице товара должна быть возможность :
 - просмотра\удаления\редактирования выбранного товара
 - Добавление нового товара в список
 - Сортировка списка по цене или дате.
 
### Требования к решению:

Nuxt.js последней стабильной версии  
Все товары должны быть доступны по ссылке.  
Сделать `data.json` из 6 (или более) товаров с заполненными данными.  
При первой загрузки, перед рендерингом страницы - записать данные из `data.json` во Vuex и в дальнейшем работать через Vuex.  
Дизайн не имеет значения.  
Использование сторонних готовых компонентов\библиотек не приветствуется.  

## Installing 

```

npm intsall

```

## Run 

```
npm run build
```
```
npm run start
```
