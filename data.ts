import { IImages } from "./app/types";

export interface IData {
    name: string;
    title: string;
    description: string;
    image: string;
    products: Array<IProduct>;
}
export interface IProduct {
    parentPath: string;
    parentName: string;
    name: string;
    title: string;
    description: string;
    images: Array<string>;
}

export const data: Array<IData> = [
    {
        name: "potolki",
        title: "Натяжные Потолки",
        description:
            "Натяжной потолок — это специальное полотно из различных материалов. Его главная характеристика возможность для натяжения под потолком и закрепления с помощью специальных металлических или платиковых профилей. Используем качественные материалы MSD: Classic, Premium и Evolution. ",
        image: "1.jpg",
        products: [
            {
                parentPath: "potolki",
                parentName: "Натяжные Потолки",
                name: "shadow",
                title: "Теневые Потолки",
                description:
                    "Теневой потолок – это натяжной потолок без плинтуса или вставки, который образует теневой зазор между потолком и стеной с четким темным контуром. Теневое примыкание натяжного потолка к стене выглядит современно и стильно, хорошо сочетается с трендовыми светильниками и трековыми системами. Для монтажа используется спецальный профиль который который создает необходимую 'тень'.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
            },
            {
                parentPath: "potolki",
                parentName: "Натяжные Потолки",
                name: "potolki",
                title: "Обычные Потолки",
                description:
                    "Бюджетный Натяжной потолок с плинтусом или вставкой, которая закрывает примыкание профиля к стене. Быстрый монтаж, можно устанавливать любое освещение. Хорошо герметизирует внутренее пространство от попдание влаги, за счет специальной вставки.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"],
            },
            {
                parentPath: "potolki",
                parentName: "Натяжные Потолки",
                name: "soar",
                title: "Парящие потолки",
                description:
                    "Выполняются с применением специального профиля, позволяющего создать иллюзию будто потолок не касается стен. Он используется для установки подсветки по периметру, в результате создается ощущение, что полотно парит в воздухе незакрепленным. Возможна установка частично на одну или несколько стен, или на определенный участок.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
            },
        ],
    },
    {
        name: "cornise",
        title: "Карнизы",
        description:
            "С натяжным потолком возможно использовать разные карнизы, как встроенные так и накладные. Также можно сделать нишу под карниз, внутри которой можно использовать подсветку.",
        image: "1.jpg",
        products: [
            {
                parentPath: "cornise",
                parentName: "Карнизы",
                name: "gardina",
                title: " Алюминиевый карниз 'gardina'",
                description:
                    "Встроеные алюминиевые карнизы практичные, удобные и красивые. С возможностью встроеной подсветки. Цвет белый или черный. Два или три паза для установки штор. Создается эфект свисание шторы из под потолка.",
                images: [
                    "1.jpg",
                    "2.jpg",
                    "3.jpg",
                    "4.jpg",
                    "5.jpg",
                    "6.jpg",
                    "7.jpg",
                    "8.jpg",
                    "9.jpg",
                    "11.jpg",
                    "10.jpg",
                    "12.jpg",
                    "13.jpg",
                    "14.jpg",
                ],
            },
            {
                parentPath: "cornise",
                parentName: "Карнизы",
                name: "gardina-p",
                title: "Алюминиевый карниз 'gardina' П-образный",
                description:
                    "Профиль для изготовления скрытых П-образных карнизных ниш для установки штор и гардин, цвет белый или черный. С возможностью установки подсветки в специальный паз с рассеивателем, который создает более приятное освещение.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
            },
            {
                parentPath: "cornise",
                parentName: "Карнизы",
                name: "plastic",
                title: "Накладной карниз",
                description:
                    "Более бюджетный вариант чем алюминиевый карниз. Устанавливается на 'закладную' вплотную к наятяжному потолку. Можно использовать любой накладной карниз.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
            },
            {
                parentPath: "cornise",
                parentName: "Карнизы",
                name: "niche",
                title: " Ниша",
                description:
                    "Натяжной потолок на доводится до стены со сстороны окна на растояние около 20см(обговаривается с заказчиком). В эту 'нишу' можно установить любой накладной карниз.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
            },
            {
                parentPath: "cornise",
                parentName: "Карнизы",
                name: "bathroom",
                title: "Алюминиевый карниз в ванную",
                description: "Встроеный алюминиевый карниз с углубление на 3см внутрь потолка, можно установить для шторки в ванную.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
            },
        ],
    },

    {
        name: "ilumination",
        title: "Освещение",
        description:
            "На натяжном потолке более рационально использовать светодиодные светильники, дающие яркий световой поток при небольшой мощности энергопотребления. В процессе работы они нагреваются незначительно и абсолютно безопасны для полотна.",
        image: "1.jpg",
        products: [
            {
                parentPath: "ilumination",
                parentName: "Освещение",
                name: "lamp",
                title: "Люстры",
                description: "В натяжном потолке возможно установить любые люстры от простых до сложных.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"],
            },
            {
                parentPath: "ilumination",
                parentName: "Освещение",
                name: "spot",
                title: "Споты",
                description:
                    "Спот — это накладные или встраиваемые светильник для организации направленного или рассеянного освещения. Направленные светильники — отличное решение, если нужно выделить светом определенную область помещени. Встраиваемые потолочные - светильники интегрируют в отверстия на подвесном потолке. Корпус с поворотным кронштейном фиксируют под полотном так, чтобы на поверхности был виден только световой элемент.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
            },

            {
                parentPath: "ilumination",
                parentName: "Освещение",
                name: "lines",
                title: "Световые линии",
                description:
                    "Их главное достоинство — равномерно и ярко освещают комнату, придают ей стиль. Для создания световых линии используются профили с рассеивателем из свето-прозрачного пластика шириной 30 мм и 50 мм.  ",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
            },
            {
                parentPath: "ilumination",
                parentName: "Освещение",
                name: "light",
                title: "Подсветка",
                description: "Возможность установки подсветки как в заранее поготовленую нишу так и установка вместе с профилем.",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
            },
            {
                parentPath: "ilumination",
                parentName: "Освещение",
                name: "trek",
                title: "Трековое освещение",
                description:
                    "Трековые системы освещения — это системы, в которых светильники крепятся и передвигаются на шинопроводе для создания их индивидуального позиционирования, акцентного освещения. С помощью трековых светильников можно расставлять световые акценты или делать ровную заливку стен, как художник кистью. ",
                images: ["1.jpg", "2.jpg", "3.jpg"],
            },
        ],
    },
    {
        name: "dismantling",
        title: "Демонтаж",
        description: "Демонтаж старого потолка или частичное снятие для установки дополнительного освещения, прокладки кабеля и т.п. ",
        image: "1.jpg",
        products: [],
    },
];

