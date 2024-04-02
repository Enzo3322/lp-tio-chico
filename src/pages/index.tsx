import dynamic from "next/dynamic";
import { Lato } from "next/font/google";
import { FaCheck } from "react-icons/fa6";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const inter = Lato({
  subsets: ["latin"],
  weight: ["400", "300", "700", "900"],
});

const btnStyles =
  "bg-red-500 text-white md:px-[100px] md:w-auto w-full h-[50px] rounded-md hover:bg-red-600 transition-all";

const basePath = "/lp-tio-chico/";

export default function Home() {
  return (
    <main
      className={`flex flex-col md:gap-40 gap-20 md:px-36 p-5 max-w-screen-xl m-auto ${inter.className}`}
    >
      <section id="hero">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* <p className="text-sm text-gray-900 uppercase">TCJJ Apresenta</p> */}
          <img
            src={`${basePath}logo.png`}
            alt="Logo tio chico jiu jitsu"
            className="w-40  mix-blend-multiply"
          />
          <h1 className="md:text-[50px] text-[40px] leading-none font-black mb-2">
            Curso de Jiu Jitsu Intensivo Tio Chico
          </h1>
          <p className="md:text-2xl text-lg mb-10 font-normal max-w-xl">
            Descubra os segredos deste esporte milenar e transforme sua vida!
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-10">
          <div className="rounded overflow-hidden  w-full aspect-video">
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=b_kwICQ2VWA"
              controls={false}
              config={{
                youtube: {
                  playerVars: { showinfo: 0, controls: 0 },
                  embedOptions: {},
                },
              }}
            />
          </div>

          <button className={btnStyles}>VER MAIS</button>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 w-full">
            <img
              src={`${basePath}jiu.png`}
              alt=""
              className="object-cover h-60 rounded w-full"
            />
            <img
              src={`${basePath}jiu.png`}
              alt=""
              className="object-cover h-60 rounded w-full"
            />
            <img
              src={`${basePath}jiu.png`}
              alt=""
              className="object-cover h-60 rounded w-full"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex md:flex-row flex-col gap-6 items-start">
          <h2 className="md:text-[40px] text-[30px] font-black w-full">
            O que você vai aprender neste treinamento
          </h2>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex gap-4 items-center">
              <FaCheck size={24} />
              <p>
                Parte UM - Fundamentos do Jiu Jitsu <br />
                Aprenda as bases sólidas deste arte marcial, desde os movimentos
                básicos até técnicas avançadas de defesa e ataque.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaCheck size={24} />
              <p>
                Parte DOIS - Aperfeiçoamento Técnico <br />
                Refine sua técnica e aprimore seu estilo de luta, dominando
                estratégias eficazes para superar seus oponentes.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaCheck size={24} />
              <p>
                Parte TRÊS - Mentalidade Vitoriosa <br />
                Desenvolva uma mentalidade forte e determinada que o guiará não
                apenas no tatame, mas em todas as áreas da sua vida.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-10">
          <h2 className="md:text-[40px] text-[30px] font-black w-full text-center">
            Acesso a um conhecimento profundo do Jiu Jitsu
          </h2>
          <div className="flex gap-6 md:flex-row flex-col-reverse">
            <div className="w-full">
              <p className="md:mb-14 mb-5 text-lg ">
                Acesso a um conhecimento profundo do Jiu Jitsu, permitindo-lhe
                fortalecer seu corpo, mente e espírito. Liberte seu potencial
                máximo e alcance novos patamares de habilidade.
              </p>
              <button className={btnStyles}>ASSINAR MATERIAL</button>
            </div>
            <div className="w-full">
              <img
                src={`${basePath}jiu.png`}
                alt=""
                className="object-cover h-60 w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-10">
          <h2 className="md:text-[40px] text-[30px] font-black w-full text-center">
            Aprimore sua técnica
          </h2>
          <div className="flex gap-6 md:flex-row flex-col">
            <div className="w-full">
              <img
                src={`${basePath}jiu.png`}
                alt=""
                className="object-cover h-60 w-full rounded"
              />
            </div>
            <div className="w-full">
              <p className="md:mb-14 mb-5 text-lg ">
                Aprimoramento técnico para superar desafios, seja no treino ou
                na competição. Aprenda a ler e antecipar os movimentos do seu
                oponente, tornando-se um lutador mais completo e eficaz.
              </p>
              <button className={btnStyles}>ASSINAR MATERIAL</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-10">
          <h2 className="md:text-[40px] text-[30px] font-black w-full text-center">
            Mentalidade Vitoriosa
          </h2>
          <div className="flex gap-6 md:flex-row flex-col-reverse">
            <div className="w-full">
              <p className="md:mb-14 mb-5 text-lg ">
                Uma mentalidade vencedora que o capacitará a enfrentar qualquer
                obstáculo com confiança e determinação. Transforme desafios em
                oportunidades e alcance o sucesso em todas as áreas da sua vida.
              </p>
              <button className={btnStyles}>ASSINAR MATERIAL</button>
            </div>
            <div className="w-full">
              <img
                src={`${basePath}jiu.png`}
                alt=""
                className="object-cover h-60 w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center gap-10 mb-20">
          <h2 className="md:text-[40px] text-[30px] font-black w-full text-center max-w-4xl">
            Tenha acesso a aulas completas e exclusivas de Jiu Jitsu, com mais
            de 50 aulas disponíveis para você assistir quando e onde quiser.
          </h2>
          <button className={btnStyles}>ASSINAR MATERIAL</button>
        </div>
      </section>
    </main>
  );
}
