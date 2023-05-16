'use strict';

(function () {
  const buttonLeft = document.querySelector('.slider-reviews-button-back');
  const buttonRight = document.querySelector('.slider-reviews-button-next');

  const name = document.querySelector('.name-customer');
  const status = document.querySelector('.status-customer');
  const review = document.querySelector('.review');

  const reviews = [
    {
      image: './img/face-customer.jpg',
      name: 'Елена Новикова',
      status: 'студентка',
      review:
        'Хочу поделиться своими впечатлениями по использованию дивана "Бродвей", заказывала в конце 2016 года. Держится великолепно. Спасибо большое сотрудникам этого чудесного магазина.',
    },
    {
      image: './img/face-customer.jpg',
      name: 'Мария Захарова',
      status: 'домохозяйка',
      review: 'Широкий ассортимент.Рекомендую всем своим подругам.',
    },
    {
      image: './img/face-customer.jpg',
      name: 'Ирина Бочарникова',
      status: 'бизнесмен',
      review: 'Большой выбор офисных кресел.Высокое качество.',
    },
    {
      image: './img/face-customer.jpg',
      name: 'Аркадий Новиков',
      status: 'инженер',
      review:
        'Все электронные изделия с высоким показателем энергоэффективности. Доступные цены. ',
    },
  ];
  let currentIndex = 0;

  buttonLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      name.innerHTML = reviews[currentIndex].name;
      status.innerHTML = reviews[currentIndex].status;
      review.innerHTML = reviews[currentIndex].review;
    }
  });
  buttonRight.addEventListener('click', () => {
    if (currentIndex < reviews.length - 1) {
      currentIndex++;
      name.innerHTML = reviews[currentIndex].name;
      status.innerHTML = reviews[currentIndex].status;
      review.innerHTML = reviews[currentIndex].review;
    }
  });
})();
