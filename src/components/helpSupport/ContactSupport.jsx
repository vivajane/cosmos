
import Button from "../../components/Button"

const ContactSupport = () => {
  return (
    <div className="p-4 space-y-3">
      <h1 className="text-[#000000] font-sanns font-semibold text-xl">
      Contact Our Support Team
      </h1>
      <form action="">
        <div className="flex gap-4 items-center">
        <div>
          <label
            className="font-normal text-base text-[#1E1E1EBF]"
            htmlFor="fname"
          >
            Full Name
          </label>
          <input
            placeholder="   Enter Full Name"
            className="border w-full py-2 rounded-md my-1"
            type="text"
            name="fname"
            id="fname"
          />
        </div>
        <div>
          <label
            className="font-normal text-base text-[#1E1E1EBF]"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            placeholder="  Enter Email Address"
            className="border w-full py-2 rounded-md my-1"
            type="email"
            name="email"
            id="email"
          />
        </div>

        </div>
        <div>
          <label
            className="font-normal text-base text-[#1E1E1EBF]"
            htmlFor="email"
          >
            Subject
          </label>
          <input
            placeholder="  Enter your subjec"
            className="border w-full py-2 rounded-md my-1"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <textarea className="border text-[#1E1E1E80] w-full py-2 rounded-md my-1" name="textarea" cols="30" rows="10" id="textarea">Describe your issue in detail here</textarea>
        <div>
          <label
            className="font-normal text-base text-[#1E1E1EBF]"
            htmlFor="email"
          >
            Upload files
          </label>
          <input
            placeholder=""
            className="border w-full py-2 rounded-md my-1"
            type="file"
            name="email"
            id="email"
          />
          <p className="text-[#1E1E1E80] text-sm font-normal">File Supported: PNG, JPEG, PDF</p>
        </div>
        <div className="py-12 inline-flex">
            <Button variant="submitt">Send Message</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactSupport;
