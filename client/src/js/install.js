const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the prompt from appearing on mobile
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    // This will allow the event to be triggered later
    window.deferredPrompt = event;
    // Show the install button
    butInstall.classList.toggle('hidden', false);
  });

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable
    window.deferredPrompt = null;
    // Hide the install button.
    butInstall.classList.toggle('hidden', true);
  });

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("App installed!");
    window.deferredPrompt = null;
});
