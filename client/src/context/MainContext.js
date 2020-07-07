import React, { createContext, useState, useEffect } from "react";
import ChemicalType1 from "../data/chemical_type_1.json";
import ChemicalType2 from "../data/chemical_type_2.json";
export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const arrayOfChemicals = ChemicalType1.concat(ChemicalType2).map((e) =>
    Object.entries(e)
  );
  const arrayOfChemicalsType1 = ChemicalType1.map((e) => Object.entries(e));
  const arrayOfChemicalsType2 = ChemicalType2.map((e) => Object.entries(e));
  //ui
  const [loading, setLoading] = useState(true);

  //data
  const [dataAll, setDataAll] = useState(arrayOfChemicals);
  const [dataType1, setDataType1] = useState(arrayOfChemicalsType1);
  const [dataType2, setDataType2] = useState(arrayOfChemicalsType2);
  const [documents, setDocuments] = useState([]);
  const [list, setList] = useState([]);

  return (
    <MainContext.Provider
      value={{
        loading,
        setLoading,
        dataAll,
        setDataAll,
        dataType1,
        setDataType1,
        dataType2,
        setDataType2,
        documents,
        setDocuments,
        list,
        setList,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
