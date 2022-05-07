import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {UserListPage} from './pages/user-list/UserListPage';

export const PATH = {
    USER_LIST: '/user-list',
    USER_PROFILE: '/user-profile',
}

const App = () => {
    return (
        <>
            {/*<Routes>*/}
                {/*<Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>*/}
                {/*<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>*/}
                {/*<Route path={PATH.JUNIOR} element={<Junior/>}/>*/}
                {/*<Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>*/}
                {/*<Route path={'*'} element={<Error404/>}/>*/}
            {/*</Routes>*/}
            <UserListPage/>
        </>
    );
};

export default App;