import { useEffect, useState } from "react";
import { ButtonLike } from "./styles";
import likeWhite from "/img/like1.svg";
import likeBlack from "/img/like2.svg";

const LikeButton = ({ name }: { name: string }) => {
  const [image, setImage] = useState(likeWhite);

  const onClick = () => {
    if (image === likeWhite) {
      setImage(likeBlack);
      localStorage.setItem(name, "true");
    } else {
      setImage(likeWhite);
      localStorage.setItem(name, "false");
    }
  };

  useEffect(() => {
    const isliked = localStorage.getItem(name);
    if (isliked === "true") {
      setImage(likeBlack);
    } else {
      setImage(likeWhite);
    }
  }, []);

  return (
    <ButtonLike onClick={onClick}>
      <img src={image} />
    </ButtonLike>
  );
};
export default LikeButton;