export interface IReview {
    name: string;
    date: string;
    text: string;
    rating: number;
}

export const arrRewiews: Array<IReview> = [
    {
        name: "Сергей",
        date: "14 января 2024",
        text: "Все прошло,сделали хорошо и в срок как договаривались. Рекомендую!",
        rating: 5,
    },
    {
        name: "владимир",
        date: "13 января 2024",
        text: "работа выполнена быстро, качественно, доволен. рекомендую",
        rating: 5,
    },
    {
        name: "Людмила",
        date: "30 декабря 2023",
        text: "Все сделано идеально!!! Советую!!!",
        rating: 5,
    },
    {
        name: "Евгения",
        date: "18 декабря 2023",
        text: "Работа выполнена качественно и быстро. Дополнительно по моей просьбе поменял розетки. Мастер своего дела! Однозначно рекомендую!",
        rating: 5,
    },
    {
        name: "Виктория Макарова",
        date: "14 декабря 2023",
        text: "сделка состоялась,все очень хорошо.работа выполнена быстро и качественно. Мастер приятный молодой человек.Очень советую.",
        rating: 5,
    },
    {
        name: "Дмитрий",
        date: "27 ноября 2023",
        text: "Все четко!",
        rating: 5,
    },
    {
        name: "Сергей Николаевич Ф",
        date: "10 ноября 2023",
        text: "Недорого,быстро качественно.Без договора оказания услуг монтажа. Специалиста советую",
        rating: 5,
    },
    {
        name: "Юлия",
        date: "15 июля 2023",
        text: "Работа выполнена по высшему разряду и за комфортную стоимость! Мастер выполнил все очень быстро, буквально за полдня. Договор был составлен и подписан, всё чётенько) Еще очень понравилось, что мастер вежливый, с ним очень приятно было разговаривать и решать все вопросы. Всем рекомендую!",
        rating: 5,
    },
    {
        name: "Анна",
        date: "5 июля 2023",
        text: "Хочу выразить огромную благодарность за проделанную работу, за профессионализм, все сделано аккуратно, к работе Максим подошёл добросовестно, тщательно. Спасибо Вам. Всем рекомендую!",
        rating: 5,
    },
    {
        name: "Наталья",
        date: "15 июня 2023",
        text: "Ответственный мастер, сделал работу качественно, в срок и не дорого. Рекомендую.",
        rating: 5,
    },
    {
        name: "Оксана",
        date: "1 апреля 2023",
        text: "Очень довольна! Молодой человек очень вежливый, приехал вовремя, сделал замеры. Работа выполнена качественно. Цена приятная. Рекомендую 👍🏻",
        rating: 5,
    },
    {
        name: "Ольга",
        date: "30 марта 2023",
        text: "Услуга оказана. Жалоб нет. Быстро, качественно, цена устраивает, будем обращаться ещё.",
        rating: 5,
    },
];

