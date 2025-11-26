import React from "react";

function ErrorText ({ children }) {
    return (
        <p style={{ color: '#873b3b', fontSize: '12px', fontWeight: '900' }}>{children}</p>
    );
}

export default ErrorText;