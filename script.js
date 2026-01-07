body {
    margin:0;
    font-family: Arial, sans-serif;
    background:#000;
    color:silver;
}

header {
    display:flex;
    justify-content:space-between;
    padding:10px 20px;
    background:#111;
}

button {
    border:1px solid #C0C0C0;
    background:#111;
    cursor:pointer;
    font-weight:bold;
    color:#C0C0C0;
    text-shadow:none;
    transition: all 0.2s ease;
}

button:hover {
    color:#FFFFFF;
    transform: translateY(-1px);
}

button.small { padding:3px 6px; font-size:12px; }
button.medium { padding:8px 15px; font-size:16px; }
button.large { padding:12px 25px; font-size:20px; }

main {
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    gap:20px;
}

.video, .news, .tips {
    width:90%;
    max-width:600px;
    background:#111;
    padding:15px;
    border:1px solid #C0C0C0;
}

iframe { width:100%; height:300px; }

.point-display { margin-top:10px; font-size:18px; color:white; }

.ad {
    width: 90%;
    max-width: 600px;
    background: #222;
    color: #C0C0C0;
    border: 1px solid #C0C0C0;
    padding: 10px;
    text-align: center;
    margin: 10px 0;
    font-weight: bold;
}

.modal {
    display:none;
    position:fixed;
    top:0; left:0;
    width:100%; height:100%;
    background:rgba(0,0,0,0.9);
    color:white;
    overflow:auto;
    padding:50px;
    z-index:200;
}

.modal-content {
    background:#111;
    padding:20px;
    border:1px solid #C0C0C0;
    max-width:600px;
    margin:auto;
}

ul { padding-left:20px; }
