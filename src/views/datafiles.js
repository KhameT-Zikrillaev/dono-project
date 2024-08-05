
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~products photo~~~~~~~~~~~~~~~~~~~~~~~~~
import photo1 from '@/assets/images/products/vaza.png'
import photo2 from '@/assets/images/products/matras.png'
import photo3 from '@/assets/images/products/moshinaoyinchoq.png'
import photo4 from '@/assets/images/products/koptok.png'
import photo5 from '@/assets/images/products/podarka1.png'
import photo6 from '@/assets/images/products/podarka2tedy.png'
import photo7 from '@/assets/images//products/sideniya.png'
import photo8 from '@/assets/images/products/rul.png'
import photo9 from '@/assets/images/products/SmartWatch.svg'
import photo10 from '@/assets/images/products/XiaomiMi13Lite.png'
import photo11 from '@/assets/images/products/tush.png'
import photo12 from '@/assets/images/products/Pudra.png'
import photo13 from '@/assets/images/products/logitech.jpg'
import photo14 from '@/assets/images/products/naushnik.png'
import photo15 from '@/assets/images/products/soat1.png'
import photo16 from '@/assets/images/products/soat2.png'
import photo17 from '@/assets/images/products/DefenderTornadoBlack.png'
import photo18 from '@/assets/images/products/EvilloverINTEXBest.png'
import photo19 from '@/assets/images/products/ismlarkitobi.png'
import photo20 from '@/assets/images/products/utkankunlar.png'
import photo21 from '@/assets/images/products/razer.png'
import photo22 from '@/assets/images/products/HyperPulseFireSurge.png'
import photo23 from '@/assets/images/products/Gantel.png'
import photo24 from '@/assets/images/products/Tredmil.png'
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~category photo~~~~~~~~~~~~~~~~~~~~~~~~~
import photoCategory1 from '@/assets/images/category/Category-1.png'
import photoCategory2 from '@/assets/images/category/Category-2.png'
import photoCategory3 from '@/assets/images/category/Category-3.png'
import photoCategory4 from '@/assets/images/category/Category-4.png'
import photoCategory5 from '@/assets/images/category/Category-5.png'
import photoCategory6 from '@/assets/images/category/Category-6.png'
import photoCategory7 from '@/assets/images/category/Category-7.png'
import photoCategory8 from '@/assets/images/category/Category-8.png'
import photoCategory9 from '@/assets/images/category/Category-9.png'
import photoCategory10 from '@/assets/images/category/Category-10.png'
import photoCategory11 from '@/assets/images/category/Category-11.png'
import photoCategory12 from '@/assets/images/category/Category-12.png'
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~brand photo~~~~~~~~~~~~~~~~~~~~~~~~~
import brand1 from '@/assets/images/brand/apple.svg'
import brand2 from '@/assets/images/brand/lg.svg'
import brand3 from '@/assets/images/brand/acer.svg'
import brand4 from '@/assets/images/brand/sony.svg'
import brand5 from '@/assets/images/brand/asus.svg'
import brand6 from '@/assets/images/brand/hp.svg'
const datafiles = {
    products:[
        {
            id:1,
            name:"Vaza",
            img:photo1,
            brand:'Lga',
            category:'uyvahovli',
            love:false,
            price: '420 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Dostonbek',
            tovarlari:'4',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hamyonbop',
                "o'lchami katta",
                'Keramika',
                'Chidamlik',
                'razmeri 60x20',   
            ],
        },
        {
            id:2,
            name:"Matras",
            img:photo2,
            brand:'Lga',
            category:'uyvahovli',
            love:false,
            price: '1 220 000',
            rating:5,
            amount:1,
            stats:'new',
            bop:true,
            sotuvchi:'Dostonbek',
            tovarlari:'4',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hamyonbop',
                "o'lchami katta",
                'Yumshoq',
                'Prujina',
                'Chidamlik',
                'razmeri 160x200',   
            ],
        },
        {
            id:3,
            name:"Moshina",
            img:photo3,
            brand:'Sony',
            category:'bolalaruchun',
            love:false,
            price: '720 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Dostonbek',
            tovarlari:'4',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Chidamlik',
                'Baquvvat',
                'Pulitlik',
                'Pulsiz boshqaruv',
            ],
        },
        {
            id:4,
            name:"Koptok",
            img:photo4,
            brand:'Noname',
            category:'bolalaruchun',
            love:false,
            price: '200 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Dostonbek',
            tovarlari:'4',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Chidamlik',
                'Baquvvat',
                'Mashhurlik',
            ],
        },
        {
            id:5,
            name:"Shokolad",
            img:photo5,
            brand:'Noname',
            category:'sovgalar',
            love:false,
            price: '265 000',
            rating:4,
            amount:1,
            stats:'new',
            bop:false,
            sotuvchi:'Shahzoda',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Chiroylik',
                "Mazalik",
                'Shokoladlik',
                'Prujina',
                'Snikerslik',
                'Ichida 14-15 ta',   
            ],
        },
        {
            id:6,
            name:"Teddy",
            img:photo6,
            brand:'Noname',
            category:'sovgalar',
            love:false,
            price: '480 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:true,
            sotuvchi:'Shahzoda',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Chiroylik',
                "Yoqimlik",
                'Yumshoq',
                'Chidamlik',
                'Snikerslik',
                'Hajmi 100x50',   
            ],
        },
        {
            id:7,
            name:"O'rindiq",
            img:photo7,
            brand:'Noname',
            category:'avtomabillaruchun',
            love:false,
            price: '1 350 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Sardor',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Chidamlik',
                "Go'jadan",
                'Hamma rangi',
                "Rangi o'chmas",
                'Zavod',
                "4 ta o'rindiq"  
            ],
        },
        {
            id:8,
            name:"Rul",
            img:photo8,
            brand:'Noname',
            category:'avtomabillaruchun',
            love:false,
            price: '735 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Sardor',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Chidamlik',
                "O'chmas",
                'Yumshoq',
                'Zamonaviy',
                'Funksiyaga boy',   
            ],
        },
        {
            id:9,
            name:"Smart Watch (M16Plus)",
            img:photo9,
            brand:'Apple',
            category:'smartfonlar',
            love:false,
            price:'509 000',
            rating:4,
            amount:1,
            stats:'new',
            bop:false,
            sotuvchi:'Bekzod',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hamyonbop',
                'Suvda ham ishlaydi',
                'Knopkasi sensorli ',
                'Vaqt va Sana',
                'Pulsni o’lchaydi',
                'Xabarlarni ko’rish',
                'Ob-havo',
                '️Fitness funksiyalar',
                'Qadamni o’lchaydi', 
                '200mAh',
                'Xotirasi 128mb'
            ],
        },
        {
            id:10,
            name:"XiaomiMi13Lite",
            img:photo10,
            brand:'RedMi',
            category:'smartfonlar',
            love:false,
            price: '2 200 000',
            rating:5,
            amount:1,
            stats:'new',
            bop:true,
            sotuvchi:'Bekzod',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Metallika',
                'Suvda ham ishlaydi',
                'Amulet',
                '200 МП',
                'Tezkor hotira 16gb',
                '8 Yadrolik',
                '4000mAh',
                'Xotirasi 256gb'
            ],
        },
        {
            id:11,
            name:"Loreal tush",
            img:photo11,
            brand:'Noname',
            category:'gozallikvasalomatlik',
            love:false,
            price: '119 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Dinara',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hamyonbop',
                "Uzoq o'chmaydi",
                "Ranglari bor",
                'Mashhur'    
            ],
        },
        {
            id:12,
            name:"Loreal pudra",
            img:photo12,
            brand:'Noname',
            category:'gozallikvasalomatlik',
            love:false,
            price: '120 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Dinara',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hamyonbop',
                "Uzoq o'chmaydi",
                "Ranglari bor",
                'Mashhur'    
            ],
        },
        {
            id:13,
            name:"Logitech G PRO X",
            img:photo13,
            brand:'Noname',
            category:'quloqchinlar',
            love:false,
            price: '1 540 000',
            rating:5,
            amount:1,
            stats:'new',
            bop:false,
            sotuvchi:'Timur',
            tovarlari:'4',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hamyonbop',
                "Uzoq chidaydi",
                "Funksiyaviy",
                'Simsiz',
                'Ovozi 5+ pro',
                "O'yin va kinoga",
                "Dolby digital"
            ],
        },
        {
            id:14,
            name:"Quloqchin Ferre",
            img:photo14,
            brand:'Hp',
            category:"quloqchinlar",
            love:false,
            price: '270 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:true,
            sotuvchi:'Timur',
            tovarlari:'4',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hamyonbop',
                "Uzoq chidaydi",
                "Funksiyaviy",
                'Simsiz',
                'Ovozi 5+ pro',
                "Sport uchun"
            ],
        },
        {
            id:15,
            name:"Moon Black",
            img:photo15,
            brand:'Acer',
            category:'aqllisoatlar',
            love:false,
            price: '1 120 000',
            rating:5,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Timur',
            tovarlari:'4',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hamyonbop',
                "Uzoq chidaydi",
                "Kompusli",
                "Quyoshdan zaryad"
            ],
        },
        {
            id:16,
            name:"Smart Sezzer",
            img:photo16,
            brand:'Acer',
            category:'aqllisoatlar',
            love:false,
            price: '950 000',
            rating:4,
            amount:1,
            stats:'new',
            bop:false,
            sotuvchi:'Timur',
            tovarlari:'4',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hamyonbop',
                "Uzoq chidaydi",
                "Funksiyaviy",
                "Kompusli",
                "Blutuslik",
                "250 mah"
            ],
        },
        {
            id:17,
            name:"Defender Tornado Black",
            img:photo17,
            brand:'Noname',
            category:'kolonkalar',
            love:false,
            price: '1 210 000',
            rating:5,
            amount:1,
            stats:'old',
            bop:true,
            sotuvchi:'Maksim',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Chidamlik',
                "Akustikalik",
                "Kompyuterga",
                "Ovozi Baland 5x"
            ],
        },
        {
            id:18,
            name:"Evillover INTEX Best",
            img:photo18,
            brand:'Noname',
            category:'kolonkalar',
            love:false,
            price: '3 950 000',
            rating:5,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Maksim',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                "Chidamlik",
                "Akustikalik",
                "Funksiyaviy",
                "Blutslik ulanadi",
                "Ovozi Baland 15x",
                "Studiyaviy",
                "Pulitlik",
                "Karaoke",
                "Mikrofonlik",
                "Tinniqlik ovozi"
            ],
        },
        {
            id:19,
            name:"Ismlar kitobi",
            img:photo19,
            brand:'Noname',
            category:"kitoblar",
            love:false,
            price: '70 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:true,
            sotuvchi:'Hadicha',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Hammai ism tarifi',
                "Imlo hatolari"
            ],
        },
        {
            id:20,
            name:"O'tkan kunlar",
            img:photo20,
            brand:'Noname',
            category:"kitoblar",
            love:false,
            price: '150 000',
            rating:5,
            amount:1,
            stats:'new',
            bop:false,
            sotuvchi:'Hadicha',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Tarixiy',
                "Abdulla Qodiriy"
            ],
        },
        {
            id:21,
            name:"Razer klaviatura",
            img:photo21,
            brand:'Noname',
            category:'kompyuteruchun',
            love:false,
            price: '1 120 000',
            rating:5,
            amount:1,
            stats:'new',
            bop:false,
            sotuvchi:'Alex',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'RGBA rangli',
                "Mexanik tizim",
                "Metalldan",
                "3 million bosim",
                "0.1 sekund",
                "O'yin uchun",
                "Saqlash funksiyasi"
            ],
        },
        {
            id:22,
            name:"HyperX Pulse Sichqoncha",
            img:photo22,
            brand:'Noname',
            category:'kompyuteruchun',
            love:false,
            price: '850 000',
            rating:5,
            amount:1,
            stats:'old',
            bop:true,
            sotuvchi:'Alex',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'RGBA rangli',
                "Metalldan",
                "3 million bosim",
                "0.1 sekund",
                "O'yin uchun",
                "32000 DPI"
            ],
        },
        {
            id:23,
            name:"Gantel",
            img:photo23,
            brand:'Noname',
            category:"sportuchun",
            love:false,
            price: '510 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:false,
            sotuvchi:'Aziz',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Temirdan',
                "Chidamlik",
                "Rangi o'chmaydi",
                "2 talik",
                "40 kg"
            ],
        },
        {
            id:24,
            name:"Tredmil (yugurish)",
            img:photo24,
            brand:'Asus',
            category:"sportuchun",
            love:false,
            price: '1 350 000',
            rating:4,
            amount:1,
            stats:'old',
            bop:true,
            sotuvchi:'Aziz',
            tovarlari:'2',
            get totalsum(){
                const numericPrice = parseFloat(this.price.replace(/\s+/g, '').replace(',', '.'));
                return numericPrice * this.amount;
            },
            info:[
                'Metalldan',
                "Baquvvat",
                "Funksiyaviy",
                "Tezligi max 50",
                "kotarishi 150kg"
            ],
        },
      
       
       
       

    ],
    productscategory:[
        {
            id:'uyvahovli',
            title:'Uy va hovli uchun',
            images:photoCategory1
        },
        {
            id:'bolalaruchun',
            title:'Bolalar uchun',
            images:photoCategory2
        },
        {
            id:'sovgalar',
            title:'Sovg’alar',
            images:photoCategory3
        },
        {
            id:'avtomabillaruchun',
            title:'Automobillar uchun',
            images:photoCategory4
        },
        {
            id:'smartfonlar',
            title:'Smartfonlar',
            images:photoCategory5
        },
        {
            id:'gozallikvasalomatlik',
            title:'Go’zallik va salomatlik',
            images:photoCategory6
        },
        {
            id:'quloqchinlar',
            title:'Quloqchinlar',
            images:photoCategory7
        },
        {
            id:'aqllisoatlar',
            title:'Aqlli soatlar',
            images:photoCategory8
        },
        {
            id:'kolonkalar',
            title:'Kolonkalar',
            images:photoCategory9
        },
        {
            id:'kitoblar',
            title:'Kitoblar',
            images:photoCategory10
        },
        {
            id:'kompyuteruchun',
            title:'Kompyuter uchun',
            images:photoCategory11
        },
        {
            id:'sportuchun',
            title:'Sport uchun',
            images:photoCategory12
        },
    ],
    productsbrand:[
        {
         name:'Apple',
         images:brand1,
        },
        {
         name:'Lga',
         images:brand2,
        },
        {
         name:'Acer',
         images:brand3,
        },
        {
         name:'Sony',
         images:brand4,
        },
        {
         name:'Asus',
         images:brand5,
        },
        {
         name:'Hp',
         images:brand6,
        },
    ]
    
}

export default datafiles