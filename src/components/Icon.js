const images = {};

function importAll(r) {
  r.keys().forEach((fileName) => {
    const key = fileName.replace("./", "").replace(".png", "");
    images[key] = r(fileName);
  });
}

importAll(require.context("../res/icons/modern/", true, /\.png$/));

function Icon(props) {
  return (
    <div className={`h-[${props.h}px] w-[${props.w}px]`}>
      <img src={images[props.icon]} className="translate-y-2" />
    </div>
  );
}

export default Icon;
