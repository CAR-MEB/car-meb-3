import React from 'react'
import style from './Electro.module.css'

import  Carousel  from 'react-bootstrap/Carousel'

import img1 from '../../../assets/Electro/Electro-1.jpg'
import img2 from '../../../assets/Electro/Electro-2.png'
import img3 from '../../../assets/Electro/Electro-3.jpg'
import img4 from '../../../assets/Electro/Electro-4.jpg'
import img5 from '../../../assets/Electro/Electro-5.jpg'

const Electro = () => {
  return (
    <div className={style.container}>
      <div className={style.block}>
        <div className={style.box}>
          <div className={style.electro}>
             <img className={style.image} src={img1} alt='#'/>
             <div className={style.desc_item}>
                <p className={style.electro_name}>Chevrolet Bolt</p>
                <p className={style.electro_desc}>Это первый в мире автомобиль, подходящий и по своим характеристикам, и по цене для массового потребителя. Он был представлен публике в начале 2016 года. Обновленная версия Chevrolet Bolt 2020 должна позволять владельцам обходиться без подзарядки машины еще дольше — 417 км.</p>
                <p className={style.electro_price}>p 1.5 million</p>
                <p className={style.electro_age}>2016</p>
             </div>
          </div>
        </div>
        <div className={style.slider}>
           <Carousel  data-bs-theme="dark">
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
          <div className={style.electro}>
             <img className={style.image} src={img2} alt='#'/>
             <div className={style.desc_item}>
                <p className={style.electro_name}>Tesla Model 3</p>
                <p className={style.electro_desc}>Коммерческие поставки электрического кроссовера Model X начались в 2015 году, хотя прототип показали еще в 2012 году. Важное отличие машины — двери в форме крыла чайки (сам производитель при этом предпочитает их сравнивать с крыльями сокола, называя Falcon Wing doors).</p>
                <p className={style.electro_price}>р 3 million</p>
                <p className={style.electro_age}>2016</p>
             </div>
          </div>
        </div>
        <div className={style.slider}>
           <Carousel  data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
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
          <div className={style.electro}>
             <img className={style.image} src={img3} alt='#'/>
             <div className={style.desc_item}>
                <p className={style.electro_name}>BMW i3</p>
                <p className={style.electro_desc}>Изначально на этой модели BMW, представленной в 2013 году, можно было проехать без подзарядки 235—255 км. На модернизированной версии 2018 года запас хода — 285—310 км.
Пока это единственный электромобиль компании, однако к 2025 году BMW планирует выпустить 12 полностью электрических моделей.</p>
                <p className={style.electro_price}>р 1 million</p>
                <p className={style.electro_age}>2013</p>
             </div>
          </div>
        </div>
        <div className={style.slider}>
           <Carousel  data-bs-theme="dark">
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
          <div className={style.electro}>
             <img className={style.image} src={img4} alt='#'/>
             <div className={style.desc_item}>
                <p className={style.electro_name}>Kia Niro EV</p>
                <p className={style.electro_desc}>Запас хода этого электрокроссовера, появившегося в продаже в 2018 году, — 240 км или 380 км в зависимости от комплектации.</p>
                <p className={style.electro_price}>р 1.5 million</p>
                <p className={style.electro_age}>2018</p>
             </div>
          </div>
        </div>
        <div className={style.slider}>
           <Carousel  data-bs-theme="dark">
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
              src={img4}
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
          <div className={style.electro}>
             <img className={style.image} src={img5} alt='#'/>
             <div className={style.desc_item}>
                <p className={style.electro_name}> Jaguar I-Pace</p>
                <p className={style.electro_desc}>В рейтинге лучших электромобилей, составленном Top Gear, Jaguar I-Pace занял почетное второе место после Model 3: «Jaguar смело шагает в неизвестность — и добивается успеха. [I-Pace] — быстрый, желанный, стильный внедорожник, который к тому же заряжается от электричества». В отличие от многих других электромобилей Jaguar I-Pace был спроектирован с нуля, речь не идет о доработанной на основе ДВС или «гибрида» модели. Заявленный запас хода — 480 км.</p>
                <p className={style.electro_price}>p7.5 million </p>
                <p className={style.electro_age}>2018</p>
             </div>
          </div>
        </div>
        <div className={style.slider}>
           <Carousel  data-bs-theme="dark">
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
              src={img5}
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

export default Electro
