import { useEffect } from "react";

const useTitle = (title) => {
  return useEffect(() => {
    document.title = `${title} |  ShotHub`;
  }, [title]);
};

export default useTitle;
