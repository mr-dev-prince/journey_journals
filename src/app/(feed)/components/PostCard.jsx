import { CardStackComponent } from "@/components/ui/CardStack";
import {
  IconBookmark,
  IconFileLike,
  IconHeart,
  IconMessageDots,
  IconShare,
} from "@tabler/icons-react";
import React from "react";
import ToolTipBtn from "./ToolTipBtn";

const PostCard = () => {
  return (
    <div className="h-[16rem] ring-1 rounded-lg p-2 ">
      <div className="flex justify-between items-center h-full gap-4">
        <div className="w-[40%]  h-full">
          <CardStackComponent />
        </div>
        <div className=" w-[60%] h-full text-left p-3">
          <div className="w-full h-[85%] flex flex-col">
            <div className="h-[20%]">
              <p className=" font-bold text-lg">
                The craziest celebrations for India win in Indore at 2am
              </p>
            </div>
            <div className="h-[80%]">
              <p className="text-neutral-500">
                Paid homage to Atal Ji at Sadaiv Atal. His visionary leadership
                and commitment to progress greatly benefitted our nation. His
                words and actions continue to inspire us in our pursuit of all
                round development. He remains a guiding light for us all.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 h-[15%]">
            <ToolTipBtn title="like" icon={<IconHeart />} count="1.2k+" />
            <ToolTipBtn
              title="comment"
              icon={<IconMessageDots />}
              count="2k+"
            />
            <ToolTipBtn title="save" icon={<IconBookmark />} count="3k+" />
            <ToolTipBtn title="share" icon={<IconShare />} count="500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
