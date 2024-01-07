'use client'
import React from 'react'

function Loading() {
    return (
        <div className="absolute top-0 w-full bg-gray-200 h-2.5 dark:bg-gray-700">
            <div className="bg-blue-800 h-2.5" style={{"width": "90%"}}></div>
        </div>
    )
}

export default Loading