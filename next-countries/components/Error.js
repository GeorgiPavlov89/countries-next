import React from 'react'


export default function Error({ isLoading }) {
    return (
        <div>
            {
                isLoading ?
                    <div>

                    </div> : ""
            }
        </div>
    )
}