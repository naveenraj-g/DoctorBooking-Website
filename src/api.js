import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://localhost:8000/chat';

export const getSessionId = () => {
    let sessionId = localStorage.getItem('session_id');
    if (!sessionId) {
        sessionId = uuidv4();
        localStorage.setItem('session_id', sessionId);
    }
    return sessionId;
};

export const sendMessage = async (message) => {
    const sessionId = getSessionId();

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                session_id: sessionId,
            }),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};
