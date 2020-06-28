import React from 'react';
import './adminPage.css'
import SearchBar from '../../components/SearchBarComponent/SearchBar'

export default function AdminPage() {
    return (
        <div className="admin-page-container">
            <h1 className="admin-header">Admin of KPTYN</h1>

            <SearchBar/>
            
            
        </div>
    )
}
