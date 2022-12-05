import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import BannerSwiper from "../components/BannerSwiper"
import Form from "../components/Form"
import Header from "../components/Header"
import Modal from "../components/Modal"
import RoomSwiper from "../components/RoomSwiper"
import MyButton from "../components/UI/MyButton/MyButton"
import MyInput from "../components/UI/MyInput/MyInput"



function Main() {
  
  const [modalActive, setModalActive] = useState(false)

  return (
    <div>
      <Header setActive={setModalActive}>
      </Header>
      <Modal active={modalActive} setActive={setModalActive}>
        <Form>
        <a className="myForm_callto" href='callto:+380680434447'>
          <Image alt='call' src='/phonecall.png' width='54' height='54'/>
        </a>
        <h2 className="modal_title">Зворотній зв'язок</h2>
        <MyInput type='text' placeholder="Введіть ваше ім'я"/>
        <MyInput type='text' placeholder="Введіть ваш номер телефону"/>
        <MyButton>Надіслати контакти</MyButton>
        </Form>
      </Modal>
      
      <div className="banner">
        <div className="banner_box">
          <h1 className="banner_title">Знайдіть у нас свій простір</h1>
          <div className="banner_choose">
            <p className="banner_p">Обирайте комфорт</p>
            <button onClick={() => setModalActive(true)} className="banner_btn">Знайдіть нас</button>
          </div>
        </div>
        <BannerSwiper/>
      </div>

      <div className="room">
        <div className="container">
          <div className="room_inner">
            <h3 className="h3 room_title">
              Максмально комфортна робоче місце
            </h3>
            <p className="room_p">
              Ми впевнені, що ви знайдете робоче місце на свій смак. Ми подбаємо про те, щоб вам було комфортно.<a href="#"> Виберіть своє місце</a>
            </p>
          </div>
        </div>
        <RoomSwiper/>
      </div>

      <div className="clients">
        <div className="container">
        <div className="clients_inner">
          <div className="clients_white">
            <h3 className="h3 clients_title">
              Чому Коворкінг?
            </h3>
            <p className="  ">
            Ви завжди зможете бути на крок попереду своїх конкурентів, перебуваючи в колі однодумців.
            </p>
            <div className="clients_box">
              <b>600+</b>
              <p>Ruang Kerja di seluruh Indonesia</p>
            </div>
            <div className="clients_box">
              <b>135+</b>
              <p>Staff yang siap membantu Andaa</p>
            </div>
          </div>
          <div className="clients_accent">
            <div className="clients_wrap">
                <div className="clients_imgDiv">
                  <img src="/clientsSvgs/calendar.svg"/>
                </div>
                <div className="clients_text">
                  <h4 className="h4 clients_subtitle">
                    Reservasi Mudah
                  </h4>
                  <p>Proses pemesanan ruang kerja hanya membutuhkan waktu kurang dari 2 menit.</p>
                </div>
            </div>
            <div className="clients_wrap">
                <div className="clients_imgDiv">
                  <img src="/clientsSvgs/clock.svg"/>
                </div>
                <div className="clients_text">
                  <h4 className="h4 clients_subtitle">
                    Reservasi Mudah
                  </h4>
                  <p>Proses pemesanan ruang kerja hanya membutuhkan waktu kurang dari 2 menit.</p>
                </div>
            </div>
            <div className="clients_wrap">
                <div className="clients_imgDiv">
                  <img src="/clientsSvgs/home.svg"/>
                </div>
                <div className="clients_text">
                  <h4 className="h4 clients_subtitle">
                    Reservasi Mudah
                  </h4>
                  <p>Proses pemesanan ruang kerja hanya membutuhkan waktu kurang dari 2 menit.</p>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="cases">
        <div className="container">
          <h3 className="h3 cases_h3">Ruang Kerja di dekatmu</h3>
          <div className="cases_inner">
            <Link href="/users" className="cases_item">
              <div className="cases_onHover">Обирайте</div>
              <img src='/casesImgs/case1.jpg'/>
              <b>Summer Tower</b>
              <p>Jl. Lorem Ipsum no.62, Wakanda Universe</p>
              <span>Rp 150.000 <b>/ hari</b></span>
            </Link>
            <Link href='/users' className="cases_item">
              <div className="cases_onHover">Обирайте</div>
              <img src='/casesImgs/case2.jpg'/>
              <b>Summer Tower</b>
              <p>Jl. Lorem Ipsum no.62, Wakanda Universe</p>
              <span>Rp 150.000 <b>/ hari</b></span>
            </Link>
            <Link href='/users' className="cases_item">
              <div className="cases_onHover">Обирайте</div>
              <img src='/casesImgs/case3.jpg'/>
              <b>Summer Tower</b>
              <p>Jl. Lorem Ipsum no.62, Wakanda Universe</p>
              <span>Rp 150.000 <b>/ hari</b></span>
            </Link>
            <Link href='/users' className="cases_item">
              <div className="cases_onHover">Обирайте</div>
              <img src='/casesImgs/case1.jpg'/>
              <b>Summer Tower</b>
              <p>Jl. Lorem Ipsum no.62, Wakanda Universe</p>
              <span>Rp 150.000 <b>/ hari</b></span>
            </Link>
            <Link href='/users' className="cases_item">
              <div className="cases_onHover">Обирайте</div>
              <img src='/casesImgs/case2.jpg'/>
              <b>Summer Tower</b>
              <p>Jl. Lorem Ipsum no.62, Wakanda Universe</p>
              <span>Rp 150.000 <b>/ hari</b></span>
            </Link>
            <Link href='/users' className="cases_item">
              <div className="cases_onHover">Обирайте</div>
              <img src='/casesImgs/case3.jpg'/>
              <b>Summer Tower</b>
              <p>Jl. Lorem Ipsum no.62, Wakanda Universe</p>
              <span>Rp 150.000 <b>/ hari</b></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="help">
        <div className="container">
          <div className="help_inner">
            <div className="help_accent">
              <div className="help_blockquote"></div>
              <h2 className="help_title">Apa kata mereka tentang ruang kerja</h2>
            </div>
            <div className="help_white">
              <h3 className="h3 help_subtitle">
              Help us improve our productivity
              </h3>
              <p className="p help_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="help_social">
                <a href="#">
                  <img src='/socialIcons/instagram.svg'/>
                </a>
                <a href="#">
                  <img src='/socialIcons/telegram.svg'/>
                </a>
                <a href="#">
                  <img src='/socialIcons/instagram.svg'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Main