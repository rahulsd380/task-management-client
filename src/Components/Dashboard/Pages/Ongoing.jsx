import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosClient from "../../Hooks/useAxiosClient";
import useAllTasks from "../../Hooks/useAllTasks";
import Header from "./Header";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import finding from "../../../../public/finding.json";
import empty from "../../../../public/empty.json";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const Ongoing = () => {
  const axiosUser = useAxiosClient();
  const [allTasks, isLoading, refetch] = useAllTasks();

  const ongoingLists = allTasks.filter((list) => list.status === "On-going");

  const handleMakeCompleted = (item) => {
    axiosUser.patch(`/tasks/completed/${item._id}`).then((res) => {
      console.log(res.data);
      const toastId = toast.loading("Updating status...");
      if (res.data.modifiedCount > 0) {
        toast.success(`Congratulations!! ${item.title} has been Completed`, {
          id: toastId,
        });
        refetch();
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto pb-10">
      <Header></Header>

      <h1 className="text-3xl font-bold mb-7 pb-3 border-b text-gray-500 flex items-center gap-2">
        <FaPersonWalkingArrowRight className="text-teal-500"></FaPersonWalkingArrowRight>{" "}
        On-Going Task List
      </h1>
      {isLoading ? (
        <div className="flex justify-center">
          <div className="w-48">
            <Lottie animationData={finding}></Lottie>
          </div>{" "}
        </div>
      ) : (
        <div>
          {ongoingLists.length == 0 ? (
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <div className="w-48">
                  <Lottie animationData={empty}></Lottie>
                </div>
                <h1 className="text-teal-500 text-3xl font-bold text-center mb-5">
                  No task available
                </h1>
                <Link to={"/dashboard/addTask"}>
                  <button className="text-white font-semibold px-4 py-2 bg-gradient-to-r from-emerald-300 to-emerald-500 transition duration-300 rounded-md text-center">
                    Add New Task
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {ongoingLists.map((list) => (
                <div key={list._id}>
                  <div className="bg-[#F1F1F2] p-3 rounded-md">
                    <h1 className="text-2xl font-bold mb-1 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                      {list.title}
                    </h1>

                    <div className="flex justify-between items-center mb-1">
                      <p className="flex items-center gap-2 text-sm text-[#6D6E70]">
                        <FaUser></FaUser> {list.userName}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-[#6D6E70]">
                        <MdOutlineDateRange></MdOutlineDateRange>{" "}
                        {list.deadline}
                      </p>
                    </div>

                    <p className="mb-2 text-[#6D6E70]">
                      {list.taskDescription}
                    </p>

                    <button
                      onClick={() => handleMakeCompleted(list)}
                      className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-md w-full text-center"
                    >
                      Mark As Completed
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      
    </div>
  );
};

export default Ongoing;
