import React from 'react'
import style from  './Jeep.module.css'

import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../../assets/Jeep/Jeep-1.jpg'
import img2 from '../../../assets/Jeep/Jeep-2.jpg'
import img3 from '../../../assets/Jeep/Jeep-3.jpg'
import img4 from '../../../assets/Jeep/Jeep-4.jpg'
import img5 from '../../../assets/Jeep/Jeep-5.jpg'

const Jeep = () => {
  return (
    <div className={style.container}>
      <div className={style.block}>
      <div className={style.box}>
        <div className={style.jeep}>
          <img className={style.image} src={img1} alt="#" />
          <div className={style.desc_item}>
            <p className={style.jeep_name}>Jeep Wrangler</p>
            <p className={style.jeep_desc}>Jeep Wrangler оборудуется двумя двигателями, механическими и автоматическими коробками переменных передач и исключительно полным приводом. Благодаря широкому спектру представленных агрегатов, автомобиль становится относительно универсальным и способен удовлетворить большинство потребностей потенциального покупателя.Базовые комплектации Jeep Wrangler оснащаются рядной турбированной бензиновой четверкой объемом 1995 кубических сантиметров. Турбокомпрессор позволил ему развивать 270 лошадиных сил при 5250 об/мин и 400 Нм крутящего момента при 3000 оборотах коленчатого вала в минуту. Данный силовой агрегат работает исключительно в паре с восьмиступенчатой автоматической коробкой передач.
Топовые версии Джип Вранглер оборудуются V-образной атмосферной бензиновой шестеркой объемом 3604 кубических сантиметра. Благодаря такому литражу и современной системе подачи топлива, инженерам удалось выжать 285 лошадиных сил при 6400 об/мин и 353 Нм крутящего момента при 4800 оборотах коленчатого вала в минуту. С таким объемом и системой полного привода не стоит надеяться на экономичность. Расход топлива Jeep Wrangler составит 13,8 литра бензина на сто километров пути в городском темпе движения с частыми ускорениями и торможением, 10,2 литра во время размеренной поездки по загородной трассе и 12,4 литра топлива на сотню в смешанном цикле движения.</p>
            <p className={style.jeep_price}> $16 300</p>
            <p className={style.jeep_age}>2017</p>
          </div>
        </div>
      </div>
        <div className={style.slider}>

          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>

    <div className={style.block}>
      <div className={style.box}>
        <div className={style.jeep}>
          <img className={style.image} src={img2} alt="#" />
          <div className={style.desc_item}>
            <p className={style.jeep_name}>Jeep Wagoneer</p>
            <p className={style.jeep_desc}>Оригинальный Jeep Wagoneer выпускался американской компаний с 1963 по 1993 год и оставил заметный след в ее истории. Новый Wagoneer призван конкурировать с такими крупными внедорожниками как Chevrolet Tahoe, Ford Expedition, Toyota Sequoya. Большой внедорожник с тремя рядами сидений сделан на базе пикапа Dodge RAM 1500. Он имеет в своей основе классическую раму, а схемы подвесок – полностью независимые. Как и старшая, более люксовая модель (Grand Wagoneer), рассматриваемый автомобиль избавился от приставки Jeep в названии и продается как некий отдельный суббренд. Впрочем, визуально – это однозначно Jeep. Гены марки угадываются в «кубической» форме кузова, передней и задней оптике, характерной решетке радиатора с восьмью «джиповскими» прорезями.</p>
            <p className={style.jeep_price}>11 million</p>
            <p className={style.jeep_age}>1963</p>
          </div>
        </div>
      </div>
        <div className={style.slider}>

          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>

    <div className={style.block}>
      <div className={style.box}>
        <div className={style.jeep}>
          <img className={style.image} src={img3} alt="#" />
          <div className={style.desc_item}>
            <p className={style.jeep_name}>Jeep Renegade</p>
            <p className={style.jeep_desc}>Джип Ренегат- это компактный пятиместный городской кроссовер. Его габаритные размеры составляют: длина 3943 мм, ширина 1700 мм, высота 1450 мм, а колесная база- 2478 мм. Что касается дорожного просвета, то он не особо впечатляет, особенно на фоне конкурентов. Под днищем автомобиля остается около 175 миллиметров. Такая посадка позволит ему легче перенести поездку по грунтовке, заехать на небольшой бордюр и не растерять плавность хода на разбитом покрытии. Что касается самой подвески, то она может похвастаться полностью независимой архитектурой. Вкруг установлены гидравлические амортизаторы с винтовыми пружинами и стабилизаторы поперечной устойчивости.Багажник у кроссовера ожидаемо небольшой. При поднятых спинках второго ряда сидений, сзади остается около 351 литра свободного пространства. Для перевозки длинномеров, задним диваном можно пожертвовать и освободить до 1297 литров.</p>
            <p className={style.jeep_price}>1.5 million</p>
            <p className={style.jeep_age}>2014</p>
          </div>
        </div>
      </div>
        <div className={style.slider}>

          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>

    <div className={style.block}>
    <div className={style.box}>
      <div className={style.jeep}>
        <img className={style.image} src={img4} alt="#" />
        <div className={style.desc_item}>
          <p className={style.jeep_name}>Jeep Liberty</p>
          <p className={style.jeep_desc}>Дебют обновленного внедорожника Jeep Liberty 2011 модельного года, известного также под именем Jeep Patriot, состоялся осенью 2010 года. Авто представляет собой рестайлинговую версию предшественника с изменениями в экстерьере, интерьере и некоторых технических аспектах. От предыдущей модели джип отличается иным передним бампером и радиаторной решеткой, а также 17-дюймовыми колесными дисками и выросшим на 2,5 сантиметра клиренсом. Производитель предлагает машину в четырех новых вариантах окраски. Что касается салона, Jeep Liberty 2011 получил новую рулевую колодку и немного улучшенные материалы отделки. Технически обновленный внедорожник  отличается модернизированной подвеской и перенастроенным рулевым управлением. Автомобиль оборудуется 170-сильным двигателем рабочим объемом 2,4 литра. Он позволяет машине развивать скорость в 185 км/ч. Бензиновый силовой агрегат работает в паре с вариаторной трансмиссией. Необходимо отметить, что внедорожник поставляется только в полноприводном варианте.</p>
          <p className={style.jeep_price}>1.2 million </p>
          <p className={style.jeep_age}>2006</p>
        </div>
      </div>
    </div>
      <div className={style.slider}>

        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>

    <div className={style.block}>
    <div className={style.box}>
      <div className={style.jeep}>
        <img className={style.image} src={img5} alt="#" />
        <div className={style.desc_item}>
          <p className={style.jeep_name}>Jeep Grand Wagoneer</p>
          <p className={style.jeep_desc}>История самого большого внедорожника Jeep до настоящего момента была короткой, автомобиль выпускали с 1984 по 1991 годы. Американцы возвращаются к модели в 2021 году – топ-версия современного Wagoneer собирается не только возродить традиции предшественника, но и стать альтернативой конкурентам по североамериканскому рынку в лице Cadillac Escalade, Lincoln Navigator и прочих трехрядных полноразмерных внедорожников. Но это еще не все – именно Grand Wagoneer станет первой моделью Jeep, которая не будет иметь логотипа Jeep на кузове. Тем не менее, снаружи генофонд компании читается. Это определенно Jeep – большой и квадратный, с характерной решеткой радиатора, оптикой и пластикой линий. Приставку Grand оправдывает дорогая отделка – больше хрома, своя диодная оптика, большие и дорогие колесные диски. А внутри – ортодоксальная рамная основа от Dodge RAM 1500, где неразрезной задний мост заменили на многорычажку.</p>
          <p className={style.jeep_price}>117 830$</p>
          <p className={style.jeep_age}>1984</p>
        </div>
      </div>
    </div>
      <div className={style.slider}>

        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
    </div>
  )
}

export default Jeep