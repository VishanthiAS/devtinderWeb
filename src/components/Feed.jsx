import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = () => {
  if (feed) return;
  const mockData = [
    {
      id: 1,
      name: "Vishanthi",
      avatar: "https://i.pravatar.cc/300?img=1",
      bio: "Frontend Developer from Chennai",
    },
    {
      id: 2,
      name: "Karthik",
      avatar: "https://i.pravatar.cc/300?img=2",
      bio: "Java Developer from Bangalore",
    },
  ];
  dispatch(addFeed(mockData));
};


  useEffect(() => {
    getFeed();
  }, []);
  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};
export default Feed;
