const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('Event:', event);
    console.log('👍', 'beforeinstallprompt', event);
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('Installing...');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        console.log('Error...');    
    return;
    }
    // Show prompt
    promptEvent.prompt();
    // window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
    console.log("Done");
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("App installed!");
    window.deferredPrompt = null;
});
