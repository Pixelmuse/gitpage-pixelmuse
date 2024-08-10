body, html {
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
    font-family: 'Fira Mono', monospace;
    overflow: hidden;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: background-color 0.5s ease;
}

#pulse {
    width: 20px;
    height: 20px;
    background-color: #ff0033;
    border-radius: 50%;
    animation: pulse 1.5s infinite;
    cursor: pointer;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

.hidden {
    display: none;
}

#content {
    text-align: center;
    padding: 20px;
    position: absolute;
    width: 90%; 
    height: 90%; 
    left: 5%; 
    top: 5%; 
}

#quoteText {
    margin-bottom: 10px;
    max-width: 90vw;
    word-wrap: break-word;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

.flash-effect {
    color: grey;
    font-weight: bold;
    font-size: 2vw;
    opacity: 0;
    animation: flash 0.5s forwards;
}

@keyframes flash {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}

.fade-effect {
    opacity: 0;
    animation: fadeIn 1.5s forwards;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.shadow-effect {
    text-shadow: 2px 2px 8px #ff0033;
}

@media (max-width: 600px) {
    #quoteText {
        font-size: 2vw;
    }
}
