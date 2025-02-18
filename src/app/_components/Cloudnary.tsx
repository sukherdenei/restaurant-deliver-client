// "use client";

// import { useState } from "react";

// export const CloudnaryUpload = () => {
//   const [file, setFile] = useState(null);

//   const PRESET_NAME = "myfirstPresent";
//   const CLOUDINAY_NAME = "481865156991587";

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFile(file);
//     }
//   };

//   const handleUpload = async () => {
//     console.log("image uploading");
//     if (!file) {
//       alert("Pls select a file");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", PRESET_NAME);
//     formData.append("api_key", CLOUDINAY_NAME);

//     try {
//       const res = await fetch(
//         `http://api.cloudinary.com/v1_1/${CLOUDINAY_NAME}/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await res.json();
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//       alert("Failed to upload file");
//       setFile(null);
//     }
//     console.log(file);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFile} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };
