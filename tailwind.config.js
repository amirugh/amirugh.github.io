/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      colors : {
        "brown" : {
          "100": "#ECE0D1" , 
          "300": "#DBC1AC" , 
          "600": "#967259" , 
          "900": "#634832" 
        }
      },
      boxShadow : {
        "normal" : "0px 1px 10px 0px rgba(0, 0, 0, 0.05);" ,
      },
      borderRadius : {
        "4xl" :"2rem"
      },
      fontFamily : {
        "dana" :"dana" ,
        "danaDemiBold" : "dana DemiBold" ,
        "danaMediume" : "dana Mediume" , 
        "morabbaBold" : "morabba Bold" ,         
        "morabbaLight" : "morabba Light" ,       
        "morabbaMediume" : "morabba Mediume"          
      },
      letterSpacing : {
        "tightest" : "-0.065em"
      },
      container : {
        center : true, 
        padding : {
          DEFAULT : "1rem",
          lg : "0.625rem"
        }
      },
      backgroundImage : {
        "desctop-img" : "url(/src/img/headerBgDesktop.webp)" ,
        "mobile-img" : "url(/src/img/headerBgMobile.webp)"
      },
    },
    screens:{
      "xs" : "480px" ,
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',  
    },
  },
  plugins: [
  function({addVariant}){
    addVariant("child","& > *");
    addVariant("child-hover","& > *:hover")
  }
  ],
}


