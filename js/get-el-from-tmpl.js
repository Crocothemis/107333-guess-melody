const getElFromTempl = (template) => {
  const container = document.createElement(`template`);
  container.innerHTML = template;
  return container.content;
};

export default getElFromTempl;
