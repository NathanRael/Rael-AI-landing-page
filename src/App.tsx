import {Route, Routes} from "react-router-dom";
import MainPage from "@/pages/MainPage";
import DownloadPage from "@/pages/DownloadPage.tsx";
import AppLayout from "@/layout/AppLayout.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route index path={'/'} element={<MainPage/>}/>
                    <Route path={'/download'} element={<DownloadPage/>}/>
                </Route>

            </Routes>
        </>
    )
}

export default App