export const images: Array<IImages> = [
    { src: "dSNq2xnwvSA.jpg", width: 240, height: 180 },
    { src: "e4F_KGo5qAs.jpg", width: 240, height: 180 },
    { src: "fcSWOx-bEG8.jpg", width: 240, height: 180 },
    { src: "IMG_20170312_154452.jpg", width: 240, height: 180 },
    { src: "IMG_20170312_154507.jpg", width: 240, height: 180 },
    { src: "IMG_20170312_154523.jpg", width: 240, height: 180 },
    { src: "IMG_20191223_204542.jpg", width: 240, height: 180 },
    { src: "IMG_20211006_175308.jpg", width: 240, height: 180 },
    { src: "IMG_20211006_175311.jpg", width: 240, height: 180 },
    { src: "IMG_20211006_175322.jpg", width: 240, height: 180 },
    { src: "IMG_20211013_164816.jpg", width: 240, height: 180 },
    { src: "IMG_20211013_170254.jpg", width: 240, height: 180 },
    { src: "IMG_20211013_170316.jpg", width: 240, height: 180 },
    { src: "IMG_20211021_161121.jpg", width: 240, height: 180 },
    { src: "IMG_20211126_135310.jpg", width: 240, height: 180 },
    { src: "IMG_20211207_183143.jpg", width: 240, height: 180 },
    { src: "IMG_20211207_183146.jpg", width: 240, height: 180 },
    { src: "IMG_20211207_183216.jpg", width: 240, height: 180 },
    { src: "IMG_20211207_183225.jpg", width: 240, height: 180 },
    { src: "IMG_20211207_183402.jpg", width: 240, height: 180 },
    { src: "IMG_20220112_145228.jpg", width: 240, height: 180 },
    { src: "IMG_20220121_183634.jpg", width: 240, height: 180 },
    { src: "IMG_20220121_183702.jpg", width: 240, height: 180 },
    { src: "IMG_20220125_164927.jpg", width: 240, height: 180 },
    { src: "IMG_20220226_195805.jpg", width: 240, height: 180 },
    { src: "IMG_20220226_195815.jpg", width: 240, height: 180 },
    { src: "IMG_20220610_131531.jpg", width: 240, height: 180 },
    { src: "IMG_20220715_212836.jpg", width: 240, height: 180 },
    { src: "IMG_20230123_131352.jpg", width: 240, height: 180 },
    { src: "IMG_20230123_131358.jpg", width: 240, height: 180 },
    { src: "IMG_20230123_131425.jpg", width: 240, height: 180 },
    { src: "IMG_20230221_165130.jpg", width: 240, height: 180 },
    { src: "IMG_20230303_192928.jpg", width: 240, height: 180 },
    { src: "IMG_20230816_145721.jpg", width: 240, height: 180 },
    { src: "IMG_20230816_145727.jpg", width: 240, height: 180 },
    { src: "IMG_20230827_151851.jpg", width: 240, height: 180 },
    { src: "IMG_20230827_151905.jpg", width: 240, height: 180 },
    { src: "IMG_20230908_145419.jpg", width: 240, height: 180 },
    { src: "IMG_20230908_145422.jpg", width: 240, height: 180 },
    { src: "IMG_20230908_145506.jpg", width: 240, height: 180 },
    { src: "IMG_20230908_145526.jpg", width: 240, height: 180 },
    { src: "IMG_20230908_145557.jpg", width: 240, height: 180 },
    { src: "IMG_20231004_152438.jpg", width: 240, height: 180 },
    { src: "IMG_20231101_115857.jpg", width: 240, height: 180 },
    { src: "IMG_20231101_115908.jpg", width: 240, height: 180 },
    { src: "IMG_20231103_164726.jpg", width: 240, height: 180 },
    { src: "IMG_20231103_164734.jpg", width: 240, height: 180 },
    { src: "IMG_20231103_164813.jpg", width: 240, height: 180 },
    { src: "IMG_20231222_172153.jpg", width: 240, height: 180 },
    { src: "IMG_20231222_172235.jpg", width: 240, height: 180 },
];
