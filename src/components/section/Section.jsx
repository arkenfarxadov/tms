import React, { useState, useEffect } from "react";
import axios from "axios";
import "./section.css"
import img from "../map/Img";
const Section = () => {
    const slides = () => {
        const slid1 = document.querySelector(".sec-1-li");
        const slid2 = document.querySelector(".sec-2-li");
        const slid3 = document.querySelector(".sec-3-li");
        let opacity1 = window.getComputedStyle(slid1).opacity;
        let opacity2 = window.getComputedStyle(slid2).opacity;
        let opacity3 = window.getComputedStyle(slid3).opacity;
        if (opacity1 == 1) {
            slid1.style = "opacity:0.5;margin-left:-100%;filter:blur(10px);"
            slid2.style = "opacity:1;filter:blur(0px);"
        }
        else if (opacity2 == 1) {
            slid1.style = "opacity:0.5;margin-left:-200%;filter:blur(10px);"
            slid2.style = "opacity:0.5;filter:blur(10px);"
            slid3.style = "opacity:1;filter:blur(0px);"
        }
        else if (opacity3 == 1) {
            slid1.style = "opacity:1;margin-left:0%;filter:blur(0px);"
            slid3.style = "opacity:0.5;filter:blur(10px);"
        }
    }
    setInterval(slides, 5000);
    const [openImg, setopenImg] = useState(false);
    const [srcImg, setsrcImg] = useState("");
    const opImg = (e) => {
        setopenImg(true);
        setsrcImg(e.imgSrc);
    }
    const closeImg = () => {
        setopenImg(false)
    }
    useEffect(() => {
        const openFon = document.querySelector(".img-open");
        const imgSrc = document.querySelector(".openImg");
        if (openImg === true) {
            openFon.classList.add("active")
            imgSrc.src = srcImg;
        }
        else {
            setopenImg(false)
            openFon.classList.remove("active")
        }
    })
    useEffect((e) => {
        document.onclick = (e) => {
            if (e.target.className === "img-open active") {
                e.stopPropagation();
                setopenImg(false)
            }
        }
    })
    useEffect((e) => {
        const TOKEN = "5681854911:AAGZ61kjD2Abdd7vfWXllxMKoZXot-fchaI";
        const CHAT_ID = "-1001893866388";
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        document.getElementById("contact-form").addEventListener('submit', function (e) {
            e.preventDefault();
            let mes = `<b>Новая заявка c сайта</b>\n`;
            mes += `<b>Имя: </b>${this.name.value}\n`;
            mes += `<b>Фамилия: </b>${this.surname.value}\n`;
            mes += `<b>Название компании: </b>${this.nameCompany.value}\n`;
            mes += `<b>Номер телефона: </b>${this.phoneNumber.value}\n`;
            mes += `<b>Сообщение: </b>${this.message.value}`;
            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: "HTML",
                text: mes
            })
                .then((res) => {
                    this.surname.value = "";
                    this.name.value = "";
                    this.nameCompany.value = "";
                    this.phoneNumber.value = "";
                    this.message.value = "";
                    alert("Заявка оставлена");

                })
                .catch((error) => {
                    console.log("Ошибка");
                })
                .finally(() => {
                    console.log("Конец");

                })
        })
    })
    useEffect(() => {
        let images = document.images,
            images_total = images.length,
            images_loaded_count = 0,
            preloader = document.querySelector(".loading"),
            perc_display = document.querySelector(".procent");
        for (var i = 0; i < images_total; i++) {
            let image_clone = new Image();
            image_clone.onload = image_loaded;
            image_clone.onerror = image_loaded;
            image_clone.src = images[i].src;
        }
        function image_loaded() {
            images_loaded_count++;
            perc_display.innerHTML = (((100 / images_total) * images_loaded_count) << 0) + "%";
            if (images_loaded_count >= images_loaded_count) {
                for (let i = 0; i <= images_loaded_count; i++) {
                    if (i == 34) {
                        preloader.classList.remove("active")
                    }
                }
            }
        }
    })
    return (
        <>
            <div className="loading active">
                <span>
                    <h2 className="load-text">Track Monitoring System</h2>
                    <h1 className="procent">0%</h1>
                </span>
            </div>
            <div className="block-lin"></div>
            <section className="sec-1">
                <ul className="sec-1-ul">
                    <li className="sec-1-li"></li>
                    <li className="sec-2-li"></li>
                    <li className="sec-3-li"></li>
                </ul>
            </section>
            <div className="block-lin"></div>
            <section className="sec-2" id="1">
                <div className="container">
                    <div className="img-sec-2">
                        <span><img src="img-1-sec-2.png" alt="" /></span>
                        <span><img src="img-2-sec-2.png" alt="" /></span>
                        <span><img src="img-3-sec-2.png" alt="" /></span>
                        <span><img src="img-4-sec-2.png" alt="" /></span>
                        <span><img src="img-5-sec-2.png" alt="" /></span>
                    </div>
                    <div className="text-sec-2">
                        <p>О КОМПАНИИ</p>
                        <h1>«Track Monitoring Group» c момента образования занимается исключительно предоставлением услуг спутникового мониторинга транспорта, это обусловлено стремлением стать самой профессиональной командой Каракалпакистана в данной отрасли!

                            За это время мы наладили эффективное сотрудничество с лучшими мировыми производителями оборудования, построили обширную дилерскую сеть и стали надежным партнером для множества крупнейших компаний Каракалпакистана.

                            Такая высокая степень доверия к нашей Компании была заслужена путем предоставления высококлассного сервиса, квалифицированного подхода к решению задач клиентов и внимательного отношения к пожеланиям наших партнеров!
                        </h1>
                        <h2>СИСТЕМЫ GPS МОНИТОРИНГА ТРАНСПОРТА ОТ «TMS» - ЭТО ГОТОВЫЕ РЕШЕНИЯ, ПРЕДНАЗНАЧЕННЫЕ ДЛЯ ОПТИМИЗАЦИИ ЗАТРАТ И ПОВЫШЕНИЯ ЭФФЕКТИВНОСТИ ИСПОЛЬЗОВАНИЯ ВАШЕГО АВТОПАРКА</h2>
                        <h1>Для предприятия система мониторинга является инструментом, позволяющим отслеживать перемещение транспорта, контролировать работу автопарка, своевременно выявлять нарушения. Высокая степень контроля топлива позволит снизить затраты на содержание транспорта за счет уменьшения пробега и расхода ГСМ, пресечь хищения топлива и нецелевое использование техники, а также оптимизировать работу сотрудников, повысить безопасность перевозок и технологических процессов.
                        </h1>

                    </div>
                    <div className="text-2-sec-2">
                        <span><p>ПОВЫШЕНИЕ ЭФФЕКТИВНОСТИ ТРУДА</p></span>
                        <span><p>СНИЖЕНИЕ ЗАТРАТ НА АВТОПАРК ДО 40%</p></span>
                        <span><p>ЭКОНОМИЯ ТОПЛИВА</p></span>
                        <span><p>ПОВЫШЕНИЕ БЕЗОПАСНОСТИ ПЕРЕВОЗОК</p></span>
                        <span><p>ОПТИМИЗАЦИЯ МАРШРУТОВ, ВЫЯВЛЕНИЕ НАРУШЕНИЙ</p></span>
                    </div>
                </div>
            </section>
            <div className="block-lin"></div>
            <section className="sec-3">
                <div className="container">
                    <div className="sec-3-text">
                        <p>ПРЕИМУЩЕСТВА ОТ СОТРУДНИЧЕСТВА ИМЕННО С НАМИ:</p>
                        <ul>
                            <li>«TMS» 5 Лет</li>
                            <li>«TMS» предлагает только проверенное высококачественное оборудование, сопровождаемое реальными гарантийными обязательствами;</li>
                            <li>Обслуживание клиентов производится посредством лучшего в мире программного обеспечения «Wialon Local»;</li>
                            <li>Множество программных настроек и фильтров нашего программного обеспечения позволяют получать отчеты с максимально точными маршрутами и минимальными погрешностями в показаниями, причем даже не заходя в программу;</li>
                            <li>Обучение и профессиональные консультации, неограниченная техническая поддержка;</li>
                            <li>Склады с постоянным наличием оборудования и гибкость в работе с партнерами;</li>
                            <li>Комплексные решения по контролю за транспортом, начиная от постановки задачи, поиска решений, планирования установки и наладки оборудования, до запуска системы мониторинга и обслуживания клиентов. С помощью наших решений - крайне просто контролировать эффективное, целевое и бережное использование транспортных средств и расходных материалов.</li>
                        </ul>
                        <h1>Cистема мониторинга транспорта и контроля расхода топлива от «TMS» - важнейший инструмент, позволяющим Руководителю любой Компании принимать стратегически верные решения для оптимизации управления автопарком.</h1>
                    </div>
                </div>
            </section>
            <div className="block-lin"></div>
            <section className="sec-4" id="2">
                <div className="container">
                    <div className="sec-4-container">
                        <div className="sec-4-1">
                            <iframe src="https://www.youtube.com/embed/QdiewQhMl04" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="sec-4-2">
                            <div>
                                <span>
                                    <h1>ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ</h1>
                                </span>
                                <ul>
                                    <li>Wialon Local работает в TAS-IX</li>
                                    <li>Современная система GPS /ГЛОНАСС мониторинга</li>
                                    <li>Широкие технические возможности</li>
                                    <li>Максимально удобный в использовании интерфейс</li>
                                    <li>Отличная скорость работы</li>
                                    <li>Непревзойденная надежность хранения данных</li>
                                    <li>Оптимальная совместимость с различными видами оборудования</li>
                                    <li>Уникальное мобильное приложение</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sec-4-container-2">
                        <div className="sec-4-logo">
                            <div>
                                <span>
                                    <h1><i className="fa fa-list-ol" aria-hidden="true"></i></h1>
                                </span>
                                <span>
                                    <h1>WIALON - ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ № 1
                                        <br />
                                        В МИРЕ</h1>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <h1><i className="fa fa-usd" aria-hidden="true"></i></h1>
                                </span>
                                <span>
                                    <h1>ДОЛЯ РЫНКА СНГ
                                        <br />
                                        42%</h1>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <h1><i className="fa fa-user-plus" aria-hidden="true"></i></h1>
                                </span>
                                <span>
                                    <h1>К WIALON ПОДКЛЮЧЕНО БОЛЕЕ
                                        <br />
                                        3 000 000 ОБЪЕКТОВ</h1>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <h1><i className="fa fa-globe" aria-hidden="true"></i></h1>
                                </span>
                                <span>
                                    <h1>WIALON ИСПОЛЬЗУЮТ В
                                        <br />ё
                                        132 СТРАНАХ</h1>
                                </span>
                            </div>
                        </div>
                        <div className="sec-4-info">
                            <div className="sec-4-img">
                                <img src="sec-4-img.png" alt="" />
                            </div>
                            <ul className="sec-4-text">
                                <li>С помощью данной программы Вы сможете контролировать автомобили в режиме реального времени, отправлять команды (например, блокировку двигателя), программа может строить треки и отчеты за интересующий интервал и самостоятельно отправлять на Ваш e-mail.</li>
                                <li>Wialon Local вобрал в себя всё самое лучшее от существующих облачных решений: богатый функционал, для работы с которым не требуется клиентское ПО - пользователи могут контролировать свой транспорт через сайт оператора с любого компьютера, планшета или смартфона.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="block-lin"></div>
            <section className="sec-5" id="3">
                <div className="container">
                    <div className="sec-5-t">
                        <h1>ВОЗМОЖНОСТИ GPS МОНИТОРИНГА</h1>
                    </div>
                    <div className="sec-5-container">
                        <div>
                            <span><i className="fa fa-location-arrow" aria-hidden="true"></i></span>
                            <h1>КОНТРОЛЬ ТЕКУЩЕГО МЕСТОПОЛОЖЕНИЯ ТРАНСПОРТА</h1>
                            <ul>
                                <li>Выявление несанкционированных рейсов</li>
                                <li>Соблюдение разрешенных маршрутов</li>
                                <li>Локатор - возможность выборочного слежения за объектами без необходимости отдельной авторизации в системе мониторинга</li>
                            </ul>
                        </div>
                        <div>
                            <span><i className="fa fa-search-minus" aria-hidden="true"></i></span>
                            <h1>КОНТРОЛЬ РАСХОДА ТОПЛИВА С ИСПОЛЬЗОВАНИЕМ ДАТЧИКА УРОВНЯ ТОПЛИВА</h1>
                            <ul>
                                <li>Учёт заправок/сливов топлива</li>
                                <li>Выявление случаев повышенного расхода</li>
                                <li>Определение фактических норм расхода топлива</li>
                            </ul>
                        </div>
                        <div>
                            <span><i className="fa fa-line-chart" aria-hidden="true"></i></span>
                            <h1>КОНТРОЛЬ ПРОБЕГА ТРАНСПОРТНОГО СРЕДСТВА</h1>
                            <ul>
                                <li>Автоматическое оповещение о необходимости прохождения ТО</li>
                                <li>Возможность расчёта с заказчиком по километражу</li>
                                <li>Исключение махинаций со спидометром</li>
                            </ul>
                        </div>
                        <div>
                            <span><i className="fa fa-map-o" aria-hidden="true"></i></span>
                            <h1>КОНТРОЛЬ НАД ПОСЕЩЕНИЕМ ОБОЗНАЧЕННЫХ ГЕОЗОН</h1>
                            <ul>
                                <li>Контроль выполнения маршрутного задания</li>
                                <li>Создание POI</li>
                                <li>Несанкционированный выезд за обозначенную зону</li>
                                <li>Несанкционированный въезд в запрещённые зоны</li>
                            </ul>
                        </div>
                        <div>
                            <span><i className="fa fa-spinner" aria-hidden="true"></i></span>
                            <h1>КОНТРОЛЬ НАД СОБЛЮДЕНИЕМ СКОРОСТНОГО РЕЖИМА</h1>
                            <ul>
                                <li>Отслеживание параметров движения</li>
                                <li>Обеспечение безопасности грузопассажирских перевозок</li>
                            </ul>
                        </div>
                        <div>
                            <span><i className="fa fa-id-card-o" aria-hidden="true"></i></span>
                            <h1>КОНТРОЛЬ НАД ДЕЯТЕЛЬНОСТЬЮ ВОДИТЕЛЕЙ</h1>
                            <ul>
                                <li>Выявление простоев, нарушение графика</li>
                                <li>Выявление агрессивного вождения</li>
                                <li>Повышение дисциплины и аккуратности водителей</li>
                                <li>Идентификация водителей с помощью электронных ключей</li>
                                <li>Выявление махинаций с чеками, отчётностью, приписками пробега</li>
                                <li>ECO driving - Функциональный модуль для определения качества вождения (значение ускорения, торможения, момент поворота)</li>
                            </ul>
                        </div>
                        <div>
                            <span><i className="fa fa-cog" aria-hidden="true"></i></span>
                            <h1>КОНТРОЛЬ РАБОТЫ ДОПОЛНИТЕЛЬНОГО ОБОРУДОВАНИЯ</h1>
                            <ul>
                                <li>Учёт времени и режимов работы любых механизмов и агрегатов: двигателя автомобиля, генераторов, компрессоров, кранов, навесного оборудования и т.д.</li>
                                <li>Удалённое блокирование системы запуска автомобиля (иммобилайзер)</li>
                                <li>Мониторинг температуры в рефрижераторах</li>
                                <li>Подключение CAN к шине</li>
                            </ul>
                        </div>
                        <div>
                            <span><i className="fa fa-cog" aria-hidden="true"></i></span>
                            <h1>СОСТАВЛЕНИЕ АНАЛИТИЧЕСКИХ ОТЧЕТОВ ПО ВСЕМ ПАРАМЕТРАМ РАБОТЫ АВТОТРАНСПОРТА</h1>
                            <ul>
                                <li>Функция "Быстрый отчёт" за выбранный период времени</li>
                                <li>Автоматическое уведомление по e-mail о нарушениях указанных событий</li>
                                <li>Формирование собственных шаблонов отчётов</li>
                                <li>Анализ полученных данных посредством широкого набора табличных и графических отчётов</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="block-lin"></div>
            <section className="sec-6">
                <div className="img-open">
                    <span className="span-open-img">
                        <img className="openImg" src="" alt="" />
                        <button className="btn-close-img" onClick={closeImg}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </span>

                </div>
                <div className="sec-6-img">
                    {img.map(item => {
                        return (
                            <span className="sec-6-span" key={item.id}>
                                <img onClick={() => opImg(item)} src={item.imgSrc} alt="" key={item.id} />
                            </span>
                        )
                    })}
                </div>
            </section>
            <div className="block-lin"></div>
            <section className="sec-7" id="4">
                <div className="container">
                    <div className="sec-7-t">
                        <h1>ОБОРУДОВАНИЕ</h1>
                    </div>
                    <div className="sec-7-container">
                        <div>
                            <div className="sec-7-1">
                                <h1>МОНИТОРИНГ ТРАНСПОРТА</h1>
                                <h2>GPS ТРЕКЕР TELTONIKA FMB 920</h2>
                                <h3>Устанавливается на транспортные средства, имеющие пластиковую
                                    приборную панель, без подключения датчика уровня топлива</h3>
                                <ul>
                                    <li><img src="sec-7-img-1.png" alt="" /></li>
                                    <li><img src="sec-7-img-2.png" alt="" /></li>
                                    <li><img src="sec-7-img-3.png" alt="" /></li>
                                    <li><img src="sec-7-img-4.png" alt="" /></li>
                                </ul>
                            </div>
                            <div className="sec-7-2">
                                <img src="FMB920.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="sec-7-1">
                                <h1>МОНИТОРИНГ ТРАНСПОРТА С КОНТРОЛЕМ ТОПЛИВА</h1>
                                <h3>Удаленный контроль расхода топлива возможен после установки
                                    GPS трекера FMB 125 и датчиков уровня топлива на выбор
                                    OMNICOMM LLS 5 или ЭСКОРТ ТД 150</h3>
                                <h2>GPS ТРЕКЕР TELTONIKA FMB 125</h2>
                                <h3>Устанавливается на любое транспортное средство,
                                    с подключением до 5 датчиков уровня топлива</h3>
                                <ul>
                                    <li><img src="sec-7-img-1.png" alt="" /></li>
                                    <li><img src="sec-7-img-2.png" alt="" /></li>
                                    <li><img src="sec-7-img-3.png" alt="" /></li>
                                    <li><img src="sec-7-img-4.png" alt="" /></li>
                                    <li><img src="sec-7-img-5.png" alt="" /></li>
                                </ul>
                            </div>
                            <div className="sec-7-2">
                                <img src="FMB125.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="block-lin"></div>
            <section className="sec-8">
                <div className="container">
                    <div className="sec-8-container">
                        <div className="sec-8-1">
                            <span><img src="sec-8-1.png" alt="" /></span>
                            <span>
                                <h1>БЕСПРОВОДНОЙ ДАТЧИК УРОВНЯ ТОПЛИВА <b>ЭСКОРТ TD-BLE</b></h1>
                                <ul className="sec-8-ul">
                                    <li>Экономия времени на установку датчика</li>
                                    <li>Отсуствие вандализма связанного с проводами</li>
                                    <li>Литий-тионилхлоридная батарея со сроком работы более 7 лет</li>
                                    <li>Корпус датчика оснащен дополнительным защитным кожухом из ударапрочного полиамида, стойкого к механическим повреждениям</li>
                                </ul>
                            </span>
                        </div>
                        <div className="sec-8-1">
                            <span><img src="sec-8-2.png" alt="" /></span>
                            <span>
                                <h1>ДАТЧИК УРОВНЯ ТОПЛИВА <b>ЭСКОРТ ТД 150</b></h1>
                                <ul className="sec-8-ul">
                                    <li>Это высокоточный датчик уровня топлива, предназначенный для измерения уровня топлива в топливном баке транспортного средства. Датчик подключается к терминалу системы мониторинга транспорта и передает на него значения уровня топлива.</li>
                                    <li>
                                        <ul className="sec-8-2-ul">
                                            <li>Степень защиты корпуса: <b>IP 67</b></li>
                                            <li>Интерфейс: <b>RS-485 A,F</b></li>
                                            <li>Напряжения питания: <b>9-50В</b></li>
                                            <li>Потребляемый ток не более: <b>30 mA</b></li>
                                        </ul>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="block-lin"></div>
            <section className="contact" id="zayavka">
                <div className="contact-container">
                    <div className="contact-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.458123885695!2d59.61867171578713!3d42.460544279180304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf8d6f18c260a357!2zNDLCsDI3JzM4LjAiTiA1OcKwMzcnMTUuMSJF!5e0!3m2!1sru!2s!4v1667068020156!5m2!1sru!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="container">
                        <div className="contact-2">
                            <div className="contact-2-1">
                                <div>
                                    <span>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <h1>Локация</h1>
                                        <h2>sh.Nukus A.Dosnazarov ko'shesi</h2>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <h1>Email:</h1>
                                        <h2>gpsnukustms@gmail.com</h2>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        <h1>Номер:</h1>
                                        <h2>+998930959595</h2>
                                    </span>
                                </div>
                            </div>
                            <div className="contact-2-2">
                                <form className="contact-form" id="contact-form">
                                    <div className="contact-input">
                                        <input type="text" autoComplete="off" name="name" placeholder="Имя" required />
                                        <input type="text" autoComplete="off" name="surname" placeholder="Фамилия" required />
                                        <input type="text" autoComplete="off" name="nameCompany" placeholder="Название компании (необязательно)" />
                                        <input type="tel" autoComplete="off" name="phoneNumber" placeholder="Номер телефона" required />
                                    </div>
                                    <div className="contact-textarea">
                                        <textarea name="message" cols="30" rows="10" placeholder="Сообщение (необязательно)"></textarea>
                                    </div>
                                    <button type="submit">Оставить заявку</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="container-footer">
                        <div className="footer-btn">
                            <ul>
                                <a href="#1">О компании</a>
                                <a href="#2">Программное обеспечение</a>
                                <a href="#3">Возможности</a>
                                <a href="#4">Оборудование</a>
                            </ul>
                        </div>
                        <div className="footer-line"></div>
                        <div className="footer-blok">
                            <div className="footer-blok-1">
                                <div className="footer-logo">
                                    <img src="/TMS.png" alt="" />
                                </div>
                                <div className="footer-url-soc">
                                    <ul>
                                        <a target="_blank" href="https://t.me/TrackMonitoringGps"><i className="fa fa-telegram" aria-hidden="true"></i></a>
                                        <a target="_blank" href="https://www.instagram.com/gpsnukus/"><i className="fa fa-instagram    " aria-hidden="true"></i></a>

                                    </ul>
                                </div>
                            </div>
                            <div className="footer-blok-2">
                                <ul>
                                    <li>
                                        <b>Локация:</b>
                                        <p>sh.Nukus A.Dosnazarov ko'shesi</p>
                                    </li>
                                    <li>
                                        <b>Email:</b>
                                        <p>gpsnukustms@gmail.com</p>
                                    </li>
                                    <li>
                                        <b>Номер:</b>
                                        <p>+998930959595</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-line footer-line2"></div>
                        <div className="footer-last">
                            <b>© 2022</b><p><a target={"_blank"} href="https://www.instagram.com/arken.farxadov/">@ArkenFarxadov</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Section;