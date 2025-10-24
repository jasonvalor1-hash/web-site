import React from 'react';
import type { Category } from './types';

export const IconTool = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);
export const IconPowerTool = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
export const IconBuilding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
);
export const IconBulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
);
export const IconPlumbing = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);
export const IconGarden = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
);
export const IconSafety = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 22l9-1.083A12.02 12.02 0 0021 11.083c0-2.396-.757-4.6-2.071-6.425z" /></svg>
);
export const LogoGear = () => (
    <svg className="h-10 w-10 text-red-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.52 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"/>
    </svg>
);
export const SunIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>);
export const MoonIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>);
export const MenuIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>);
export const CloseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>);

export const PlusIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>);
export const MinusIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" /></svg>);
export const TrashIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>);

export const PRODUCT_CATEGORIES: Category[] = [
    {
      id: 'manual-tools', name: 'Herramientas Manuales', icon: <IconTool />,
      products: [
        { id: 1, name: 'Martillo de carpintero', price: 25.00, image: 'https://skyteksecurity.hn/cdn/shop/products/CapturadePantalla2022-09-05ala_s_21.18.15.png?v=1662434451&width=800' },
        { id: 2, name: 'Juego de destornilladores (6 piezas)', price: 35.00, image: 'https://oechsle.vteximg.com.br/arquivos/ids/16907786-1000-1000/imageUrl_1.jpg?v=638366983149230000' },
        { id: 3, name: 'Alicate universal', price: 22.00, image: 'https://dojiw2m9tvv09.cloudfront.net/48473/product/X_t200-65125.jpg?81&time=1760926453' },
        { id: 4, name: 'Llave inglesa ajustable', price: 28.00, image: 'https://media.falabella.com/sodimacPE/9018034_01/w=800,h=800,fit=pad' },
        { id: 5, name: 'Serrucho para madera', price: 30.00, image: 'https://herramientasyequipos.pe/wp-content/uploads/2019/10/300.2.png' },
      ],
    },
    {
      id: 'power-tools', name: 'Herramientas Eléctricas', icon: <IconPowerTool />,
      products: [
        { id: 6, name: 'Taladro percutor 600W', price: 180.00, image: 'https://www.aibitech.com/35878-large_default/taladro-percutor-1-2-600w-3000rpm-44800gpm-velocidad-reversible-roto-1-2a7-2-15346-truper.jpg' },
        { id: 7, name: 'Amoladora angular 750W', price: 210.00, image: 'https://i.blogs.es/727ddd/amoladora-angular-750-w-zoom--1/500_333.webp' },
        { id: 8, name: 'Atornillador inalámbrico', price: 150.00, image: 'https://mundoconstructor.com.pe/wp-content/uploads/2024/11/taladro-inalambrico-3-8-12v-1200rpm-13nm-velocidad-reversible-tali-12a2-2-11010-truper.jpg' },
        { id: 9, name: 'Sierra circular 1200W', price: 330.00, image: 'https://image.made-in-china.com/2f0j00CuHREnBWryqA/High-Performance-1200W-185mm-Multi-Purpose-Circular-Saw.jpg' },
        { id: 10, name: 'Pistola de calor 2000W', price: 160.00, image: 'https://www.herracor.com.uy/imgs/productos/productos31_11088.png' },
      ],
    },
    {
      id: 'construction-materials', name: 'Materiales de Construcción', icon: <IconBuilding />,
      products: [
        { id: 11, name: 'Bolsa de cemento 42.5kg', price: 35.00, image: 'https://caliddape.vtexassets.com/arquivos/ids/169157-800-450?v=638873589152070000&width=800&height=450&aspect=true' },
        { id: 12, name: 'Clavos por kilo', price: 12.00, image: 'https://gin-center.com/wp-content/uploads/2021/07/clavo-2.webp' },
        { id: 13, name: 'Arena gruesa por m³', price: 85.00, image: 'https://ferreteriaconcremar.com.pe/wp-content/uploads/2024/12/product-img-025.jpg' },
        { id: 14, name: 'Fierro corrugado ½” x 9m', price: 35.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgG6jjrpnAtZk_Y3wtPdE4MPieiAyrTwd9Xw&s' },
        { id: 15, name: 'Malla electrosoldada', price: 120.00, image: 'https://aceroscrea.com/wp-content/uploads/2025/03/ficha-malla-electrosoldada.png' },
      ],
    },
    {
      id: 'electricity', name: 'Electricidad', icon: <IconBulb />,
      products: [
        { id: 16, name: 'Cable tipo mellizo (x metro)', price: 2.50, image: 'https://www.ferclimsac.com/wp-content/uploads/2021/11/Cable-Mellizo-14-AWG-100-mt.-Indeco.jpg' },
        { id: 17, name: 'Tomacorriente doble', price: 6.00, image: 'https://dojiw2m9tvv09.cloudfront.net/41864/product/39545.jpg' },
        { id: 18, name: 'Enchufe macho industrial', price: 12.00, image: 'https://cdn3.alegra.com/66161a4cc0a3df10cd9fb75ebaccfcc30b2e7eb4-1627522250-menneke-macho-2P%2BT.jpg?Expires=1761451079&Signature=fqcxykOBoAI9b898RhDGw8mjQGUehqGq9ejRK8b9Z8JPwYicTxHB2P5y~inOTEtK7sRlpBS6YN~0ZI2m2k5I4liER-YOgqh6e6~jhJ-HnhRPl5TKCRXzJLu~8Rbrisx8IydlvLFVv1ghkxjLKRAecnwjtJbNWXXDszWhnL-24jajuWAWu2phyiCySiLY2FwsQE3xnPRTigWd9IAYCtcDnz6OaaYbXfVCxx3iJIpaS66lv2dRlDqSI688WwcgZCxyeqxefCm2oazHqzv~YHCwis1xHwNZqHBahT1UutkW2W1UhYYucobs9JEecTdf5nBusbsN3f76~mZ6BcPSbA0n~Q__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ' },
        { id: 19, name: 'Foco LED 12W', price: 9.00, image: 'https://fascinazion.pe/cdn/shop/files/F12SNSR.jpg?v=1684610152&width=2048' },
        { id: 20, name: 'Cinta aislante 3M', price: 5.50, image: 'https://dojiw2m9tvv09.cloudfront.net/53108/product/gsc-122470410-3343334-11803.jpeg' },
      ],
    },
    {
      id: 'plumbing', name: 'Plomería', icon: <IconPlumbing />,
      products: [
        { id: 21, name: 'Tubo PVC ½” (x metro)', price: 4.50, image: 'https://www.promelsa.com.pe/media/catalog/product/1/0/1028733-01_1.jpg' },
        { id: 22, name: 'Codo PVC ½”', price: 1.20, image: 'https://promart.vteximg.com.br/arquivos/ids/788599-1000-1000/89745.jpg?v=637502902451100000' },
        { id: 23, name: 'Llave de paso metálica', price: 18.00, image: 'https://hoffens.com/1747-large_default/llave-de-paso-metalica-pp-r-fusion.jpg' },
        { id: 24, name: 'Duchas eléctricas', price: 65.00, image: 'https://sumerlabs.com/default/image-tool-lambda?new-width=500&new-height=500&new-quality=50&url-image=https%3A%2F%2Fsumerlabs.com%2Fprod%2Fcatalogue%2F1185a9643c5c413bd13c14c18bb82e5ef0d85fab%2Fimage1b4to8n5la4nmfli04dx.png' },
        { id: 25, name: 'Sellador de rosca', price: 10.00, image: 'https://dm.henkel-dam.com/is/image/henkel/Loctite_542%2021453_237051_threadsealant_50ml?wid=2048&fit=fit%2C1&qlt=90&align=0%2C0&hei=2048' },
      ],
    },
    {
      id: 'gardening', name: 'Jardinería', icon: <IconGarden />,
      products: [
        { id: 26, name: 'Manguera reforzada ½” (x metro)', price: 4.00, image: 'https://promart.vteximg.com.br/arquivos/ids/8782474-700-700/163410.jpg?v=638802535149500000' },
        { id: 27, name: 'Tijera podadora', price: 28.00, image: 'https://oechsle.vteximg.com.br/arquivos/ids/13590649-1000-1000/97374.jpg?v=638102116271570000' },
        { id: 28, name: 'Regadera plástica 5L', price: 22.00, image: 'https://promart.vteximg.com.br/arquivos/ids/8448250-1000-1000/imageUrl_1.jpg?v=638679416372600000' },
        { id: 29, name: 'Pulverizador manual', price: 35.00, image: 'https://promart.vteximg.com.br/arquivos/ids/648524-700-700/134222.jpg?v=637455565796030000' },
        { id: 30, name: 'Pala jardinera', price: 12.00, image: 'https://petitgarden.com.ar/wp-content/uploads/2020/10/pala-jardinera.jpg' },
      ],
    },
    {
      id: 'industrial-safety', name: 'Seguridad Industrial', icon: <IconSafety />,
      products: [
        { id: 31, name: 'Casco de seguridad', price: 25.00, image: 'https://www.materialesjerez.com.mx/wp-content/uploads/2019/04/Casco-seguridad-300x300.png' },
        { id: 32, name: 'Chaleco reflectante', price: 30.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJ23uAJpufYF6Cmh29HIeJiQ87na7aY9eoQ&s' },
        { id: 33, name: 'Guantes de cuero', price: 18.00, image: 'https://storemux.com/wp-content/uploads/2022/11/GUANTE-CARNAZA-MOSTAZA-1.webp' },
        { id: 34, name: 'Botas de jebe', price: 65.00, image: 'https://proingperu.com/wp-content/uploads/2022/04/Botas-de-Jebe-con-Punta-de-Acero-Polishoes.jpg' },
        { id: 35, name: 'Protector auditivo', price: 20.00, image: 'https://libus.pe/media/catalog/product/cache/8c8d34078b36c1ef38bfd913031288cb/l/-/l-300-13.jpg' },
      ],
    }
  ];