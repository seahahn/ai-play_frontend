import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import { inputStyle } from "MLML/MLComponents/componentStyle";
import { ContainerContext } from "MLML/MLComponents/Container";

function ProjNameChange({ isOpen, setIsOpen, updateProjName }) {
  const { projName } = useContext(ContainerContext);

  const [newProjName, setNewProjName] = useState(projName);

  useEffect(() => {
    isOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    setNewProjName(projName);
  }, [projName]);

  const handleConfirm = () => {
    if (newProjName) {
      const projIdx = Number(localStorage.getItem("aiplay_proj_idx"));
      setIsOpen(false);
      updateProjName(projIdx, newProjName);
    } else {
      alert("프로젝트명을 입력해주세요.");
    }
  };

  return (
    <div className={classNames(!isOpen && "hidden", "fixed inset-0 z-10 flex justify-center items-center")}>
      <div className="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm" />
      <div className="absolute w-2/5 h-1/5 bg-white border-2 rounded-lg flex flex-col justify-around divide-solid">
        <h3 className="text-xl p-2">프로젝트명 변경</h3>
        <input
          type="text"
          className={inputStyle + " mx-2"}
          placeholder="프로젝트명을 입력해주세요"
          defaultValue={projName}
          onChange={(e) => setNewProjName(e.target.value)}
        />
        <div className="flex flex-row justify-around">
          <button
            type="button"
            onClick={handleConfirm}
            className="border border-blue-500 hover:bg-blue-300 text-black text-sm md:text-xs font-bold w-2/5 py-2 px-2 rounded">
            확인
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="border border-red-500 hover:bg-red-300 text-black text-md md:text-xs font-bold w-2/5 py-2 px-2 rounded">
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProjNameChange);
