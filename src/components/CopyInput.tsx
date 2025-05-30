// import { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";

// export default function CopyInput() {
//   const [copyStatus, setCopyStatus] = useState("Copy");
//   const [websiteInput, setWebsiteInput] = useState("https://yourdashboard.com");
//   const year = new Date().getFullYear();

//   return (
//     <div className="flex flex-col md:flex-row gap-4 items-center">
//       <input
//         id="website-input"
//         className="px-4 py-2 rounded-lg bg-[#232336] text-[#f472b6] border border-[#a21caf] focus:outline-none"
//         value={websiteInput}
//         onChange={e => setWebsiteInput(e.target.value)}
//       />
//       <CopyToClipboard
//         text={websiteInput}
//         onCopy={() => {
//           setCopyStatus("Copied");
//           setTimeout(() => setCopyStatus("Copy"), 2000);
//         }}
//       >
//         <button
//           id="copy-button"
//           className="px-4 py-2 rounded-lg neon-glow bg-[#a21caf] text-white font-bold"
//         >
//           <span id="copy-text">{copyStatus}</span>
//         </button>
//       </CopyToClipboard>
//       <span className="ml-2 text-[#a21caf]">© <span id="year">{year}</span></span>
//     </div>
//   );
// }