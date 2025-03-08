import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Error from "../../components/Error";
import Sidebar from "../../components/SideBar";
import VideoCard from "../../components/VideoCard";
import { SkeletonLoader } from "../../components/Loader";
import api from "../../utils/api";

const Feed = () => {
  // State kurulumları
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Url'deki parametreye eriş
  const [params] = useSearchParams();
  const selectedCat = params.get("category");

  // Api'a istek at
  useEffect(() => {
    // Api isteği atılacak url'i belirle
    const url = !selectedCat
      ? "/home"
      : selectedCat === "trending"
      ? "/trending"
      : `/search?query=${selectedCat}`;

    setIsLoading(true);
    // Api'a istek at
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCat]);
  return (
    <div className="flex">
      <Sidebar selectedCat={selectedCat} />
      <div className="videos">
        {isLoading ? (
          <SkeletonLoader />
        ) : error ? (
          <Error />
        ) : (
          videos?.map(
            (video, key) =>
              video.type === "video" && <VideoCard key={key} video={video} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
