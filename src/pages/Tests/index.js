import SearchBox from './SearchBox';
import FilterTab from './FilterTab';
import TestsByInstructors from './TestsIndex/TestsByInstructors';
import TestsBySubjects from './TestsIndex/TestsBySubjects';
import { Header } from './Header';
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function Tests(){
    const { tab } = useContext(AuthContext);
    return (
        <>
            {/* <SearchBox /> */}
            <Header />
            <FilterTab />
            {tab === 0 ? <TestsBySubjects />  : <TestsByInstructors />}
            
        </>
    )
}