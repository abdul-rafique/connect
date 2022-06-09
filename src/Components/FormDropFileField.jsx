import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

function FormDropFileField() {
  return (
    <div class="w-full">
      <label class="flex justify-center w-full h-40 px-4 transition bg-white border-2 border-dark/50 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span class="flex flex-col items-center justify-center gap-2 text-dark/50">
          <IoCloudUploadOutline size={36} />
          <span class="font-medium  ">
            Drop files to Attach, or{" "}
            <span class="text-primary underline">browse</span>
          </span>
        </span>
        <input type="file" name="file_upload" class="hidden" />
      </label>
    </div>
  );
}

export default FormDropFileField;
