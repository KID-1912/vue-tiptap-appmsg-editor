const svgModules = import.meta.glob("./svg/**/*.svg", {
  query: "?component",
});
const svgComponents = {};
for (let key in svgModules) {
  svgComponents[key] = defineAsyncComponent(svgModules[key]);
}

export default defineComponent({
  name: "SvgIcon",
  props: {
    name: { type: String, default: "" },
  },
  setup(props) {
    const SvgComponent = shallowRef(null);
    watch(
      () => props.name,
      () => (SvgComponent.value = svgComponents[`./svg/${props.name}.svg`]),
      { immediate: true }
    );
    return () => h(SvgComponent.value);
  },
});
