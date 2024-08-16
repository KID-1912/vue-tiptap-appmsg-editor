<script setup>
const props = defineProps({
  name: { type: String, default: "" },
});

const svgModules = import.meta.glob("./svg/**/*.svg", {
  query: "?component",
});

const SvgComponent = defineAsyncComponent(
  svgModules[`./svg/${props.name}.svg`],
);
</script>

<template>
  <SvgComponent />
</template>

<style lang="" scoped></style>
