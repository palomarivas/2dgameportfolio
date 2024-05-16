import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
console.log("Initializing i18next...");
i18next
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          tap_click_move: "Tap/Click around to move",
          close: "Close",
          pc: `This is my PC. I work mostly in JavaScript/TypeScript these days. I've made a couple projects in that language using Angular and Vite. Anyway regardless of the method, I just like programming.
            Here is my <a href="https://github.com/palomarivas" target="_blank">Github</a>!`,
          "cs-degree": `These are my programming certificates. I hung them on the wall because I'm proud of them.`,
          "sofa-table": `That's my sofa. I like to relax here and watch YouTube and anime.`,
          tv: `That's my TV. I've been watching tech youtubers a lot recently like :
            <a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>, in this channel I learned how to do this portfolio     actually! I'm learning a lot since I found them <3.`,
          bed: `This is where I sleep. Great ideas comes when I'm lying on my bed.`,
          resume: `This is my desk and on it is my resume. <a href="https://www.linkedin.com/in/palomarivas/" target="_blank">Check it out!</a>
            Contact me at palomarivas96@gmail.com if you have any interesting job opportunities!`,
          projects: `Info about this portfolio : It's made with the Kaboom.js library which is a library for making games in JavaScript.
            Text is rendered with HTML/CSS. So the textbox you're currently reading is not rendered within canvas.`,
          library: `There are a lot of mangas on my shelves. I really like East Asian culture, I've actually studied Korean for 2 years and Japanese for 1 year. I can also speak French, I've studied it throughout all my years in school, and Spanish is actually my native language`,
          exit: `If you want to exit Paloma's portfolio, just close the tab.`,
        },
      },
      es: {
        translation: {
            tap_click_move: "Toque/Haga clic para moverse",
            close: "Cerrar",
            pc: `Esta es mi computadora. Trabajo principalmente en JavaScript/TypeScript estos días. Hice un par de proyectos en ese idioma usando Angular y Vite. De todos modos, independientemente del método, simplemente me gusta programar.
            Aquí está mi <a href="https://github.com/palomarivas" target="_blank">Github</a>!`,
            "cs-degree": `Estos son mis certificados de programación. Los colgué en la pared porque estoy orgullosa de ellos.`,
            "sofa-table": `Ese es mi sofá. Me gusta relajarme aquí a ver YouTube y anime.`,
            tv: `Ese es mi televisor. He estado viendo muchos youtubers de tecnología recientemente como:
              <a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>, ¡en este canal aprendí cómo hacer este portafolio en realidad! Estoy aprendiendo mucho desde que los encontré <3.`,
            bed: `Aquí es donde duermo. Las grandes ideas surgen cuando estoy acostado en mi cama.`,
            resume: `Este es mi escritorio y en él está mi currículum. <a href="https://www.linkedin.com/in/palomarivas/" target="_blank">¡Compruébalo!</a>
            ¡Contáctame en palomarivas96@gmail.com si tienes alguna oportunidad laboral interesante!`,
            projects: `Información sobre este portafolio: está hecho con la biblioteca Kaboom.js, que es una biblioteca para crear juegos en JavaScript.
            El texto se representa con HTML/CSS. Entonces el cuadro de texto que estás leyendo actualmente no se representa dentro del lienzo.`,
            library: `Hay muchos mangas en mis estanterías. Me gusta mucho la cultura del este de Asia. De hecho, estudié coreano durante 2 años y japonés durante 1 año. También puedo hablar francés, lo he estudiado durante todos mis años en la escuela y el español es de hecho mi lengua materna`,
            exit: `Si quieres salir del portafolio de Paloma, simplemente cierra la pestaña.`,
        },
      },
      fr: {
        translation: {
            tap_click_move: "Tap/Click around to move",
            close: "Close",
            pc: `This is my PC. I work mostly in JavaScript/TypeScript these days. I've made a couple projects in that language using Angular and Vite. Anyway regardless of the method, I just like programming.
              Here is my <a href="https://github.com/palomarivas" target="_blank">Github</a>!`,
            "cs-degree": `These are my programming certificates. I hung them on the wall because I'm proud of them.`,
            "sofa-table": `That's my sofa. I like to relax here and watch YouTube and anime.`,
            tv: `That's my TV. I've been watching tech youtubers a lot recently like :
              <a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>, in this channel I learned how to do this portfolio     actually! I'm learning a lot since I found them <3.`,
            bed: `This is where I sleep. Great ideas comes when I'm lying on my bed.`,
            resume: `This is my desk and on it is my resume. <a href="https://www.linkedin.com/in/palomarivas/" target="_blank">Check it out!</a>
              Contact me at palomarivas96@gmail.com if you have any interesting job opportunities!`,
            projects: `Info about this portfolio : It's made with the Kaboom.js library which is a library for making games in JavaScript.
              Text is rendered with HTML/CSS. So the textbox you're currently reading is not rendered within canvas.`,
            library: `There are a lot of mangas on my shelves. I really like East Asian culture, I've actually studied Korean for 2 years and Japanese for 1 year. I can also speak French, I've studied it throughout all my years in school, and Spanish is actually my native language`,
            exit: `If you want to exit Paloma's portfolio, just close the tab.`,
        },
      },
    },
  });
  export default i18next;

  console.log("i18next initialized successfully.");