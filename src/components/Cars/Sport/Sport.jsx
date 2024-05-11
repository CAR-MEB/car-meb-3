import React from 'react'
import style from  './Sport.module.css'

import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../../assets/Sport/Sport-1.webp'
import img2 from '../../../assets/Sport/Sport-2.webp'
import img3 from '../../../assets/Sport/Sport-3.webp'
import img4 from '../../../assets/Sport/Sport-4.webp'
import img5 from '../../../assets/Sport/Sport-5.webp'

const Sport = () => {
  return (
    <div className={style.container}>
      <div className={style.block}>
      <div className={style.box}>
        <div className={style.sport}>
          <img className={style.image} src={img1} alt="#" />
          <div className={style.desc_item}>
            <p className={style.sport_name}>Aston Martin Vanquish</p>
            <p className={style.sport_desc}>Aston Martin Vanquish делают с 6-литровым V12, который даёт тебе мощь в 565 лошадиных сил. Ко всему прочему, эта модель имеет один из самых красивых салонов, который можно купить за деньги.</p>
            <p className={style.sport_price}>p 13 million</p>
            <p className={style.sport_age}>2012</p>
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
        <div className={style.sport}>
          <img className={style.image} src={img2} alt="#" />
          <div className={style.desc_item}>
            <p className={style.sport_name}>Audi R8</p>
            <p className={style.sport_desc}>Audi R8 назван второй Lamborghini Gallardo. Это если учесть, что за твоим сиденьем находится 4,2 литра двигателя V8 с прямым впрыском топлива, способного разогнать от нуля до 100 за каких-то 4 секунды.</p>
            <p className={style.sport_price}>p 3.5 million</p>
            <p className={style.sport_age}>2007</p>
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
        <div className={style.sport}>
          <img className={style.image} src={img3} alt="#" />
          <div className={style.desc_item}>
            <p className={style.sport_name}>GT40</p>
            <p className={style.sport_desc}>GT40, наверное, навсегда оставила своё влияние в автомобильной гоночной истории. Первоначально её разрабатывали с целью недопущения доминирования Феррари на спортивных гонках. Разработка, кстати, совместная. В ней принимали участие США и Британия. Всё прошло дико удачно.</p>
            <p className={style.sport_price}>1.9 million</p>
            <p className={style.sport_age}>1966</p>
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
      <div className={style.sport}>
        <img className={style.image} src={img4} alt="#" />
        <div className={style.desc_item}>
          <p className={style.sport_name}>Bugatti Veyron</p>
          <p className={style.sport_desc}>Вот что происходит, когда крутой суперкар построен правильно с первого раза. 1200 лошадиных сил, 8-литровый силовой двигатель, который может разогнать машину до 434 км/ч. Что с этой машиной будет дальше? Мы можем только надеяться, что будущее у неё блестящее, как и она сама.</p>
          <p className={style.sport_price}>$5.8 million</p>
          <p className={style.sport_age}>2005</p>
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
      <div className={style.sport}>
        <img className={style.image} src={img5} alt="#" />
        <div className={style.desc_item}>
          <p className={style.sport_name}>Corvette ZR1</p>
          <p className={style.sport_desc}>Настоящий воин. Элитный и изысканный суперкар, который вполне может претендовать на звание суперавтомобиля. От нуля до 100 километров – за 3,3 секунды, что заставляет загрустить многих конкурентов в этом автомобильном сегменте рынка. Ну, и конечно, вид у него бесподобный.</p>
          <p className={style.sport_price}>$120 000</p>
          <p className={style.sport_age}>1990</p>
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

export default Sport