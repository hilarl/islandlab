import NextImage from "next/image";

const CustomImage = ({ src, ...rest }) => {
  return (
    <>
      <div className="image-container">
        <NextImage layout="fill" src={src} {...rest} />
      </div>
    </>
  );
};

// Next js has a good image optimization but we don't have the flexible stylings.
// The default instrinsic layout is good for optimization but we need to provide both width and height. And we can't use % for the values too

export default CustomImage;
