import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { BoardList } from '../components/board-list';
import BoardView from '../views/BoardView';
import LoadErrorView from '../views/LoadError';

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <BoardList />,
        errorElement: <LoadErrorView />,
    },
    {
        path: "/board/:id",
        element: <BoardView />,
        caseSensitive: true,
        loader: () => {
            return {
                yes: false
            };
        }
    }
]);

export default MainRouter;