const { test, expect } = require('@playwright/test');

test('Test locators on the onliner', async ({ page }) => {
  await page.goto('https://www.onliner.by/');

  await expect(page
    .locator('//*/img[@class="onliner_logo"]'))
    .toBeVisible();

  await expect(page
    .getByRole('link', {name: 'Корзина'}))
    .toBeVisible();

  await expect(page
    .getByRole('link')
    .and(page.getByText('Onlíner Клевер')))
    .toHaveAttribute('href', 'https://clever.onliner.by/?utm_source=onliner&utm_medium=navigation&utm_campaign=clever');
  
  await expect(page
    .locator('.auth-bar__item')
    .and(page.getByTitle('Facebook')))
    .toBeVisible();

  await expect(page
    .locator('ul[class="b-main-navigation"]>li>a>span'))
    .toHaveText(['Каталог', 'Новости', 'Автобарахолка', 'Дома и квартиры', 'Услуги', 'Барахолка', 'Форум']);

  await expect(page
    .locator('li[class="footer-style__item"]')
    .filter({has: page.getByRole('link')}))
    .toHaveCount(11);
  
  await expect(page
    .locator('.footer-style__social > a:nth-child(4)'))
    .toHaveAttribute('href', 'https://youtube.com/onlinerby');

  await expect(page
      .getByText('© 2001—2023 Onlíner'))
      .toBeVisible();

  await page
    .locator('#userbar')
    .filter( {hasText: 'Вход'})
    .click();
  
  await expect(page).toHaveURL('https://www.onliner.by/');

  await expect(page.locator('form > div:nth-child(4) > div')
    .filter({ has: page.locator('.auth-form__link')}))
    .toHaveText(['Зарегистрироваться на Onlíner', 'Я не помню пароль']);

  await page
    .locator('#auth-container')
    .getByText('Войти')
    .click();
  
  await expect(page  
    .locator('.auth-form__field .auth-form__description_error').first()
    .filter( {hasText: 'Укажите ник или e-mail'}))
    .toBeVisible;

  await expect(page.getByPlaceholder('Ник или e-mail'))
    .toHaveClass(/auth-input_error/);

  await expect(page  
    .locator('.auth-form__field .auth-form__description_error')
    .filter( {hasText: 'Укажите пароль'}))
    .toBeVisible;

  await expect(page.getByPlaceholder('Пароль'))
    .toHaveClass(/auth-input_error/);

  await page.locator('.auth-form__close')
    .click();

  await expect(page).toHaveURL('https://www.onliner.by/');

  await page.locator('ul[class="b-main-navigation"]>li>a>span')
    .filter( {hasText: 'Каталог'})
    .click();

  await expect(page.locator('.fast-search__input'))
    .toBeEditable();

  await expect(page).toHaveURL('https://catalog.onliner.by/');

  await page
    .locator('//*[@class="catalog-navigation-classifier__item-title"]')
    .filter({ has: page.locator('span:has-text("Электроника")') })
    .click();

  await page.locator('ul[class="b-main-navigation"]>li>a>span')
    .filter( {hasText: 'Автобарахолка'})
    .click();

  await expect(page).toHaveURL('https://ab.onliner.by/');

  await expect(page
    .getByRole('listitem')
    .filter({has: page.getByRole('link', { name: 'Мото' })}))
    .not.toHaveClass(/project-navigation__item_active/);

  await expect(page
    .locator('.vehicle-form__filter-part')
    .filter({has: page.getByText('Местонахождение')}))
    .toBeVisible();
}); 
