<template>
  <div class="about">
    <span class="STAabout">SISTECAUT Lda.</span>
    <p>
      A Sistecaut Lda foi criada em novembro de 2003, tem sede em Aveiro e está
      focalizada no fornecimento de máquinas especiais e soluções de automação.
    </p>
    <p>
      Apresenta-se no mercado dotada de meios humanos, técnicos e operacionais,
      para superar as crescentes exigências dos clientes. Consciente dos seus
      recursos e saber, persegue novos desafios e áreas de ação, numa procura
      contínua de desenvolvimento sustentado e aumento de valor na cadeia em que
      participa.
    </p>
    <p>
      Tem capacidade para projetar e construir sistemas por medida, para
      processo industrial ou automatização do mesmo.
    </p>
    <p>
      Integra as tecnologias mais recentes, tais como robótica, servo
      acionamentos e visão artificial. O seu conhecimento e capacidade são
      reconhecidos por alguns parceiros no sector automóvel e de eletrónica, no
      desenvolvimento de máquinas especiais e sistemas de controlo para os seus
      processos de fabrico. Participa também no sector alimentar e plásticos,
      desenvolvendo sistemas de produção, controlo e monitorização de processos.
    </p>
    <p>
      A Sistecaut, Lda tem sido distinguida pelos seus parceiros e clientes com
      confiança e responsabilidade, participando em contratos de elevado valor e
      relevância tecnológica.
    </p>
    <g-image
      class="bottomImage"
      src="~/assets/img/grayScale.jpg"
      alt="aboutImage"
    />
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "About Us"
  },
  name: "About"
};
</script>

<style lang="scss">
/* The sizes definitions can also be strings, you will never know
every single one, but you can get hints by changing these attributes
at the inspect of the page */
.about {
  font-family: var(--main-font-family);
}

.STAabout {
  font-size: 80px;
}

.bottomImage {
  width: 90vw;
  height: 40vh;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  object-position: right;
  overflow: hidden;
}

/* @media (min-width: 1025px) {
  #about {
    height: 80vh;
  }
} */
</style>
