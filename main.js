let bonusList = [];
const bonusContent = document.getElementById('bonusContent');
bonusContent.onclick = modalFunc;
function viewBonus(item) {
  const cart = document.createElement('div');
  cart.className = 'bonus__content__cart';
  cart.dataset.id = item.id;
  const aside = document.createElement('div');
  aside.className = 'bonus__content__cart__aside';
  aside.dataset.id = item.id;
  const info = document.createElement('div');
  info.className = 'bonus__content__cart__info';
  info.dataset.id = item.id;
  const cartHead = document.createElement('h6');
  cartHead.className = 'bonus__content__cart__info__head';
  cartHead.textContent = 'Bonus';
  cartHead.dataset.id = item.id;
  const amount = document.createElement('h6');
  amount.className = 'bonus__content__cart__info__amount';
  amount.textContent = item.amount;
  amount.dataset.id = item.id;
  const codeHead = document.createElement('h6');
  codeHead.className = 'bonus__content__cart__info__headcode';
  codeHead.textContent = 'Bonus code';
  codeHead.dataset.id = item.id;
  const wrap = document.createElement('div');
  wrap.className = 'bonus__content__cart__info__wrap';
  wrap.dataset.id = item.id;
  const code = document.createElement('h6');
  code.className = 'bonus__content__cart__info__wrap__code';
  code.textContent = item.code;
  const img = document.createElement('img');
  img.src = '/public/img/copy.png';
  img.alt = 'copy';
  img.className = 'bonus__content__cart__info__wrap__copy';

  wrap.append(code, img);
  info.append(cartHead, amount, codeHead, wrap);
  cart.append(aside, info);
  bonusContent.append(cart);
}

function modalFunc(e) {
  if (
    e.target.classList.contains('bonus__content__cart') ||
    e.target.parentNode.classList.contains('bonus__content__cart') ||
    e.target.parentNode.parentNode.classList.contains('bonus__content__cart')
  ) {
    const modal = document.getElementById('modal');
    const result = document.getElementById('result');
    const found = bonusList.find(
      ({ id }) => id === Number(e.target.dataset.id)
    );
    result.textContent = found.amount;
    modal.classList.remove('hidden');
  }
}

window.onclick = function (e) {
  if (e.target.classList.contains('modal')) {
    e.target.classList.add('hidden');
  }
};

fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    bonusList = [...data];
    data.map((item) => viewBonus(item));
  })
  .catch((err) => alert(err));

fetch('data.json')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
