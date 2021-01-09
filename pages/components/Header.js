import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = () => {
    return (
        <div className="flex shadow-sm bg-gray-50  p-4 justify-between  ">
            <div className="flex space-x-3  ">
                <p className="text-gray-400">Adress </p>
                <p>0xc14D1bdD7A28b12fa3e88FE2bE9e193Bdfdlk8bb940A6</p>
                <CropLandscapeIcon className="text-gray-300" />
                <DashboardIcon className="text-gray-300" />

            </div>
            <div className="flex space-x-4 text-gray-400 mr-3">

                <AppsIcon />
                <ExitToAppIcon />
                <p className="text-gray-600 font-semibold">Close</p>
            </div>
        </div>
    )
}

export default Header
