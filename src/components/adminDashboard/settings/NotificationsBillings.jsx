import React from "react";
import { useState } from "react";

const NotificationsBillings = () => {
  const [isOn, setIsOn] = useState(true);
  return (
    <div className="">
      <div className="space-y-4 px-6 py-4">
        <h1 className="font-sanns text-xl font-medium">
          Edit Your Notification Preference
        </h1>
        <h1 className="font-sanns text-lg font-medium">Security Alerts</h1>
      </div>

      <form className="w-full space-y-4 py-6  px-6" action="">
        <div className="flex justify-between items-center">
          <label className="relative text-[#1E1E1EB2] inline-flex items-center cursor-pointer">
            Unusual login attempts
          </label>
          <div>
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div
              className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition ${
                isOn ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                  isOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="relative text-[#1E1E1EB2] inline-flex items-center cursor-pointer">
            Suspicious account activity
          </label>
          <div>
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div
              className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition ${
                isOn ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                  isOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>

        <h1 className="font-sanns text-lg font-medium">
          Transaction Notifications
        </h1>
        <div className="flex justify-between items-center">
          <label className="relative text-[#1E1E1EB2] inline-flex items-center cursor-pointer">
            Payment successful
          </label>
          <div>
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div
              className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition ${
                isOn ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                  isOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="relative text-[#1E1E1EB2] inline-flex items-center cursor-pointer">
            Payment failed
          </label>
          <div>
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div
              className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition ${
                isOn ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                  isOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="relative text-[#1E1E1EB2] inline-flex items-center cursor-pointer">
            Flagged transaction
          </label>
          <div>
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div
              className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition ${
                isOn ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                  isOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <h1 className="font-sanns text-lg font-medium">User Activity</h1>
        <div className="flex justify-between items-center">
          <label className="relative text-[#1E1E1EB2] inline-flex items-center cursor-pointer">
            New user sign-ups
          </label>
          <div>
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div
              className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition ${
                isOn ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                  isOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="relative text-[#1E1E1EB2] inline-flex items-center cursor-pointer">
            Profile Update
          </label>
          <div>
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div
              className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition ${
                isOn ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                  isOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="relative text-[#1E1E1EB2] inline-flex items-center cursor-pointer">
            Account verification reminders
          </label>
          <div>
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div
              className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition ${
                isOn ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                  isOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </form>
      <div className=" flex-col inline-flex justify-end px-6 py-4">
        <button className="px-4 py-2 bg-[#6B911B] text-white rounded-md">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NotificationsBillings;
