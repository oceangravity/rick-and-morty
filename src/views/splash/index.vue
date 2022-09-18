<template>
  <div
    class="header-image text-neutral-200 relative flex min-h-screen flex-col items-center justify-center gap-4 bg-opacity-50 bg-cover bg-center bg-no-repeat object-scale-down p-4 font-montserrat"
  >
    <img src="@/assets/suazo.svg" width="150" alt="Suazo Logo" />

    <img
      class="ricky-and-morty-glow-animation pl-10"
      src="@/assets/rnm-logo.png"
      width="600"
      alt="Ricky And Morty"
    />

    <h1 class="mb-2 text-center text-[36px] font-normal">Bienvenido a Ricky y Morty</h1>

    <h2 class="mb-4 max-w-screen-md text-center text-[18px] font-normal">
      En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de
      código y la reproducción del siguiente diseño.
    </h2>

    <router-link to="main">
      <button class="flex items-center justify-center rounded-3xl bg-gray-600 px-6 py-3 text-white">
        Continuar
      </button>
    </router-link>
  </div>
</template>
