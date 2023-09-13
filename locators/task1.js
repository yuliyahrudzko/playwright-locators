  //xpath
  await page.locator('//*/img[@class="onliner_logo"]'); // -1   + 
  await page.locator('//*/input[contains(@class, "fast-search__input")]'); // -2
  await page.locator('//*[@class="footer-style__item"][3]'); // -3

  //css
  await page.locator('img[class="onliner_logo"]'); //-1
  await page.locator('.fast-search__input'); // -2  + 
  await page.locator('.footer-style__item:nth-child(3)');  //-3   
  await page.locator('.auth-form__close'); // -4  +

  //getByText
  await page.getByText('© 2001—2023 Onlíner'); // 5  +

  await page
    .locator('#auth-container')
    .getByText('Войти');// -18

  //getByPlaceholder
  await page.getByPlaceholder('Ник или e-mail'); // -6  +
  await page.getByPlaceholder('Пароль'); // -7  +
  await page.getByPlaceholder('Промокод'); //-8

  //getByRole
  await page.getByRole('link', {name: 'Корзина'}); // -9  +
  await page.getByRole('link', {name: 'каталог'}); // -10
  await page.getByRole('button', { name: 'Войти'}); // -18 

  //.and
  await page.getByRole('link').and(page.getByText('Onlíner Клевер'));// -12  +
  await page.getByRole('button').and(page.locator('.fast-search__submit')); // -13  
  await page.locator('.auth-bar__item').and(page.getByTitle('Facebook')); // -14  +

  //.or 
  //Если вы хотите выбрать один из двух или более элементов и не знаете,
  //какой именно, используйте locator.or() для создания локатора, соответствующего любой из альтернатив.
  //const errorMessage = page.getByText('Неверный логин или пароль');
  //const dialog = page.locator('.auth-form > .auth-container');
  //await expect(errorMessage.or(dialog)).toBeVisible();

  //if (await dialog.isVisible())
  //  await page.locator('.recaptcha-checkbox-border').click();
  //await expect(errorMessage).toBeVisible();

  //filter by another locator
  await page
    .locator('//*[@class="catalog-navigation-classifier__item-title"]')
    .filter({ has: page.locator('span:has-text("Электроника")') }); // -15  +

  await page
    .getByRole('listitem')
    .filter({has: page.getByRole('link', { name: 'Мото' })}); // -16  +

  await page
    .locator('.vehicle-form__filter-part')
    .filter({has: page.getByText('Местонахождение')}); //-17  +

  await page
    .locator('#auth-container')
    .filter({has: page.getByText('Войти')}); // -18  +
    
  //filter by text
  await page
    .getByRole('listitem')
    .filter( { hasText: 'Зроблена ў Беларусі' }); // -19

  await page
    .locator('#userbar')
    .filter( {hasText: 'Вход'}); // -20  +

  await page  
    .locator('.auth-form__field .auth-form__description_error')
    .first()
    .filter( {hasText: 'Укажите ник или e-mail'}) // -21  +

  await page  
    .locator('.auth-form__field .auth-form__description_error')
    .filter( {hasText: 'Укажите пароль'}) // -26  +

  await page.locator('ul[class="b-main-navigation"]>li>a>span')
    .filter( {hasText: 'Каталог'})// -27  +

 await page.locator('ul[class="b-main-navigation"]>li>a>span')
    .filter( {hasText: 'Автобарахолка'})// -28  +

  //локатор, который вернёт список элементов
  await page.locator('ul[class="b-main-navigation"]>li>a>span'); // -22  +

  await page.locator('li[class="footer-style__item"]') 
    .filter({ has: page.getByRole('link') }); // -23  +

  await page.locator('form > div:nth-child(4) > div')
    .filter({ has: page.locator('.auth-form__link')}); // -24  +

  //n-й элемент из списка
  await page
    .locator('.footer-style__social')
    .getByRole('link')
    .locator('nth=3');// -25

  await page.locator('.footer-style__social > a:nth-child(4)'); // -25  +
