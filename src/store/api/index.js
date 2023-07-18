import Axios from "../../utils/Axios";
import { BASE_URL } from "@env";

export const StudentRegistrationGetLut = () => {
  const URL =
    "/lut/?lutList=stuProgramCatalog&lutList=stuBranchCatalog&lutList=universityCatalog&lutList=programType&lutList=registeredColleges";
  return Axios.get(URL).then((res) => res.data);
};
